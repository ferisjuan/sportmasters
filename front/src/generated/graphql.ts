import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    ...({"headers":{"Allow-Control-Allow-Origin":"http://localhost:4000","Accept":"application/json","Content-Type":"application/json"},"credentials":"include"}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregatePlayer = {
  __typename?: 'AggregatePlayer';
  _avg?: Maybe<PlayerAvgAggregate>;
  _count?: Maybe<PlayerCountAggregate>;
  _max?: Maybe<PlayerMaxAggregate>;
  _min?: Maybe<PlayerMinAggregate>;
  _sum?: Maybe<PlayerSumAggregate>;
};

export type AggregateSchool = {
  __typename?: 'AggregateSchool';
  _count?: Maybe<SchoolCountAggregate>;
  _max?: Maybe<SchoolMaxAggregate>;
  _min?: Maybe<SchoolMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type ChangePasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumFamily_SupportNullableFilter = {
  equals?: InputMaybe<Family_Support>;
  in?: InputMaybe<Array<Family_Support>>;
  not?: InputMaybe<NestedEnumFamily_SupportNullableFilter>;
  notIn?: InputMaybe<Array<Family_Support>>;
};

export type EnumFamily_SupportNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumFamily_SupportNullableFilter>;
  _min?: InputMaybe<NestedEnumFamily_SupportNullableFilter>;
  equals?: InputMaybe<Family_Support>;
  in?: InputMaybe<Array<Family_Support>>;
  not?: InputMaybe<NestedEnumFamily_SupportNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Family_Support>>;
};

export type EnumField_PositionNullableFilter = {
  equals?: InputMaybe<Field_Position>;
  in?: InputMaybe<Array<Field_Position>>;
  not?: InputMaybe<NestedEnumField_PositionNullableFilter>;
  notIn?: InputMaybe<Array<Field_Position>>;
};

export type EnumField_PositionNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumField_PositionNullableFilter>;
  _min?: InputMaybe<NestedEnumField_PositionNullableFilter>;
  equals?: InputMaybe<Field_Position>;
  in?: InputMaybe<Array<Field_Position>>;
  not?: InputMaybe<NestedEnumField_PositionNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Field_Position>>;
};

export type EnumGuardian_TypeFieldUpdateOperationsInput = {
  set?: InputMaybe<Guardian_Type>;
};

export type EnumGuardian_TypeFilter = {
  equals?: InputMaybe<Guardian_Type>;
  in?: InputMaybe<Array<Guardian_Type>>;
  not?: InputMaybe<NestedEnumGuardian_TypeFilter>;
  notIn?: InputMaybe<Array<Guardian_Type>>;
};

export type EnumGuardian_TypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumGuardian_TypeFilter>;
  _min?: InputMaybe<NestedEnumGuardian_TypeFilter>;
  equals?: InputMaybe<Guardian_Type>;
  in?: InputMaybe<Array<Guardian_Type>>;
  not?: InputMaybe<NestedEnumGuardian_TypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Guardian_Type>>;
};

export type EnumNdi_TypeFieldUpdateOperationsInput = {
  set?: InputMaybe<Ndi_Type>;
};

export type EnumNdi_TypeFilter = {
  equals?: InputMaybe<Ndi_Type>;
  in?: InputMaybe<Array<Ndi_Type>>;
  not?: InputMaybe<NestedEnumNdi_TypeFilter>;
  notIn?: InputMaybe<Array<Ndi_Type>>;
};

export type EnumNdi_TypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumNdi_TypeFilter>;
  _min?: InputMaybe<NestedEnumNdi_TypeFilter>;
  equals?: InputMaybe<Ndi_Type>;
  in?: InputMaybe<Array<Ndi_Type>>;
  not?: InputMaybe<NestedEnumNdi_TypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Ndi_Type>>;
};

