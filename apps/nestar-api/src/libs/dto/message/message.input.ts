import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, Length } from 'class-validator';
import { ObjectId } from 'mongoose';

@InputType()
export class MessageInput {
	@IsNotEmpty()
	@Field(() => String)
	name: string;

	@IsNotEmpty()
	@Field(() => Int)
	phone: Number;

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
