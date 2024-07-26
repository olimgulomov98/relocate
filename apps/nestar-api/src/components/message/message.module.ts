import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import CommentSchema from '../../schemas/Comment.model';
import { AuthModule } from '../auth/auth.module';
import { MemberModule } from '../member/member.module';
import { PropertyModule } from '../property/property.module';
import { BoardArticleModule } from '../board-article/board-article.module';
import { NotificationModule } from '../notification/notification.module';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Comment', schema: CommentSchema }])],
	providers: [],
})
export class MessageModule {}
