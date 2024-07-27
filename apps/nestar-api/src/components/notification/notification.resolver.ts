import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import NotificationSchema from '../../schemas/Notification.model';
import { Notification } from '../../libs/dto/notification/notification';
import { NotificationInput } from '../../libs/dto/notification/notification.input';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';
import { shapeIntoMongoObjectId } from '../../libs/config';
@Resolver(() => NotificationSchema)
export class NotificationResolver {
	constructor(private readonly notificationService: NotificationService) {}

	@Mutation(() => Notification)
	async createNotification(@Args('input') input: NotificationInput): Promise<Notification> {
		return await this.notificationService.createNotification(input);
	}

	@Query(() => [Notification])
	public async getNotifications(): Promise<Notification[]> {
		return await this.notificationService.getNotifications();
	}
}
