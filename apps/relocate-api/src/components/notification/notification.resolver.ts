import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NotificationService } from './notification.service';
import { Notification } from '../../libs/dto/notification/notification';
import { shapeIntoMongoObjectId } from '../../libs/config';
import { ObjectId } from 'mongoose';

@Resolver()
export class NotificationResolver {
	constructor(private readonly notificationService: NotificationService) {}

	@Query(() => [Notification])
	async getNotificationsByUserId(@Args('userId') userId: string): Promise<Notification[]> {
		const id = shapeIntoMongoObjectId(userId);
		return await this.notificationService.getNotificationsByUserId(id);
	}

	@Mutation(() => Boolean)
	async markNotificationAsRead(@Args('notificationId') notificationId: string): Promise<boolean> {
		const id = shapeIntoMongoObjectId(notificationId);
		await this.notificationService.markNotificationAsRead(id);
		return true;
	}
}
