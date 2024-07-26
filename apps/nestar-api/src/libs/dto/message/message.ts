import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@ObjectType()
export class Message {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => String)
	name: string;

	@Field(() => Int)
	phone: number;

	@Field(() => String)
	email: string;

	@Field(() => String)
	message: string;

	@Field(() => String)
	messageRefId: ObjectId;

	@Field(() => String)
	memberId: ObjectId;

	@Field(() => Date)
	createdAt: Date;

	/** from aggregation **/

	// @Field(() => Member, { nullable: true })
	// memberData?: Member;
}