export type EnumPersonal_QualitiesNullableListFilter = {
  equals?: InputMaybe<Array<Personal_Qualities>>;
  has?: InputMaybe<Personal_Qualities>;
  hasEvery?: InputMaybe<Array<Personal_Qualities>>;
  hasSome?: InputMaybe<Array<Personal_Qualities>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumPhysical_CapabilitiesNullableListFilter = {
  equals?: InputMaybe<Array<Physical_Capabilities>>;
  has?: InputMaybe<Physical_Capabilities>;
  hasEvery?: InputMaybe<Array<Physical_Capabilities>>;
  hasSome?: InputMaybe<Array<Physical_Capabilities>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumPhysical_QualitiesNullableListFilter = {
  equals?: InputMaybe<Array<Physical_Qualities>>;
  has?: InputMaybe<Physical_Qualities>;
  hasEvery?: InputMaybe<Array<Physical_Qualities>>;
  hasSome?: InputMaybe<Array<Physical_Qualities>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumPlayer_CategoryNullableFilter = {
  equals?: InputMaybe<Player_Category>;
  in?: InputMaybe<Array<Player_Category>>;
  not?: InputMaybe<NestedEnumPlayer_CategoryNullableFilter>;
  notIn?: InputMaybe<Array<Player_Category>>;
};

export type EnumPlayer_CategoryNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumPlayer_CategoryNullableFilter>;
  _min?: InputMaybe<NestedEnumPlayer_CategoryNullableFilter>;
  equals?: InputMaybe<Player_Category>;
  in?: InputMaybe<Array<Player_Category>>;
  not?: InputMaybe<NestedEnumPlayer_CategoryNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Player_Category>>;
};

export type EnumRolesNullableListFilter = {
  equals?: InputMaybe<Array<Roles>>;
  has?: InputMaybe<Roles>;
  hasEvery?: InputMaybe<Array<Roles>>;
  hasSome?: InputMaybe<Array<Roles>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export enum Family_Support {
  BothGrandfathers = 'BOTH_GRANDFATHERS',
  BothParents = 'BOTH_PARENTS',
  Father = 'FATHER',
  Grandfather = 'GRANDFATHER',
  Grandmother = 'GRANDMOTHER',
  Mother = 'MOTHER',
  None = 'NONE'
}

export enum Field_Position {
  AttackingMidfielder = 'ATTACKING_MIDFIELDER',
  CenterBack = 'CENTER_BACK',
  CenterForward = 'CENTER_FORWARD',
  CenterMiddlefielder = 'CENTER_MIDDLEFIELDER',
  DefensiveMidfielder = 'DEFENSIVE_MIDFIELDER',
  GoalKeeper = 'GOAL_KEEPER',
  LeftFullback = 'LEFT_FULLBACK',
  LeftMiddlefielder = 'LEFT_MIDDLEFIELDER',
  None = 'NONE',
  RightFullback = 'RIGHT_FULLBACK',
  RightMiddlefielder = 'RIGHT_MIDDLEFIELDER',
  Sweeper = 'SWEEPER'
}

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export enum Guardian_Type {
  Father = 'FATHER',
  Grandfather = 'GRANDFATHER',
  Grandmother = 'GRANDMOTHER',
  Mother = 'MOTHER',
  None = 'NONE'
}

export type Mutation = {
  __typename?: 'Mutation';
  changePassword?: Maybe<User>;
  confirmUser: Scalars['Boolean'];
  createManyPlayer: AffectedRowsOutput;
  createManySchool: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createPlayer: Player;
  createSchool: School;
  createUser: User;
  deleteManyPlayer: AffectedRowsOutput;
  deleteManySchool: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deletePlayer?: Maybe<Player>;
  deleteSchool?: Maybe<School>;
  deleteUser?: Maybe<User>;
  forgotPassword: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  signin?: Maybe<User>;
  signup: User;
  updateManyPlayer: AffectedRowsOutput;
  updateManySchool: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updatePlayer?: Maybe<Player>;
  updateSchool?: Maybe<School>;
  updateUser?: Maybe<User>;
  upsertPlayer: Player;
  upsertSchool: School;
  upsertUser: User;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationConfirmUserArgs = {
  token: Scalars['String'];
};


export type MutationCreateManyPlayerArgs = {
  data: Array<PlayerCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySchoolArgs = {
  data: Array<SchoolCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreatePlayerArgs = {
  data: PlayerCreateInput;
};


export type MutationCreateSchoolArgs = {
  data: SchoolCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyPlayerArgs = {
  where?: InputMaybe<PlayerWhereInput>;
};


export type MutationDeleteManySchoolArgs = {
  where?: InputMaybe<SchoolWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeletePlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type MutationDeleteSchoolArgs = {
  where: SchoolWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationSigninArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  data: SignupInput;
};


export type MutationUpdateManyPlayerArgs = {
  data: PlayerUpdateManyMutationInput;
  where?: InputMaybe<PlayerWhereInput>;
};


export type MutationUpdateManySchoolArgs = {
  data: SchoolUpdateManyMutationInput;
  where?: InputMaybe<SchoolWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdatePlayerArgs = {
  data: PlayerUpdateInput;
  where: PlayerWhereUniqueInput;
};


export type MutationUpdateSchoolArgs = {
  data: SchoolUpdateInput;
  where: SchoolWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertPlayerArgs = {
  create: PlayerCreateInput;
  update: PlayerUpdateInput;
  where: PlayerWhereUniqueInput;
};


export type MutationUpsertSchoolArgs = {
  create: SchoolCreateInput;
  update: SchoolUpdateInput;
  where: SchoolWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export enum Ndi_Type {
  ForeignCard = 'FOREIGN_CARD',
  NationalId = 'NATIONAL_ID',
  Passport = 'PASSPORT'
}

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumFamily_SupportNullableFilter = {
  equals?: InputMaybe<Family_Support>;
  in?: InputMaybe<Array<Family_Support>>;
  not?: InputMaybe<NestedEnumFamily_SupportNullableFilter>;
  notIn?: InputMaybe<Array<Family_Support>>;
};

export type NestedEnumFamily_SupportNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumFamily_SupportNullableFilter>;
  _min?: InputMaybe<NestedEnumFamily_SupportNullableFilter>;
  equals?: InputMaybe<Family_Support>;
  in?: InputMaybe<Array<Family_Support>>;
  not?: InputMaybe<NestedEnumFamily_SupportNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Family_Support>>;
};

export type NestedEnumField_PositionNullableFilter = {
  equals?: InputMaybe<Field_Position>;
  in?: InputMaybe<Array<Field_Position>>;
  not?: InputMaybe<NestedEnumField_PositionNullableFilter>;
  notIn?: InputMaybe<Array<Field_Position>>;
};

export type NestedEnumField_PositionNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumField_PositionNullableFilter>;
  _min?: InputMaybe<NestedEnumField_PositionNullableFilter>;
  equals?: InputMaybe<Field_Position>;
  in?: InputMaybe<Array<Field_Position>>;
  not?: InputMaybe<NestedEnumField_PositionNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Field_Position>>;
};

export type NestedEnumGuardian_TypeFilter = {
  equals?: InputMaybe<Guardian_Type>;
  in?: InputMaybe<Array<Guardian_Type>>;
  not?: InputMaybe<NestedEnumGuardian_TypeFilter>;
  notIn?: InputMaybe<Array<Guardian_Type>>;
};

export type NestedEnumGuardian_TypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumGuardian_TypeFilter>;
  _min?: InputMaybe<NestedEnumGuardian_TypeFilter>;
  equals?: InputMaybe<Guardian_Type>;
  in?: InputMaybe<Array<Guardian_Type>>;
  not?: InputMaybe<NestedEnumGuardian_TypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Guardian_Type>>;
};

export type NestedEnumNdi_TypeFilter = {
  equals?: InputMaybe<Ndi_Type>;
  in?: InputMaybe<Array<Ndi_Type>>;
  not?: InputMaybe<NestedEnumNdi_TypeFilter>;
  notIn?: InputMaybe<Array<Ndi_Type>>;
};

export type NestedEnumNdi_TypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumNdi_TypeFilter>;
  _min?: InputMaybe<NestedEnumNdi_TypeFilter>;
  equals?: InputMaybe<Ndi_Type>;
  in?: InputMaybe<Array<Ndi_Type>>;
  not?: InputMaybe<NestedEnumNdi_TypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Ndi_Type>>;
};

export type NestedEnumPlayer_CategoryNullableFilter = {
  equals?: InputMaybe<Player_Category>;
  in?: InputMaybe<Array<Player_Category>>;
  not?: InputMaybe<NestedEnumPlayer_CategoryNullableFilter>;
  notIn?: InputMaybe<Array<Player_Category>>;
};

export type NestedEnumPlayer_CategoryNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumPlayer_CategoryNullableFilter>;
  _min?: InputMaybe<NestedEnumPlayer_CategoryNullableFilter>;
  equals?: InputMaybe<Player_Category>;
  in?: InputMaybe<Array<Player_Category>>;
  not?: InputMaybe<NestedEnumPlayer_CategoryNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Player_Category>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableEnumFamily_SupportFieldUpdateOperationsInput = {
  set?: InputMaybe<Family_Support>;
};

export type NullableEnumField_PositionFieldUpdateOperationsInput = {
  set?: InputMaybe<Field_Position>;
};

export type NullableEnumPlayer_CategoryFieldUpdateOperationsInput = {
  set?: InputMaybe<Player_Category>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export enum Personal_Qualities {
  Fellowship = 'FELLOWSHIP',
  None = 'NONE',
  Puntuality = 'PUNTUALITY',
  Responsability = 'RESPONSABILITY',
  Solidarity = 'SOLIDARITY'
}

export enum Physical_Capabilities {
  Balance = 'BALANCE',
  Coordination = 'COORDINATION',
  Flexibility = 'FLEXIBILITY',
  None = 'NONE',
  Resistance = 'RESISTANCE',
  Speed = 'SPEED',
  Strength = 'STRENGTH'
}

export enum Physical_Qualities {
  Agility = 'AGILITY',
  Dirbling = 'DIRBLING',
  Jumping = 'JUMPING',
  None = 'NONE'
}

export enum Player_Category {
  Eighth = 'EIGHTH',
  Fifth = 'FIFTH',
  First = 'FIRST',
  Fourth = 'FOURTH',
  None = 'NONE',
  Second = 'SECOND',
  Seventh = 'SEVENTH',
  Sixth = 'SIXTH',
  Third = 'THIRD'
}

export type Player = {
  __typename?: 'Player';
  IMC: Scalars['Float'];
  birthday: Scalars['DateTime'];
  category?: Maybe<Player_Category>;
  familySupport?: Maybe<Family_Support>;
  fieldPosition?: Maybe<Field_Position>;
  guardianEmail: Scalars['String'];
  guardianId: Scalars['String'];
  guardianIdType: Ndi_Type;
  guardianLastName: Scalars['String'];
  guardianName: Scalars['String'];
  guardianPhone: Scalars['String'];
  guardianType: Guardian_Type;
  height: Scalars['Float'];
  hobbies: Array<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  personalQualities: Array<Personal_Qualities>;
  physicalCapabilities: Array<Physical_Capabilities>;
  physicalQualities: Array<Physical_Qualities>;
  placeOfBirth?: Maybe<Scalars['String']>;
  playerEmail: Scalars['String'];
  playerId: Scalars['String'];
  playerIdType: Ndi_Type;
  playerNumber?: Maybe<Scalars['String']>;
  playerPhone: Scalars['String'];
  schoolId: Scalars['String'];
  sportHistory?: Maybe<Scalars['String']>;
  weight: Scalars['Float'];
};

export type PlayerAvgAggregate = {
  __typename?: 'PlayerAvgAggregate';
  IMC?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type PlayerAvgOrderByAggregateInput = {
  IMC?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export type PlayerCountAggregate = {
  __typename?: 'PlayerCountAggregate';
  IMC: Scalars['Int'];
  _all: Scalars['Int'];
  birthday: Scalars['Int'];
  category: Scalars['Int'];
  createdAt: Scalars['Int'];
  familySupport: Scalars['Int'];
  fieldPosition: Scalars['Int'];
  guardianEmail: Scalars['Int'];
  guardianId: Scalars['Int'];
  guardianIdType: Scalars['Int'];
  guardianLastName: Scalars['Int'];
  guardianName: Scalars['Int'];
  guardianPhone: Scalars['Int'];
  guardianType: Scalars['Int'];
  height: Scalars['Int'];
  hobbies: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  lastName: Scalars['Int'];
  name: Scalars['Int'];
  personalQualities: Scalars['Int'];
  physicalCapabilities: Scalars['Int'];
  physicalQualities: Scalars['Int'];
  placeOfBirth: Scalars['Int'];
  playerEmail: Scalars['Int'];
  playerId: Scalars['Int'];
  playerIdType: Scalars['Int'];
  playerNumber: Scalars['Int'];
  playerPhone: Scalars['Int'];
  schoolId: Scalars['Int'];
  sportHistory: Scalars['Int'];
  updatedAt: Scalars['Int'];
  weight: Scalars['Int'];
};

export type PlayerCountOrderByAggregateInput = {
  IMC?: InputMaybe<SortOrder>;
  birthday?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  familySupport?: InputMaybe<SortOrder>;
  fieldPosition?: InputMaybe<SortOrder>;
  guardianEmail?: InputMaybe<SortOrder>;
  guardianId?: InputMaybe<SortOrder>;
  guardianIdType?: InputMaybe<SortOrder>;
  guardianLastName?: InputMaybe<SortOrder>;
  guardianName?: InputMaybe<SortOrder>;
  guardianPhone?: InputMaybe<SortOrder>;
  guardianType?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  hobbies?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  personalQualities?: InputMaybe<SortOrder>;
  physicalCapabilities?: InputMaybe<SortOrder>;
  physicalQualities?: InputMaybe<SortOrder>;
  placeOfBirth?: InputMaybe<SortOrder>;
  playerEmail?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  playerIdType?: InputMaybe<SortOrder>;
  playerNumber?: InputMaybe<SortOrder>;
  playerPhone?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
  sportHistory?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export type PlayerCreateInput = {
  IMC: Scalars['Float'];
  birthday: Scalars['DateTime'];
  category?: InputMaybe<Player_Category>;
  familySupport?: InputMaybe<Family_Support>;
  fieldPosition?: InputMaybe<Field_Position>;
  guardianEmail: Scalars['String'];
  guardianId: Scalars['String'];
  guardianIdType: Ndi_Type;
  guardianLastName: Scalars['String'];
  guardianName: Scalars['String'];
  guardianPhone: Scalars['String'];
  guardianType: Guardian_Type;
  height: Scalars['Float'];
  hobbies?: InputMaybe<PlayerCreatehobbiesInput>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  personalQualities?: InputMaybe<PlayerCreatepersonalQualitiesInput>;
  physicalCapabilities?: InputMaybe<PlayerCreatephysicalCapabilitiesInput>;
  physicalQualities?: InputMaybe<PlayerCreatephysicalQualitiesInput>;
  placeOfBirth?: InputMaybe<Scalars['String']>;
  playerEmail: Scalars['String'];
  playerId: Scalars['String'];
  playerIdType: Ndi_Type;
  playerNumber?: InputMaybe<Scalars['String']>;
  playerPhone: Scalars['String'];
  school: SchoolCreateNestedOneWithoutPlayersInput;
  sportHistory?: InputMaybe<Scalars['String']>;
  weight: Scalars['Float'];
};

export type PlayerCreateManyInput = {
  IMC: Scalars['Float'];
  birthday: Scalars['DateTime'];
  category?: InputMaybe<Player_Category>;
  familySupport?: InputMaybe<Family_Support>;
  fieldPosition?: InputMaybe<Field_Position>;
  guardianEmail: Scalars['String'];
  guardianId: Scalars['String'];
  guardianIdType: Ndi_Type;
  guardianLastName: Scalars['String'];
  guardianName: Scalars['String'];
  guardianPhone: Scalars['String'];
  guardianType: Guardian_Type;
  height: Scalars['Float'];
  hobbies?: InputMaybe<PlayerCreatehobbiesInput>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  personalQualities?: InputMaybe<PlayerCreatepersonalQualitiesInput>;
  physicalCapabilities?: InputMaybe<PlayerCreatephysicalCapabilitiesInput>;
  physicalQualities?: InputMaybe<PlayerCreatephysicalQualitiesInput>;
  placeOfBirth?: InputMaybe<Scalars['String']>;
  playerEmail: Scalars['String'];
  playerId: Scalars['String'];
  playerIdType: Ndi_Type;
  playerNumber?: InputMaybe<Scalars['String']>;
  playerPhone: Scalars['String'];
  schoolId: Scalars['String'];
  sportHistory?: InputMaybe<Scalars['String']>;
  weight: Scalars['Float'];
};

export type PlayerCreateManySchoolInput = {
  IMC: Scalars['Float'];
  birthday: Scalars['DateTime'];
  category?: InputMaybe<Player_Category>;
  familySupport?: InputMaybe<Family_Support>;
  fieldPosition?: InputMaybe<Field_Position>;
  guardianEmail: Scalars['String'];
  guardianId: Scalars['String'];
  guardianIdType: Ndi_Type;
  guardianLastName: Scalars['String'];
  guardianName: Scalars['String'];
  guardianPhone: Scalars['String'];
  guardianType: Guardian_Type;
  height: Scalars['Float'];
  hobbies?: InputMaybe<PlayerCreatehobbiesInput>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  personalQualities?: InputMaybe<PlayerCreatepersonalQualitiesInput>;
  physicalCapabilities?: InputMaybe<PlayerCreatephysicalCapabilitiesInput>;
  physicalQualities?: InputMaybe<PlayerCreatephysicalQualitiesInput>;
  placeOfBirth?: InputMaybe<Scalars['String']>;
  playerEmail: Scalars['String'];
  playerId: Scalars['String'];
  playerIdType: Ndi_Type;
  playerNumber?: InputMaybe<Scalars['String']>;
  playerPhone: Scalars['String'];
  sportHistory?: InputMaybe<Scalars['String']>;
  weight: Scalars['Float'];
};

export type PlayerCreateManySchoolInputEnvelope = {
  data: Array<PlayerCreateManySchoolInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerCreateNestedManyWithoutSchoolInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutSchoolInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutSchoolInput>>;
  createMany?: InputMaybe<PlayerCreateManySchoolInputEnvelope>;
};

export type PlayerCreateOrConnectWithoutSchoolInput = {
  create: PlayerCreateWithoutSchoolInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateWithoutSchoolInput = {
  IMC: Scalars['Float'];
  birthday: Scalars['DateTime'];
  category?: InputMaybe<Player_Category>;
  familySupport?: InputMaybe<Family_Support>;
  fieldPosition?: InputMaybe<Field_Position>;
  guardianEmail: Scalars['String'];
  guardianId: Scalars['String'];
  guardianIdType: Ndi_Type;
  guardianLastName: Scalars['String'];
  guardianName: Scalars['String'];
  guardianPhone: Scalars['String'];
  guardianType: Guardian_Type;
  height: Scalars['Float'];
  hobbies?: InputMaybe<PlayerCreatehobbiesInput>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  personalQualities?: InputMaybe<PlayerCreatepersonalQualitiesInput>;
  physicalCapabilities?: InputMaybe<PlayerCreatephysicalCapabilitiesInput>;
  physicalQualities?: InputMaybe<PlayerCreatephysicalQualitiesInput>;
  placeOfBirth?: InputMaybe<Scalars['String']>;
  playerEmail: Scalars['String'];
  playerId: Scalars['String'];
  playerIdType: Ndi_Type;
  playerNumber?: InputMaybe<Scalars['String']>;
  playerPhone: Scalars['String'];
  sportHistory?: InputMaybe<Scalars['String']>;
  weight: Scalars['Float'];
};

export type PlayerCreatehobbiesInput = {
  set: Array<Scalars['String']>;
};

export type PlayerCreatepersonalQualitiesInput = {
  set: Array<Personal_Qualities>;
};

export type PlayerCreatephysicalCapabilitiesInput = {
  set: Array<Physical_Capabilities>;
};

export type PlayerCreatephysicalQualitiesInput = {
  set: Array<Physical_Qualities>;
};

export type PlayerGroupBy = {
  __typename?: 'PlayerGroupBy';
  IMC: Scalars['Float'];
  _avg?: Maybe<PlayerAvgAggregate>;
  _count?: Maybe<PlayerCountAggregate>;
  _max?: Maybe<PlayerMaxAggregate>;
  _min?: Maybe<PlayerMinAggregate>;
  _sum?: Maybe<PlayerSumAggregate>;
  birthday: Scalars['DateTime'];
  category?: Maybe<Player_Category>;
  createdAt: Scalars['DateTime'];
  familySupport?: Maybe<Family_Support>;
  fieldPosition?: Maybe<Field_Position>;
  guardianEmail: Scalars['String'];
  guardianId: Scalars['String'];
  guardianIdType: Ndi_Type;
  guardianLastName: Scalars['String'];
  guardianName: Scalars['String'];
  guardianPhone: Scalars['String'];
  guardianType: Guardian_Type;
  height: Scalars['Float'];
  hobbies?: Maybe<Array<Scalars['String']>>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  personalQualities?: Maybe<Array<Personal_Qualities>>;
  physicalCapabilities?: Maybe<Array<Physical_Capabilities>>;
  physicalQualities?: Maybe<Array<Physical_Qualities>>;
  placeOfBirth?: Maybe<Scalars['String']>;
  playerEmail: Scalars['String'];
  playerId: Scalars['String'];
  playerIdType: Ndi_Type;
  playerNumber?: Maybe<Scalars['String']>;
  playerPhone: Scalars['String'];
  schoolId: Scalars['String'];
  sportHistory?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  weight: Scalars['Float'];
};

export type PlayerListRelationFilter = {
  every?: InputMaybe<PlayerWhereInput>;
  none?: InputMaybe<PlayerWhereInput>;
  some?: InputMaybe<PlayerWhereInput>;
};

export type PlayerMaxAggregate = {
  __typename?: 'PlayerMaxAggregate';
  IMC?: Maybe<Scalars['Float']>;
  birthday?: Maybe<Scalars['DateTime']>;
  category?: Maybe<Player_Category>;
  createdAt?: Maybe<Scalars['DateTime']>;
  familySupport?: Maybe<Family_Support>;
  fieldPosition?: Maybe<Field_Position>;
  guardianEmail?: Maybe<Scalars['String']>;
  guardianId?: Maybe<Scalars['String']>;
  guardianIdType?: Maybe<Ndi_Type>;
  guardianLastName?: Maybe<Scalars['String']>;
  guardianName?: Maybe<Scalars['String']>;
  guardianPhone?: Maybe<Scalars['String']>;
  guardianType?: Maybe<Guardian_Type>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  playerEmail?: Maybe<Scalars['String']>;
  playerId?: Maybe<Scalars['String']>;
  playerIdType?: Maybe<Ndi_Type>;
  playerNumber?: Maybe<Scalars['String']>;
  playerPhone?: Maybe<Scalars['String']>;
  schoolId?: Maybe<Scalars['String']>;
  sportHistory?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
};

export type PlayerMaxOrderByAggregateInput = {
  IMC?: InputMaybe<SortOrder>;
  birthday?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  familySupport?: InputMaybe<SortOrder>;
  fieldPosition?: InputMaybe<SortOrder>;
  guardianEmail?: InputMaybe<SortOrder>;
  guardianId?: InputMaybe<SortOrder>;
  guardianIdType?: InputMaybe<SortOrder>;
  guardianLastName?: InputMaybe<SortOrder>;
  guardianName?: InputMaybe<SortOrder>;
  guardianPhone?: InputMaybe<SortOrder>;
  guardianType?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  placeOfBirth?: InputMaybe<SortOrder>;
  playerEmail?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  playerIdType?: InputMaybe<SortOrder>;
  playerNumber?: InputMaybe<SortOrder>;
  playerPhone?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
  sportHistory?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export type PlayerMinAggregate = {
  __typename?: 'PlayerMinAggregate';
  IMC?: Maybe<Scalars['Float']>;
  birthday?: Maybe<Scalars['DateTime']>;
  category?: Maybe<Player_Category>;
  createdAt?: Maybe<Scalars['DateTime']>;
  familySupport?: Maybe<Family_Support>;
  fieldPosition?: Maybe<Field_Position>;
  guardianEmail?: Maybe<Scalars['String']>;
  guardianId?: Maybe<Scalars['String']>;
  guardianIdType?: Maybe<Ndi_Type>;
  guardianLastName?: Maybe<Scalars['String']>;
  guardianName?: Maybe<Scalars['String']>;
  guardianPhone?: Maybe<Scalars['String']>;
  guardianType?: Maybe<Guardian_Type>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  playerEmail?: Maybe<Scalars['String']>;
  playerId?: Maybe<Scalars['String']>;
  playerIdType?: Maybe<Ndi_Type>;
  playerNumber?: Maybe<Scalars['String']>;
  playerPhone?: Maybe<Scalars['String']>;
  schoolId?: Maybe<Scalars['String']>;
  sportHistory?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
};

export type PlayerMinOrderByAggregateInput = {
  IMC?: InputMaybe<SortOrder>;
  birthday?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  familySupport?: InputMaybe<SortOrder>;
  fieldPosition?: InputMaybe<SortOrder>;
  guardianEmail?: InputMaybe<SortOrder>;
  guardianId?: InputMaybe<SortOrder>;
  guardianIdType?: InputMaybe<SortOrder>;
  guardianLastName?: InputMaybe<SortOrder>;
  guardianName?: InputMaybe<SortOrder>;
  guardianPhone?: InputMaybe<SortOrder>;
  guardianType?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  placeOfBirth?: InputMaybe<SortOrder>;
  playerEmail?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  playerIdType?: InputMaybe<SortOrder>;
  playerNumber?: InputMaybe<SortOrder>;
  playerPhone?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
  sportHistory?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export type PlayerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlayerOrderByWithAggregationInput = {
  IMC?: InputMaybe<SortOrder>;
  _avg?: InputMaybe<PlayerAvgOrderByAggregateInput>;
  _count?: InputMaybe<PlayerCountOrderByAggregateInput>;
  _max?: InputMaybe<PlayerMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlayerMinOrderByAggregateInput>;
  _sum?: InputMaybe<PlayerSumOrderByAggregateInput>;
  birthday?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  familySupport?: InputMaybe<SortOrder>;
  fieldPosition?: InputMaybe<SortOrder>;
  guardianEmail?: InputMaybe<SortOrder>;
  guardianId?: InputMaybe<SortOrder>;
  guardianIdType?: InputMaybe<SortOrder>;
  guardianLastName?: InputMaybe<SortOrder>;
  guardianName?: InputMaybe<SortOrder>;
  guardianPhone?: InputMaybe<SortOrder>;
  guardianType?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  hobbies?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  personalQualities?: InputMaybe<SortOrder>;
  physicalCapabilities?: InputMaybe<SortOrder>;
  physicalQualities?: InputMaybe<SortOrder>;
  placeOfBirth?: InputMaybe<SortOrder>;
  playerEmail?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  playerIdType?: InputMaybe<SortOrder>;
  playerNumber?: InputMaybe<SortOrder>;
  playerPhone?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
  sportHistory?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export type PlayerOrderByWithRelationInput = {
  IMC?: InputMaybe<SortOrder>;
  birthday?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  familySupport?: InputMaybe<SortOrder>;
  fieldPosition?: InputMaybe<SortOrder>;
  guardianEmail?: InputMaybe<SortOrder>;
  guardianId?: InputMaybe<SortOrder>;
  guardianIdType?: InputMaybe<SortOrder>;
  guardianLastName?: InputMaybe<SortOrder>;
  guardianName?: InputMaybe<SortOrder>;
  guardianPhone?: InputMaybe<SortOrder>;
  guardianType?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  hobbies?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  personalQualities?: InputMaybe<SortOrder>;
  physicalCapabilities?: InputMaybe<SortOrder>;
  physicalQualities?: InputMaybe<SortOrder>;
  placeOfBirth?: InputMaybe<SortOrder>;
  playerEmail?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  playerIdType?: InputMaybe<SortOrder>;
  playerNumber?: InputMaybe<SortOrder>;
  playerPhone?: InputMaybe<SortOrder>;
  school?: InputMaybe<SchoolOrderByWithRelationInput>;
  schoolId?: InputMaybe<SortOrder>;
  sportHistory?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export enum PlayerScalarFieldEnum {
  Imc = 'IMC',
  Birthday = 'birthday',
  Category = 'category',
  CreatedAt = 'createdAt',
  FamilySupport = 'familySupport',
  FieldPosition = 'fieldPosition',
  GuardianEmail = 'guardianEmail',
  GuardianId = 'guardianId',
  GuardianIdType = 'guardianIdType',
  GuardianLastName = 'guardianLastName',
  GuardianName = 'guardianName',
  GuardianPhone = 'guardianPhone',
  GuardianType = 'guardianType',
  Height = 'height',
  Hobbies = 'hobbies',
  Id = 'id',
  Image = 'image',
  LastName = 'lastName',
  Name = 'name',
  PersonalQualities = 'personalQualities',
  PhysicalCapabilities = 'physicalCapabilities',
  PhysicalQualities = 'physicalQualities',
  PlaceOfBirth = 'placeOfBirth',
  PlayerEmail = 'playerEmail',
  PlayerId = 'playerId',
  PlayerIdType = 'playerIdType',
  PlayerNumber = 'playerNumber',
  PlayerPhone = 'playerPhone',
  SchoolId = 'schoolId',
  SportHistory = 'sportHistory',
  UpdatedAt = 'updatedAt',
  Weight = 'weight'
}

export type PlayerScalarWhereInput = {
  AND?: InputMaybe<Array<PlayerScalarWhereInput>>;
  IMC?: InputMaybe<FloatFilter>;
  NOT?: InputMaybe<Array<PlayerScalarWhereInput>>;
  OR?: InputMaybe<Array<PlayerScalarWhereInput>>;
  birthday?: InputMaybe<DateTimeFilter>;
  category?: InputMaybe<EnumPlayer_CategoryNullableFilter>;
  familySupport?: InputMaybe<EnumFamily_SupportNullableFilter>;
  fieldPosition?: InputMaybe<EnumField_PositionNullableFilter>;
  guardianEmail?: InputMaybe<StringFilter>;
  guardianId?: InputMaybe<StringFilter>;
  guardianIdType?: InputMaybe<EnumNdi_TypeFilter>;
  guardianLastName?: InputMaybe<StringFilter>;
  guardianName?: InputMaybe<StringFilter>;
  guardianPhone?: InputMaybe<StringFilter>;
  guardianType?: InputMaybe<EnumGuardian_TypeFilter>;
  height?: InputMaybe<FloatFilter>;
  hobbies?: InputMaybe<StringNullableListFilter>;
  image?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  personalQualities?: InputMaybe<EnumPersonal_QualitiesNullableListFilter>;
  physicalCapabilities?: InputMaybe<EnumPhysical_CapabilitiesNullableListFilter>;
  physicalQualities?: InputMaybe<EnumPhysical_QualitiesNullableListFilter>;
  placeOfBirth?: InputMaybe<StringNullableFilter>;
  playerEmail?: InputMaybe<StringFilter>;
  playerId?: InputMaybe<StringFilter>;
  playerIdType?: InputMaybe<EnumNdi_TypeFilter>;
  playerNumber?: InputMaybe<StringNullableFilter>;
  playerPhone?: InputMaybe<StringFilter>;
  schoolId?: InputMaybe<StringFilter>;
  sportHistory?: InputMaybe<StringNullableFilter>;
  weight?: InputMaybe<FloatFilter>;
};

export type PlayerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlayerScalarWhereWithAggregatesInput>>;
  IMC?: InputMaybe<FloatWithAggregatesFilter>;
  NOT?: InputMaybe<Array<PlayerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlayerScalarWhereWithAggregatesInput>>;
  birthday?: InputMaybe<DateTimeWithAggregatesFilter>;
  category?: InputMaybe<EnumPlayer_CategoryNullableWithAggregatesFilter>;
  familySupport?: InputMaybe<EnumFamily_SupportNullableWithAggregatesFilter>;
  fieldPosition?: InputMaybe<EnumField_PositionNullableWithAggregatesFilter>;
  guardianEmail?: InputMaybe<StringWithAggregatesFilter>;
  guardianId?: InputMaybe<StringWithAggregatesFilter>;
  guardianIdType?: InputMaybe<EnumNdi_TypeWithAggregatesFilter>;
  guardianLastName?: InputMaybe<StringWithAggregatesFilter>;
  guardianName?: InputMaybe<StringWithAggregatesFilter>;
  guardianPhone?: InputMaybe<StringWithAggregatesFilter>;
  guardianType?: InputMaybe<EnumGuardian_TypeWithAggregatesFilter>;
  height?: InputMaybe<FloatWithAggregatesFilter>;
  hobbies?: InputMaybe<StringNullableListFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  personalQualities?: InputMaybe<EnumPersonal_QualitiesNullableListFilter>;
  physicalCapabilities?: InputMaybe<EnumPhysical_CapabilitiesNullableListFilter>;
  physicalQualities?: InputMaybe<EnumPhysical_QualitiesNullableListFilter>;
  placeOfBirth?: InputMaybe<StringNullableWithAggregatesFilter>;
  playerEmail?: InputMaybe<StringWithAggregatesFilter>;
  playerId?: InputMaybe<StringWithAggregatesFilter>;
  playerIdType?: InputMaybe<EnumNdi_TypeWithAggregatesFilter>;
  playerNumber?: InputMaybe<StringNullableWithAggregatesFilter>;
  playerPhone?: InputMaybe<StringWithAggregatesFilter>;
  schoolId?: InputMaybe<StringWithAggregatesFilter>;
  sportHistory?: InputMaybe<StringNullableWithAggregatesFilter>;
  weight?: InputMaybe<FloatWithAggregatesFilter>;
};

export type PlayerSumAggregate = {
  __typename?: 'PlayerSumAggregate';
  IMC?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type PlayerSumOrderByAggregateInput = {
  IMC?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export type PlayerUpdateInput = {
  IMC?: InputMaybe<FloatFieldUpdateOperationsInput>;
  birthday?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  category?: InputMaybe<NullableEnumPlayer_CategoryFieldUpdateOperationsInput>;
  familySupport?: InputMaybe<NullableEnumFamily_SupportFieldUpdateOperationsInput>;
  fieldPosition?: InputMaybe<NullableEnumField_PositionFieldUpdateOperationsInput>;
  guardianEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianId?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianIdType?: InputMaybe<EnumNdi_TypeFieldUpdateOperationsInput>;
  guardianLastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianName?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianPhone?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianType?: InputMaybe<EnumGuardian_TypeFieldUpdateOperationsInput>;
  height?: InputMaybe<FloatFieldUpdateOperationsInput>;
  hobbies?: InputMaybe<PlayerUpdatehobbiesInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  personalQualities?: InputMaybe<PlayerUpdatepersonalQualitiesInput>;
  physicalCapabilities?: InputMaybe<PlayerUpdatephysicalCapabilitiesInput>;
  physicalQualities?: InputMaybe<PlayerUpdatephysicalQualitiesInput>;
  placeOfBirth?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  playerEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerIdType?: InputMaybe<EnumNdi_TypeFieldUpdateOperationsInput>;
  playerNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  playerPhone?: InputMaybe<StringFieldUpdateOperationsInput>;
  school?: InputMaybe<SchoolUpdateOneRequiredWithoutPlayersInput>;
  sportHistory?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  weight?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PlayerUpdateManyMutationInput = {
  IMC?: InputMaybe<FloatFieldUpdateOperationsInput>;
  birthday?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  category?: InputMaybe<NullableEnumPlayer_CategoryFieldUpdateOperationsInput>;
  familySupport?: InputMaybe<NullableEnumFamily_SupportFieldUpdateOperationsInput>;
  fieldPosition?: InputMaybe<NullableEnumField_PositionFieldUpdateOperationsInput>;
  guardianEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianId?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianIdType?: InputMaybe<EnumNdi_TypeFieldUpdateOperationsInput>;
  guardianLastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianName?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianPhone?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianType?: InputMaybe<EnumGuardian_TypeFieldUpdateOperationsInput>;
  height?: InputMaybe<FloatFieldUpdateOperationsInput>;
  hobbies?: InputMaybe<PlayerUpdatehobbiesInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  personalQualities?: InputMaybe<PlayerUpdatepersonalQualitiesInput>;
  physicalCapabilities?: InputMaybe<PlayerUpdatephysicalCapabilitiesInput>;
  physicalQualities?: InputMaybe<PlayerUpdatephysicalQualitiesInput>;
  placeOfBirth?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  playerEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerIdType?: InputMaybe<EnumNdi_TypeFieldUpdateOperationsInput>;
  playerNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  playerPhone?: InputMaybe<StringFieldUpdateOperationsInput>;
  sportHistory?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  weight?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PlayerUpdateManyWithWhereWithoutSchoolInput = {
  data: PlayerUpdateManyMutationInput;
  where: PlayerScalarWhereInput;
};

export type PlayerUpdateManyWithoutSchoolInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutSchoolInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutSchoolInput>>;
  createMany?: InputMaybe<PlayerCreateManySchoolInputEnvelope>;
  delete?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerUpdateWithWhereUniqueWithoutSchoolInput>>;
  updateMany?: InputMaybe<Array<PlayerUpdateManyWithWhereWithoutSchoolInput>>;
  upsert?: InputMaybe<Array<PlayerUpsertWithWhereUniqueWithoutSchoolInput>>;
};

export type PlayerUpdateWithWhereUniqueWithoutSchoolInput = {
  data: PlayerUpdateWithoutSchoolInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpdateWithoutSchoolInput = {
  IMC?: InputMaybe<FloatFieldUpdateOperationsInput>;
  birthday?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  category?: InputMaybe<NullableEnumPlayer_CategoryFieldUpdateOperationsInput>;
  familySupport?: InputMaybe<NullableEnumFamily_SupportFieldUpdateOperationsInput>;
  fieldPosition?: InputMaybe<NullableEnumField_PositionFieldUpdateOperationsInput>;
  guardianEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianId?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianIdType?: InputMaybe<EnumNdi_TypeFieldUpdateOperationsInput>;
  guardianLastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianName?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianPhone?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianType?: InputMaybe<EnumGuardian_TypeFieldUpdateOperationsInput>;
  height?: InputMaybe<FloatFieldUpdateOperationsInput>;
  hobbies?: InputMaybe<PlayerUpdatehobbiesInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  personalQualities?: InputMaybe<PlayerUpdatepersonalQualitiesInput>;
  physicalCapabilities?: InputMaybe<PlayerUpdatephysicalCapabilitiesInput>;
  physicalQualities?: InputMaybe<PlayerUpdatephysicalQualitiesInput>;
  placeOfBirth?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  playerEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerIdType?: InputMaybe<EnumNdi_TypeFieldUpdateOperationsInput>;
  playerNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  playerPhone?: InputMaybe<StringFieldUpdateOperationsInput>;
  sportHistory?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  weight?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type PlayerUpdatehobbiesInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type PlayerUpdatepersonalQualitiesInput = {
  push?: InputMaybe<Array<Personal_Qualities>>;
  set?: InputMaybe<Array<Personal_Qualities>>;
};

export type PlayerUpdatephysicalCapabilitiesInput = {
  push?: InputMaybe<Array<Physical_Capabilities>>;
  set?: InputMaybe<Array<Physical_Capabilities>>;
};

export type PlayerUpdatephysicalQualitiesInput = {
  push?: InputMaybe<Array<Physical_Qualities>>;
  set?: InputMaybe<Array<Physical_Qualities>>;
};

export type PlayerUpsertWithWhereUniqueWithoutSchoolInput = {
  create: PlayerCreateWithoutSchoolInput;
  update: PlayerUpdateWithoutSchoolInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerWhereInput = {
  AND?: InputMaybe<Array<PlayerWhereInput>>;
  IMC?: InputMaybe<FloatFilter>;
  NOT?: InputMaybe<Array<PlayerWhereInput>>;
  OR?: InputMaybe<Array<PlayerWhereInput>>;
  birthday?: InputMaybe<DateTimeFilter>;
  category?: InputMaybe<EnumPlayer_CategoryNullableFilter>;
  familySupport?: InputMaybe<EnumFamily_SupportNullableFilter>;
  fieldPosition?: InputMaybe<EnumField_PositionNullableFilter>;
  guardianEmail?: InputMaybe<StringFilter>;
  guardianId?: InputMaybe<StringFilter>;
  guardianIdType?: InputMaybe<EnumNdi_TypeFilter>;
  guardianLastName?: InputMaybe<StringFilter>;
  guardianName?: InputMaybe<StringFilter>;
  guardianPhone?: InputMaybe<StringFilter>;
  guardianType?: InputMaybe<EnumGuardian_TypeFilter>;
  height?: InputMaybe<FloatFilter>;
  hobbies?: InputMaybe<StringNullableListFilter>;
  image?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  personalQualities?: InputMaybe<EnumPersonal_QualitiesNullableListFilter>;
  physicalCapabilities?: InputMaybe<EnumPhysical_CapabilitiesNullableListFilter>;
  physicalQualities?: InputMaybe<EnumPhysical_QualitiesNullableListFilter>;
  placeOfBirth?: InputMaybe<StringNullableFilter>;
  playerEmail?: InputMaybe<StringFilter>;
  playerId?: InputMaybe<StringFilter>;
  playerIdType?: InputMaybe<EnumNdi_TypeFilter>;
  playerNumber?: InputMaybe<StringNullableFilter>;
  playerPhone?: InputMaybe<StringFilter>;
  school?: InputMaybe<SchoolRelationFilter>;
  schoolId?: InputMaybe<StringFilter>;
  sportHistory?: InputMaybe<StringNullableFilter>;
  weight?: InputMaybe<FloatFilter>;
};

export type PlayerWhereUniqueInput = {
  playerEmail?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregatePlayer: AggregatePlayer;
  aggregateSchool: AggregateSchool;
  aggregateUser: AggregateUser;
  findFirstPlayer?: Maybe<Player>;
  findFirstSchool?: Maybe<School>;
  findFirstUser?: Maybe<User>;
  groupByPlayer: Array<PlayerGroupBy>;
  groupBySchool: Array<SchoolGroupBy>;
  groupByUser: Array<UserGroupBy>;
  player?: Maybe<Player>;
  players: Array<Player>;
  school?: Maybe<School>;
  schools: Array<School>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregatePlayerArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryAggregateSchoolArgs = {
  cursor?: InputMaybe<SchoolWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstPlayerArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryFindFirstSchoolArgs = {
  cursor?: InputMaybe<SchoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByPlayerArgs = {
  by: Array<PlayerScalarFieldEnum>;
  having?: InputMaybe<PlayerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryGroupBySchoolArgs = {
  by: Array<SchoolScalarFieldEnum>;
  having?: InputMaybe<SchoolScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryPlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type QueryPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QuerySchoolArgs = {
  where: SchoolWhereUniqueInput;
};


export type QuerySchoolsArgs = {
  cursor?: InputMaybe<SchoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Roles {
  Admin = 'ADMIN',
  Coach = 'COACH',
  Guardian = 'GUARDIAN',
  None = 'NONE',
  Player = 'PLAYER'
}

export type School = {
  __typename?: 'School';
  _count?: Maybe<SchoolCount>;
  address: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  players: Array<Player>;
  users: Array<User>;
};


export type SchoolPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type SchoolUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type SchoolCount = {
  __typename?: 'SchoolCount';
  players: Scalars['Int'];
  users: Scalars['Int'];
};

export type SchoolCountAggregate = {
  __typename?: 'SchoolCountAggregate';
  _all: Scalars['Int'];
  address: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
  phone: Scalars['Int'];
  tier: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type SchoolCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SchoolCreateInput = {
  address: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  players?: InputMaybe<PlayerCreateNestedManyWithoutSchoolInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserCreateNestedManyWithoutSchoolInput>;
};

export type SchoolCreateManyInput = {
  address: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SchoolCreateNestedOneWithoutPlayersInput = {
  connect?: InputMaybe<SchoolWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SchoolCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<SchoolCreateWithoutPlayersInput>;
};

export type SchoolCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<SchoolWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SchoolCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<SchoolCreateWithoutUsersInput>;
};

export type SchoolCreateOrConnectWithoutPlayersInput = {
  create: SchoolCreateWithoutPlayersInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolCreateOrConnectWithoutUsersInput = {
  create: SchoolCreateWithoutUsersInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolCreateWithoutPlayersInput = {
  address: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  users?: InputMaybe<UserCreateNestedManyWithoutSchoolInput>;
};

export type SchoolCreateWithoutUsersInput = {
  address: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  players?: InputMaybe<PlayerCreateNestedManyWithoutSchoolInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SchoolGroupBy = {
  __typename?: 'SchoolGroupBy';
  _count?: Maybe<SchoolCountAggregate>;
  _max?: Maybe<SchoolMaxAggregate>;
  _min?: Maybe<SchoolMinAggregate>;
  address: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  tier: Tier;
  updatedAt: Scalars['DateTime'];
};

export type SchoolMaxAggregate = {
  __typename?: 'SchoolMaxAggregate';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  tier?: Maybe<Tier>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchoolMaxOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SchoolMinAggregate = {
  __typename?: 'SchoolMinAggregate';
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  tier?: Maybe<Tier>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SchoolMinOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SchoolOrderByWithAggregationInput = {
  _count?: InputMaybe<SchoolCountOrderByAggregateInput>;
  _max?: InputMaybe<SchoolMaxOrderByAggregateInput>;
  _min?: InputMaybe<SchoolMinOrderByAggregateInput>;
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SchoolOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  players?: InputMaybe<PlayerOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export type SchoolRelationFilter = {
  is?: InputMaybe<SchoolWhereInput>;
  isNot?: InputMaybe<SchoolWhereInput>;
};

export enum SchoolScalarFieldEnum {
  Address = 'address',
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  Phone = 'phone',
  Tier = 'tier',
  UpdatedAt = 'updatedAt'
}

export type SchoolScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SchoolScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SchoolScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SchoolScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  phone?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type SchoolUpdateInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutSchoolInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutSchoolInput>;
};

export type SchoolUpdateManyMutationInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SchoolUpdateOneRequiredWithoutPlayersInput = {
  connect?: InputMaybe<SchoolWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SchoolCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<SchoolCreateWithoutPlayersInput>;
  update?: InputMaybe<SchoolUpdateWithoutPlayersInput>;
  upsert?: InputMaybe<SchoolUpsertWithoutPlayersInput>;
};

export type SchoolUpdateOneRequiredWithoutUsersInput = {
  connect?: InputMaybe<SchoolWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SchoolCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<SchoolCreateWithoutUsersInput>;
  update?: InputMaybe<SchoolUpdateWithoutUsersInput>;
  upsert?: InputMaybe<SchoolUpsertWithoutUsersInput>;
};

export type SchoolUpdateWithoutPlayersInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutSchoolInput>;
};

export type SchoolUpdateWithoutUsersInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutSchoolInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SchoolUpsertWithoutPlayersInput = {
  create: SchoolCreateWithoutPlayersInput;
  update: SchoolUpdateWithoutPlayersInput;
};

export type SchoolUpsertWithoutUsersInput = {
  create: SchoolCreateWithoutUsersInput;
  update: SchoolUpdateWithoutUsersInput;
};

export type SchoolWhereInput = {
  AND?: InputMaybe<Array<SchoolWhereInput>>;
  NOT?: InputMaybe<Array<SchoolWhereInput>>;
  OR?: InputMaybe<Array<SchoolWhereInput>>;
  address?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type SchoolWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
};

export type SignupInput = {
  acceptsPrivacyPolicy: Scalars['Boolean'];
  acceptsTermsOfService: Scalars['Boolean'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<Scalars['String']>>;
  hasSome?: InputMaybe<Array<Scalars['String']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum Tier {
  Advanced = 'ADVANCED',
  Basic = 'BASIC',
  Expert = 'EXPERT',
  Intermediate = 'INTERMEDIATE'
}

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  roles: Array<Roles>;
  schoolEmail: Scalars['String'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  acceptsPrivacyPolicy: Scalars['Int'];
  acceptsTermsOfService: Scalars['Int'];
  address: Scalars['Int'];
  confirmed: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
  password: Scalars['Int'];
  phone: Scalars['Int'];
  roles: Scalars['Int'];
  schoolEmail: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  acceptsPrivacyPolicy?: InputMaybe<SortOrder>;
  acceptsTermsOfService?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  confirmed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  roles?: InputMaybe<SortOrder>;
  schoolEmail?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  School?: InputMaybe<SchoolCreateNestedOneWithoutUsersInput>;
  acceptsPrivacyPolicy?: InputMaybe<Scalars['Boolean']>;
  acceptsTermsOfService?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<UserCreaterolesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  acceptsPrivacyPolicy?: InputMaybe<Scalars['Boolean']>;
  acceptsTermsOfService?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<UserCreaterolesInput>;
  schoolEmail?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManySchoolInput = {
  acceptsPrivacyPolicy?: InputMaybe<Scalars['Boolean']>;
  acceptsTermsOfService?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<UserCreaterolesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManySchoolInputEnvelope = {
  data: Array<UserCreateManySchoolInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateNestedManyWithoutSchoolInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutSchoolInput>>;
  create?: InputMaybe<Array<UserCreateWithoutSchoolInput>>;
  createMany?: InputMaybe<UserCreateManySchoolInputEnvelope>;
};

export type UserCreateOrConnectWithoutSchoolInput = {
  create: UserCreateWithoutSchoolInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutSchoolInput = {
  acceptsPrivacyPolicy?: InputMaybe<Scalars['Boolean']>;
  acceptsTermsOfService?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<UserCreaterolesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreaterolesInput = {
  set: Array<Roles>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  acceptsPrivacyPolicy: Scalars['Boolean'];
  acceptsTermsOfService: Scalars['Boolean'];
  address?: Maybe<Scalars['String']>;
  confirmed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Roles>>;
  schoolEmail: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  acceptsPrivacyPolicy?: Maybe<Scalars['Boolean']>;
  acceptsTermsOfService?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  schoolEmail?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  acceptsPrivacyPolicy?: InputMaybe<SortOrder>;
  acceptsTermsOfService?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  confirmed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  schoolEmail?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  acceptsPrivacyPolicy?: Maybe<Scalars['Boolean']>;
  acceptsTermsOfService?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  schoolEmail?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  acceptsPrivacyPolicy?: InputMaybe<SortOrder>;
  acceptsTermsOfService?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  confirmed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  schoolEmail?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  acceptsPrivacyPolicy?: InputMaybe<SortOrder>;
  acceptsTermsOfService?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  confirmed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  roles?: InputMaybe<SortOrder>;
  schoolEmail?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  School?: InputMaybe<SchoolOrderByWithRelationInput>;
  acceptsPrivacyPolicy?: InputMaybe<SortOrder>;
  acceptsTermsOfService?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  confirmed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  roles?: InputMaybe<SortOrder>;
  schoolEmail?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  AcceptsPrivacyPolicy = 'acceptsPrivacyPolicy',
  AcceptsTermsOfService = 'acceptsTermsOfService',
  Address = 'address',
  Confirmed = 'confirmed',
  CreatedAt = 'createdAt',
  Email = 'email',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  Password = 'password',
  Phone = 'phone',
  Roles = 'roles',
  SchoolEmail = 'schoolEmail',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  acceptsPrivacyPolicy?: InputMaybe<BoolFilter>;
  acceptsTermsOfService?: InputMaybe<BoolFilter>;
  address?: InputMaybe<StringNullableFilter>;
  confirmed?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  roles?: InputMaybe<EnumRolesNullableListFilter>;
  schoolEmail?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  acceptsPrivacyPolicy?: InputMaybe<BoolWithAggregatesFilter>;
  acceptsTermsOfService?: InputMaybe<BoolWithAggregatesFilter>;
  address?: InputMaybe<StringNullableWithAggregatesFilter>;
  confirmed?: InputMaybe<BoolWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  phone?: InputMaybe<StringNullableWithAggregatesFilter>;
  roles?: InputMaybe<EnumRolesNullableListFilter>;
  schoolEmail?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
  School?: InputMaybe<SchoolUpdateOneRequiredWithoutUsersInput>;
  acceptsPrivacyPolicy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  acceptsTermsOfService?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roles?: InputMaybe<UserUpdaterolesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  acceptsPrivacyPolicy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  acceptsTermsOfService?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roles?: InputMaybe<UserUpdaterolesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutSchoolInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutSchoolInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutSchoolInput>>;
  create?: InputMaybe<Array<UserCreateWithoutSchoolInput>>;
  createMany?: InputMaybe<UserCreateManySchoolInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutSchoolInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutSchoolInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutSchoolInput>>;
};

export type UserUpdateWithWhereUniqueWithoutSchoolInput = {
  data: UserUpdateWithoutSchoolInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutSchoolInput = {
  acceptsPrivacyPolicy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  acceptsTermsOfService?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roles?: InputMaybe<UserUpdaterolesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdaterolesInput = {
  push?: InputMaybe<Array<Roles>>;
  set?: InputMaybe<Array<Roles>>;
};

export type UserUpsertWithWhereUniqueWithoutSchoolInput = {
  create: UserCreateWithoutSchoolInput;
  update: UserUpdateWithoutSchoolInput;
  where: UserWhereUniqueInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  School?: InputMaybe<SchoolRelationFilter>;
  acceptsPrivacyPolicy?: InputMaybe<BoolFilter>;
  acceptsTermsOfService?: InputMaybe<BoolFilter>;
  address?: InputMaybe<StringNullableFilter>;
  confirmed?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  roles?: InputMaybe<EnumRolesNullableListFilter>;
  schoolEmail?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
};

export type ChangePasswordMutationVariables = Exact<{
  data: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword?: { __typename?: 'User', id: string, email: string, roles: Array<Roles> } | null };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type PlayerQueryVariables = Exact<{
  where: PlayerWhereUniqueInput;
}>;


export type PlayerQuery = { __typename?: 'Query', player?: { __typename?: 'Player', id: string, birthday: any, category?: Player_Category | null, familySupport?: Family_Support | null, fieldPosition?: Field_Position | null, guardianEmail: string, guardianId: string, guardianIdType: Ndi_Type, guardianLastName: string, guardianName: string, guardianPhone: string, guardianType: Guardian_Type, height: number, hobbies: Array<string>, image?: string | null, IMC: number, lastName: string, name: string, personalQualities: Array<Personal_Qualities>, physicalCapabilities: Array<Physical_Capabilities>, physicalQualities: Array<Physical_Qualities>, placeOfBirth?: string | null, playerEmail: string, playerId: string, playerIdType: Ndi_Type, playerNumber?: string | null, playerPhone: string, schoolId: string, sportHistory?: string | null, weight: number } | null };

export type CreatePlayerMutationVariables = Exact<{
  data: PlayerCreateInput;
}>;


export type CreatePlayerMutation = { __typename?: 'Mutation', createPlayer: { __typename?: 'Player', birthday: any, category?: Player_Category | null, familySupport?: Family_Support | null, fieldPosition?: Field_Position | null, guardianEmail: string, guardianId: string, guardianIdType: Ndi_Type, guardianLastName: string, guardianName: string, guardianPhone: string, guardianType: Guardian_Type, height: number, hobbies: Array<string>, image?: string | null, IMC: number, lastName: string, name: string, personalQualities: Array<Personal_Qualities>, physicalCapabilities: Array<Physical_Capabilities>, physicalQualities: Array<Physical_Qualities>, placeOfBirth?: string | null, playerEmail: string, playerId: string, playerIdType: Ndi_Type, playerNumber?: string | null, playerPhone: string, schoolId: string, sportHistory?: string | null, weight: number } };

export type PlayersQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type PlayersQuery = { __typename?: 'Query', players: Array<{ __typename?: 'Player', id: string, lastName: string, name: string, playerEmail: string }> };

export type PlayersCountQueryVariables = Exact<{ [key: string]: never; }>;


export type PlayersCountQuery = { __typename?: 'Query', aggregatePlayer: { __typename?: 'AggregatePlayer', _count?: { __typename?: 'PlayerCountAggregate', id: number } | null } };

export type GetSchoolByIdQueryVariables = Exact<{
  where: SchoolWhereUniqueInput;
}>;


export type GetSchoolByIdQuery = { __typename?: 'Query', school?: { __typename?: 'School', id: string, address: string, email: string, name: string, phone: string } | null };

export type GetSchoolsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetSchoolsQuery = { __typename?: 'Query', schools: Array<{ __typename?: 'School', id: string, address: string, email: string, name: string, phone: string, _count?: { __typename?: 'SchoolCount', users: number, players: number } | null, players: Array<{ __typename?: 'Player', id: string }>, users: Array<{ __typename?: 'User', id: string }> }> };

export type SigninMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SigninMutation = { __typename?: 'Mutation', signin?: { __typename?: 'User', id: string } | null };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, address?: string | null, email: string, lastName: string, firstName: string, roles: Array<Roles>, phone?: string | null, schoolEmail: string } | null };


export const ChangePasswordDocument = `
    mutation ChangePassword($data: ChangePasswordInput!) {
  changePassword(data: $data) {
    id
    email
    roles
  }
}
    `;
export const useChangePasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ChangePasswordMutation, TError, ChangePasswordMutationVariables, TContext>) =>
    useMutation<ChangePasswordMutation, TError, ChangePasswordMutationVariables, TContext>(
      ['ChangePassword'],
      (variables?: ChangePasswordMutationVariables) => fetcher<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, variables)(),
      options
    );
export const ForgotPasswordDocument = `
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export const useForgotPasswordMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ForgotPasswordMutation, TError, ForgotPasswordMutationVariables, TContext>) =>
    useMutation<ForgotPasswordMutation, TError, ForgotPasswordMutationVariables, TContext>(
      ['ForgotPassword'],
      (variables?: ForgotPasswordMutationVariables) => fetcher<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, variables)(),
      options
    );
export const LogoutDocument = `
    mutation Logout {
  logout
}
    `;
export const useLogoutMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LogoutMutation, TError, LogoutMutationVariables, TContext>) =>
    useMutation<LogoutMutation, TError, LogoutMutationVariables, TContext>(
      ['Logout'],
      (variables?: LogoutMutationVariables) => fetcher<LogoutMutation, LogoutMutationVariables>(LogoutDocument, variables)(),
      options
    );
export const PlayerDocument = `
    query Player($where: PlayerWhereUniqueInput!) {
  player(where: $where) {
    id
    birthday
    category
    familySupport
    fieldPosition
    guardianEmail
    guardianId
    guardianIdType
    guardianLastName
    guardianName
    guardianPhone
    guardianType
    height
    hobbies
    image
    IMC
    lastName
    name
    personalQualities
    physicalCapabilities
    physicalQualities
    placeOfBirth
    playerEmail
    playerId
    playerIdType
    playerNumber
    playerPhone
    schoolId
    sportHistory
    weight
  }
}
    `;
export const usePlayerQuery = <
      TData = PlayerQuery,
      TError = unknown
    >(
      variables: PlayerQueryVariables,
      options?: UseQueryOptions<PlayerQuery, TError, TData>
    ) =>
    useQuery<PlayerQuery, TError, TData>(
      ['Player', variables],
      fetcher<PlayerQuery, PlayerQueryVariables>(PlayerDocument, variables),
      options
    );
export const CreatePlayerDocument = `
    mutation CreatePlayer($data: PlayerCreateInput!) {
  createPlayer(data: $data) {
    birthday
    category
    familySupport
    fieldPosition
    guardianEmail
    guardianId
    guardianIdType
    guardianLastName
    guardianName
    guardianPhone
    guardianType
    height
    hobbies
    image
    IMC
    lastName
    name
    personalQualities
    physicalCapabilities
    physicalQualities
    placeOfBirth
    playerEmail
    playerId
    playerIdType
    playerNumber
    playerPhone
    schoolId
    sportHistory
    weight
  }
}
    `;
export const useCreatePlayerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreatePlayerMutation, TError, CreatePlayerMutationVariables, TContext>) =>
    useMutation<CreatePlayerMutation, TError, CreatePlayerMutationVariables, TContext>(
      ['CreatePlayer'],
      (variables?: CreatePlayerMutationVariables) => fetcher<CreatePlayerMutation, CreatePlayerMutationVariables>(CreatePlayerDocument, variables)(),
      options
    );
export const PlayersDocument = `
    query Players($take: Int, $skip: Int) {
  players(take: $take, skip: $skip) {
    id
    lastName
    name
    playerEmail
  }
}
    `;
export const usePlayersQuery = <
      TData = PlayersQuery,
      TError = unknown
    >(
      variables?: PlayersQueryVariables,
      options?: UseQueryOptions<PlayersQuery, TError, TData>
    ) =>
    useQuery<PlayersQuery, TError, TData>(
      variables === undefined ? ['Players'] : ['Players', variables],
      fetcher<PlayersQuery, PlayersQueryVariables>(PlayersDocument, variables),
      options
    );
export const PlayersCountDocument = `
    query PlayersCount {
  aggregatePlayer {
    _count {
      id
    }
  }
}
    `;
export const usePlayersCountQuery = <
      TData = PlayersCountQuery,
      TError = unknown
    >(
      variables?: PlayersCountQueryVariables,
      options?: UseQueryOptions<PlayersCountQuery, TError, TData>
    ) =>
    useQuery<PlayersCountQuery, TError, TData>(
      variables === undefined ? ['PlayersCount'] : ['PlayersCount', variables],
      fetcher<PlayersCountQuery, PlayersCountQueryVariables>(PlayersCountDocument, variables),
      options
    );
export const GetSchoolByIdDocument = `
    query getSchoolById($where: SchoolWhereUniqueInput!) {
  school(where: $where) {
    id
    address
    email
    name
    phone
  }
}
    `;
export const useGetSchoolByIdQuery = <
      TData = GetSchoolByIdQuery,
      TError = unknown
    >(
      variables: GetSchoolByIdQueryVariables,
      options?: UseQueryOptions<GetSchoolByIdQuery, TError, TData>
    ) =>
    useQuery<GetSchoolByIdQuery, TError, TData>(
      ['getSchoolById', variables],
      fetcher<GetSchoolByIdQuery, GetSchoolByIdQueryVariables>(GetSchoolByIdDocument, variables),
      options
    );
export const GetSchoolsDocument = `
    query getSchools($take: Int, $skip: Int) {
  schools(take: $take, skip: $skip) {
    id
    address
    email
    name
    phone
    _count {
      users
      players
    }
    players {
      id
    }
    users {
      id
    }
  }
}
    `;
export const useGetSchoolsQuery = <
      TData = GetSchoolsQuery,
      TError = unknown
    >(
      variables?: GetSchoolsQueryVariables,
      options?: UseQueryOptions<GetSchoolsQuery, TError, TData>
    ) =>
    useQuery<GetSchoolsQuery, TError, TData>(
      variables === undefined ? ['getSchools'] : ['getSchools', variables],
      fetcher<GetSchoolsQuery, GetSchoolsQueryVariables>(GetSchoolsDocument, variables),
      options
    );
export const SigninDocument = `
    mutation Signin($email: String!, $password: String!) {
  signin(email: $email, password: $password) {
    id
  }
}
    `;
export const useSigninMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<SigninMutation, TError, SigninMutationVariables, TContext>) =>
    useMutation<SigninMutation, TError, SigninMutationVariables, TContext>(
      ['Signin'],
      (variables?: SigninMutationVariables) => fetcher<SigninMutation, SigninMutationVariables>(SigninDocument, variables)(),
      options
    );
export const UserDocument = `
    query User($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    address
    email
    lastName
    firstName
    roles
    phone
    schoolEmail
  }
}
    `;
export const useUserQuery = <
      TData = UserQuery,
      TError = unknown
    >(
      variables: UserQueryVariables,
      options?: UseQueryOptions<UserQuery, TError, TData>
    ) =>
    useQuery<UserQuery, TError, TData>(
      ['User', variables],
      fetcher<UserQuery, UserQueryVariables>(UserDocument, variables),
      options
    );