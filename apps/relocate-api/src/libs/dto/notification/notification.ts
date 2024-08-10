import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { Member, TotalCounter } from '../member/member';
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

	/** from aggregation **/

	// @Field(() => Member, { nullable: true })
	// memberData?: Member;
}

// @ObjectType()
// export class Notifications {
// 	@Field(() => [Notification])
// 	list: Notification[];
// }
