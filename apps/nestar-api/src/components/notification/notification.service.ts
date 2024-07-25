import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notification, Notifications } from '../../libs/dto/notification/notification';
import { Model, ObjectId } from 'mongoose';
import { NotificationsInquiry, notificationInput } from '../../libs/dto/notification/notification.input';
import { NotificationStatus } from '../../libs/enums/notification.enum';
import { T } from '../../libs/types/common';
import { Direction, Message } from '../../libs/enums/common.enum';
import { lookupMember } from '../../libs/config';

@Injectable()
export class NotificationService {
	@InjectModel('Notification') private readonly notificationModel: Model<Notification>;

	public async createNotification(input: notificationInput): Promise<Notification> {
		const notification = new this.notificationModel(input);
		return await notification.save();
	}

	public async getNotifications(): Promise<Notification[]> {
		// const { authorId } = input.search;
		// const match: T = { authorId: authorId, notificationStatus: NotificationStatus.WAIT };
		// const sort: T = { [input?.sort ?? 'createdAt']: input?.direction ?? Direction.DESC };

		return await this.notificationModel.find().exec();

		// const result: Notifications[] = await this.notificationModel
		// 	.aggregate([
		// 		{ $match: match },
		// 		{ $sort: sort },
		// 		{
		// 			$facet: {
		// 				list: [
		// 					{ $skip: (input.page - 1) * input.limit },
		// 					{ $limit: input.limit },
		// 					// meLiked

		// 					{
		// 						$lookup: {
		// 							from: 'members',
		// 							localField: 'authorId',
		// 							foreignField: '_id',
		// 							as: 'memberData',
		// 						},
		// 					},

		// 					{ $unwind: '$memberData' },
		// 				],
		// 				// metaCounter: [{ $count: 'total' }],
		// 			},
		// 		},
		// 	])
		// 	.exec();
		// if (!result.length) throw new InternalServerErrorException(Message.NO_DATA_FOUND);

		// return result[0];
	}
}
