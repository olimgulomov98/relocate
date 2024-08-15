import { Field, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { NotificationGroup, NotificationStatus, NotificationType } from '../../enums/notification.enum';

@ObjectType()
export class Notification {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => NotificationType)
	notificationType: NotificationType;

	@Field(() => NotificationStatus)
	notificationStatus: NotificationStatus;

	@Field(() => NotificationGroup)
	notificationGroup: NotificationGroup;

	@Field(() => String)
	notificationTitle: string;

	@Field(() => String)
	notificationDesc: ObjectId;

	@Field(() => String)
	authorId: string;

	@Field(() => String)
	receiverId: ObjectId;

	@Field(() => String, { nullable: true })
	propertyId: ObjectId;

	@Field(() => String, { nullable: true })
	articleId: ObjectId;

	@Field(() => Date)
	createdAt: Date;
}
