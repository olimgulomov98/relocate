import { Field, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@ObjectType()
export class Contacts {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => String)
	name: string;

	@Field(() => String)
	phone: string;

	@Field(() => String)
	email: string;

	@Field(() => String)
	message: string;

	@Field(() => String)
	contactRefId: ObjectId;

	@Field(() => String)
	memberId: ObjectId;

	@Field(() => Date)
	createdAt: Date;
}
