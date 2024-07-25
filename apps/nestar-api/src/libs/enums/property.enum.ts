import { registerEnumType } from '@nestjs/graphql';

export enum PropertyType {
	MOTEL = 'MOTEL',
	VILLA = 'VILLA',
	HOTEL = 'HOTEL',
}
registerEnumType(PropertyType, {
	name: 'PropertyType',
});

export enum PropertyStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(PropertyStatus, {
	name: 'PropertyStatus',
});

export enum PropertyLocation {
	DUBAI = 'DUBAI',
	ABU_DHABI = 'ABU_DHABI',
	FUJAIRAH = 'FUJAIRAH',
	AJMAN = 'AJMAN',
	SHARJAH = 'SHARJAH',
	RAS_AL_KHAIMAH = 'RAS_AL_KHAIMAH',
	UMM_AL_QUWAIN = 'UMM_AL_QUWAIN',
}
registerEnumType(PropertyLocation, {
	name: 'PropertyLocation',
});
