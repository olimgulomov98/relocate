import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, Length } from 'class-validator';
import { ObjectId } from 'mongoose';

@InputType()
export class MessageInput {
	@IsNotEmpty()
	@Field(() => String)
	name: string;

	@IsNotEmpty()
	@Field(() => String)
	phone: string;

	@IsNotEmpty()
	@Field(() => String)
	email: string;

	@IsNotEmpty()
	@Length(1, 100)
	@Field(() => String)
	message: string;

	@IsNotEmpty()
	@Field(() => String)
	messageRefId: ObjectId;

	memberId?: ObjectId;
}
