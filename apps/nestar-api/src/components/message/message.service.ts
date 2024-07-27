import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Message } from '../../libs/enums/common.enum';
import { Messages } from '../../libs/dto/message/messages';
import { MessageInput } from '../../libs/dto/message/message.input';
import { NotificationService } from '../notification/notification.service';
import { NotificationGroup, NotificationStatus, NotificationType } from '../../libs/enums/notification.enum';
import { PropertyService } from '../property/property.service';

@Injectable()
export class MessageService {
	constructor(
		@InjectModel('Message') private readonly messageModel: Model<Messages>,
		private readonly notificationService: NotificationService,
		private readonly propertyService: PropertyService,
	) {}

	public async createMessage(memberId: ObjectId, input: MessageInput): Promise<Messages> {
		input.memberId = memberId;

		let result = null;
		try {
			result = await this.messageModel.create(input);
		} catch (err) {
			console.log('Error, Service.model:', err.message);
			throw new BadRequestException(Message.CREATE_FAILED);
		}
		if (!result) throw new InternalServerErrorException(Message.CREATE_FAILED);

		const property = await this.propertyService.getProperty(null, input.messageRefId);

		await this.notificationService.createNotification({
			notificationType: NotificationType.MESSAGE,
			notificationStatus: NotificationStatus.WAIT,
			notificationGroup: NotificationGroup.MEMBER,
			notificationTitle: `New Message`,
			notificationDesc: ` You have a new message regarding your property ${property.propertyTitle} : Name: ${input.name}, Phone: ${input.phone}, Email: ${input.email},  Message: ${input.message}.`,
			authorId: input.memberId,
			receiverId: property.memberData?._id,
		});

		return result;
	}
}
