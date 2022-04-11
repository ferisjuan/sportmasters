// @vendors
import { FAMILY_SUPPORT, FIELD_POSITION, GUARDIAN_TYPE, PERSONAL_QUALITIES, PHYSICAL_CAPABILITIES, PHYSICAL_QUALITIES, PLAYER_CATEGORY, School } from '@prisma/client';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class PlayerType {
  @Field(() => ID)
  id!: string

  @Field()
  birthday = new Date()

  @Field()
  category = PLAYER_CATEGORY.NONE

  @Field()
  familySupport = FAMILY_SUPPORT.NONE

  @Field()
  fieldPosition = FIELD_POSITION.NONE

  @Field()
  guardianEmail = ''

  @Field()
  guardianId = ''

  @Field()
  guardianIdType = ''

  @Field()
  guardianLastName = ''

  @Field()
  guardianName = ''

  @Field()
  guardianPhone = ''

  @Field()
  guardianType = GUARDIAN_TYPE.NONE

  @Field()
  height = 0

  @Field()
  hobbies = ''

  @Field()
  image = ''

  @Field()
  IMC = 0

  @Field()
  lastName = ''

  @Field()
  name = ''

  @Field()
  personalQualities = PERSONAL_QUALITIES.NONE

  @Field()
  physicalCapabilities = PHYSICAL_CAPABILITIES.NONE

  @Field()
  physicalQualities = PHYSICAL_QUALITIES.NONE

  @Field()
  placeOfBirth = ''

  @Field()
  playerBirthday = new Date()

  @Field()
  playerEmail = ''

  @Field()
  playerId = ''

  @Field()
  playerIdType = ''

  @Field()
  playerNumber = ''

  @Field()
  playerPhone = ''

  @Field()
  school!: School

  @Field()
  schoolId!: string

  @Field()
  sportHistory = ''

  @Field()
  weight = 0

  @Field()
  createdAt!: Date

  @Field()
  updatedAt!: Date
}
