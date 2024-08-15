import { Field, InputType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { NotificationGroup, NotificationStatus, NotificationType } from '../../enums/notification.enum';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class NotificationInput {
	@IsNotEmpty()
	@Field(() => NotificationType)
	notificationType: NotificationType;

	@IsOptional()
	@Field(() => NotificationStatus, { defaultValue: NotificationStatus.WAIT })
	notificationStatus?: NotificationStatus;

	@IsNotEmpty()
	@Field(() => NotificationGroup)
	notificationGroup: NotificationGroup;

	@IsNotEmpty()
	@Field(() => String)
	notificationTitle: string;

	@IsOptional()
	@Field(() => String)
	notificationDesc: string;

	@IsNotEmpty()
	@Field(() => String)
	authorId: ObjectId;

	@IsNotEmpty()
	@Field(() => String)
	receiverId: ObjectId;

	@IsNotEmpty()
	@Field(() => String, { nullable: true })
	propertyId?: ObjectId;

	@IsNotEmpty()
	@Field(() => String, { nullable: true })
	articleId?: ObjectId;
}
