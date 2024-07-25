import { Resolver, Query, Args } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import NotificationSchema from '../../schemas/Notification.model';
import { Notification, Notifications } from '../../libs/dto/notification/notification';
import { Roles } from '../auth/decorators/roles.decorator';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { UseGuards } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { WithoutGuard } from '../auth/guards/without.guard';
import { NotificationsInquiry } from '../../libs/dto/notification/notification.input';
import { shapeIntoMongoObjectId } from '../../libs/config';
@Resolver(() => NotificationSchema)
export class NotificationResolver {
	constructor(private readonly notificationService: NotificationService) {}

	@UseGuards(WithoutGuard)
	@Query((returns) => [Notification])
	public async getNotifications() // @Args('input') input: NotificationsInquiry,
	// @AuthMember('_id') memberId: ObjectId,
	: Promise<Notification[]> {
		// input.search.authorId = shapeIntoMongoObjectId(input.search.authorId);
		return await this.notificationService.getNotifications();
	}
}
