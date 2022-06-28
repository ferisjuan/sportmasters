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
    ...({"headers":{"Access-Control-Allow-Origin":"http://localhost:4000","access-control-allow-credentials":"true","Accept":"application/json","Content-Type":"application/json"},"credentials":"include"}),
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
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregatePlayer = {
  __typename?: 'AggregatePlayer';
  _count?: Maybe<PlayerCountAggregate>;
  _max?: Maybe<PlayerMaxAggregate>;
  _min?: Maybe<PlayerMinAggregate>;
};

export type AggregatePlayerAttendance = {
  __typename?: 'AggregatePlayerAttendance';
  _count?: Maybe<PlayerAttendanceCountAggregate>;
  _max?: Maybe<PlayerAttendanceMaxAggregate>;
  _min?: Maybe<PlayerAttendanceMinAggregate>;
};

export type AggregatePlayerData = {
  __typename?: 'AggregatePlayerData';
  _count?: Maybe<PlayerDataCountAggregate>;
  _max?: Maybe<PlayerDataMaxAggregate>;
  _min?: Maybe<PlayerDataMinAggregate>;
};

export type AggregatePlayerGuardian = {
  __typename?: 'AggregatePlayerGuardian';
  _count?: Maybe<PlayerGuardianCountAggregate>;
  _max?: Maybe<PlayerGuardianMaxAggregate>;
  _min?: Maybe<PlayerGuardianMinAggregate>;
};

export type AggregatePlayerInjuries = {
  __typename?: 'AggregatePlayerInjuries';
  _count?: Maybe<PlayerInjuriesCountAggregate>;
  _max?: Maybe<PlayerInjuriesMaxAggregate>;
  _min?: Maybe<PlayerInjuriesMinAggregate>;
};

export type AggregatePlayerMedical = {
  __typename?: 'AggregatePlayerMedical';
  _count?: Maybe<PlayerMedicalCountAggregate>;
  _max?: Maybe<PlayerMedicalMaxAggregate>;
  _min?: Maybe<PlayerMedicalMinAggregate>;
};

export type AggregatePlayerPsychology = {
  __typename?: 'AggregatePlayerPsychology';
  _count?: Maybe<PlayerPsychologyCountAggregate>;
  _max?: Maybe<PlayerPsychologyMaxAggregate>;
  _min?: Maybe<PlayerPsychologyMinAggregate>;
};

export type AggregatePlayerSportData = {
  __typename?: 'AggregatePlayerSportData';
  _count?: Maybe<PlayerSportDataCountAggregate>;
  _max?: Maybe<PlayerSportDataMaxAggregate>;
  _min?: Maybe<PlayerSportDataMinAggregate>;
};

export type AggregatePlayerSurgeries = {
  __typename?: 'AggregatePlayerSurgeries';
  _count?: Maybe<PlayerSurgeriesCountAggregate>;
  _max?: Maybe<PlayerSurgeriesMaxAggregate>;
  _min?: Maybe<PlayerSurgeriesMinAggregate>;
};

export type AggregateSchool = {
  __typename?: 'AggregateSchool';
  _count?: Maybe<SchoolCountAggregate>;
  _max?: Maybe<SchoolMaxAggregate>;
  _min?: Maybe<SchoolMinAggregate>;
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
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

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
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

export type EnumGenderFieldUpdateOperationsInput = {
  set?: InputMaybe<Gender>;
};

export type EnumGenderFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type EnumGenderWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumGenderFilter>;
  _min?: InputMaybe<NestedEnumGenderFilter>;
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Gender>>;
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

export type EnumHandednessFieldUpdateOperationsInput = {
  set?: InputMaybe<Handedness>;
};

export type EnumHandednessFilter = {
  equals?: InputMaybe<Handedness>;
  in?: InputMaybe<Array<Handedness>>;
  not?: InputMaybe<NestedEnumHandednessFilter>;
  notIn?: InputMaybe<Array<Handedness>>;
};

export type EnumHandednessWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumHandednessFilter>;
  _min?: InputMaybe<NestedEnumHandednessFilter>;
  equals?: InputMaybe<Handedness>;
  in?: InputMaybe<Array<Handedness>>;
  not?: InputMaybe<NestedEnumHandednessWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Handedness>>;
};

export type EnumMissed_ReasonFieldUpdateOperationsInput = {
  set?: InputMaybe<Missed_Reason>;
};

export type EnumMissed_ReasonFilter = {
  equals?: InputMaybe<Missed_Reason>;
  in?: InputMaybe<Array<Missed_Reason>>;
  not?: InputMaybe<NestedEnumMissed_ReasonFilter>;
  notIn?: InputMaybe<Array<Missed_Reason>>;
};

export type EnumMissed_ReasonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumMissed_ReasonFilter>;
  _min?: InputMaybe<NestedEnumMissed_ReasonFilter>;
  equals?: InputMaybe<Missed_Reason>;
  in?: InputMaybe<Array<Missed_Reason>>;
  not?: InputMaybe<NestedEnumMissed_ReasonWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Missed_Reason>>;
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

export type EnumPlayer_Payment_StatusFieldUpdateOperationsInput = {
  set?: InputMaybe<Player_Payment_Status>;
};

export type EnumPlayer_Payment_StatusFilter = {
  equals?: InputMaybe<Player_Payment_Status>;
  in?: InputMaybe<Array<Player_Payment_Status>>;
  not?: InputMaybe<NestedEnumPlayer_Payment_StatusFilter>;
  notIn?: InputMaybe<Array<Player_Payment_Status>>;
};

export type EnumPlayer_Payment_StatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPlayer_Payment_StatusFilter>;
  _min?: InputMaybe<NestedEnumPlayer_Payment_StatusFilter>;
  equals?: InputMaybe<Player_Payment_Status>;
  in?: InputMaybe<Array<Player_Payment_Status>>;
  not?: InputMaybe<NestedEnumPlayer_Payment_StatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Player_Payment_Status>>;
};

export type EnumPlayer_StatusFieldUpdateOperationsInput = {
  set?: InputMaybe<Player_Status>;
};

export type EnumPlayer_StatusFilter = {
  equals?: InputMaybe<Player_Status>;
  in?: InputMaybe<Array<Player_Status>>;
  not?: InputMaybe<NestedEnumPlayer_StatusFilter>;
  notIn?: InputMaybe<Array<Player_Status>>;
};

export type EnumPlayer_StatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPlayer_StatusFilter>;
  _min?: InputMaybe<NestedEnumPlayer_StatusFilter>;
  equals?: InputMaybe<Player_Status>;
  in?: InputMaybe<Array<Player_Status>>;
  not?: InputMaybe<NestedEnumPlayer_StatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Player_Status>>;
};

export type EnumRolesNullableListFilter = {
  equals?: InputMaybe<Array<Roles>>;
  has?: InputMaybe<Roles>;
  hasEvery?: InputMaybe<Array<Roles>>;
  hasSome?: InputMaybe<Array<Roles>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumSportsFieldUpdateOperationsInput = {
  set?: InputMaybe<Sports>;
};

export type EnumSportsFilter = {
  equals?: InputMaybe<Sports>;
  in?: InputMaybe<Array<Sports>>;
  not?: InputMaybe<NestedEnumSportsFilter>;
  notIn?: InputMaybe<Array<Sports>>;
};

export type EnumSportsNullableListFilter = {
  equals?: InputMaybe<Array<Sports>>;
  has?: InputMaybe<Sports>;
  hasEvery?: InputMaybe<Array<Sports>>;
  hasSome?: InputMaybe<Array<Sports>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumSportsWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumSportsFilter>;
  _min?: InputMaybe<NestedEnumSportsFilter>;
  equals?: InputMaybe<Sports>;
  in?: InputMaybe<Array<Sports>>;
  not?: InputMaybe<NestedEnumSportsWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Sports>>;
};

export enum Family_Support {
  Aunt = 'AUNT',
  Father = 'FATHER',
  Grandfather = 'GRANDFATHER',
  Grandmother = 'GRANDMOTHER',
  Mother = 'MOTHER',
  None = 'NONE',
  Uncle = 'UNCLE'
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

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export enum Guardian_Type {
  Father = 'FATHER',
  Grandfather = 'GRANDFATHER',
  Grandmother = 'GRANDMOTHER',
  Mother = 'MOTHER',
  None = 'NONE'
}

export enum Handedness {
  Ambidextrous = 'AMBIDEXTROUS',
  Left = 'LEFT',
  Right = 'RIGHT'
}

export enum Missed_Reason {
  Injury = 'INJURY',
  Late = 'LATE',
  Leave = 'LEAVE',
  Medical = 'MEDICAL',
  NotPlaying = 'NOT_PLAYING',
  Sanction = 'SANCTION'
}

export type Mutation = {
  __typename?: 'Mutation';
  changePassword?: Maybe<User>;
  confirmUser: Scalars['Boolean'];
  createManyPlayer: AffectedRowsOutput;
  createManyPlayerAttendance: AffectedRowsOutput;
  createManyPlayerData: AffectedRowsOutput;
  createManyPlayerGuardian: AffectedRowsOutput;
  createManyPlayerInjuries: AffectedRowsOutput;
  createManyPlayerMedical: AffectedRowsOutput;
  createManyPlayerPsychology: AffectedRowsOutput;
  createManyPlayerSportData: AffectedRowsOutput;
  createManyPlayerSurgeries: AffectedRowsOutput;
  createManySchool: AffectedRowsOutput;
  createManySession: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createPlayer: Player;
  createPlayerAttendance: PlayerAttendance;
  createPlayerData: PlayerData;
  createPlayerGuardian: PlayerGuardian;
  createPlayerInjuries: PlayerInjuries;
  createPlayerMedical: PlayerMedical;
  createPlayerPsychology: PlayerPsychology;
  createPlayerSportData: PlayerSportData;
  createPlayerSurgeries: PlayerSurgeries;
  createSchool: School;
  createSession: Session;
  createUser: User;
  deleteManyPlayer: AffectedRowsOutput;
  deleteManyPlayerAttendance: AffectedRowsOutput;
  deleteManyPlayerData: AffectedRowsOutput;
  deleteManyPlayerGuardian: AffectedRowsOutput;
  deleteManyPlayerInjuries: AffectedRowsOutput;
  deleteManyPlayerMedical: AffectedRowsOutput;
  deleteManyPlayerPsychology: AffectedRowsOutput;
  deleteManyPlayerSportData: AffectedRowsOutput;
  deleteManyPlayerSurgeries: AffectedRowsOutput;
  deleteManySchool: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deletePlayer?: Maybe<Player>;
  deletePlayerAttendance?: Maybe<PlayerAttendance>;
  deletePlayerData?: Maybe<PlayerData>;
  deletePlayerGuardian?: Maybe<PlayerGuardian>;
  deletePlayerInjuries?: Maybe<PlayerInjuries>;
  deletePlayerMedical?: Maybe<PlayerMedical>;
  deletePlayerPsychology?: Maybe<PlayerPsychology>;
  deletePlayerSportData?: Maybe<PlayerSportData>;
  deletePlayerSurgeries?: Maybe<PlayerSurgeries>;
  deleteSchool?: Maybe<School>;
  deleteSession?: Maybe<Session>;
  deleteUser?: Maybe<User>;
  forgotPassword: Scalars['Boolean'];
  logout: Scalars['Boolean'];
  signin?: Maybe<User>;
  signup: User;
  updateManyPlayer: AffectedRowsOutput;
  updateManyPlayerAttendance: AffectedRowsOutput;
  updateManyPlayerData: AffectedRowsOutput;
  updateManyPlayerGuardian: AffectedRowsOutput;
  updateManyPlayerInjuries: AffectedRowsOutput;
  updateManyPlayerMedical: AffectedRowsOutput;
  updateManyPlayerPsychology: AffectedRowsOutput;
  updateManyPlayerSportData: AffectedRowsOutput;
  updateManyPlayerSurgeries: AffectedRowsOutput;
  updateManySchool: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updatePlayer?: Maybe<Player>;
  updatePlayerAttendance?: Maybe<PlayerAttendance>;
  updatePlayerData?: Maybe<PlayerData>;
  updatePlayerGuardian?: Maybe<PlayerGuardian>;
  updatePlayerInjuries?: Maybe<PlayerInjuries>;
  updatePlayerMedical?: Maybe<PlayerMedical>;
  updatePlayerPsychology?: Maybe<PlayerPsychology>;
  updatePlayerSportData?: Maybe<PlayerSportData>;
  updatePlayerSurgeries?: Maybe<PlayerSurgeries>;
  updateSchool?: Maybe<School>;
  updateSession?: Maybe<Session>;
  updateUser?: Maybe<User>;
  upsertPlayer: Player;
  upsertPlayerAttendance: PlayerAttendance;
  upsertPlayerData: PlayerData;
  upsertPlayerGuardian: PlayerGuardian;
  upsertPlayerInjuries: PlayerInjuries;
  upsertPlayerMedical: PlayerMedical;
  upsertPlayerPsychology: PlayerPsychology;
  upsertPlayerSportData: PlayerSportData;
  upsertPlayerSurgeries: PlayerSurgeries;
  upsertSchool: School;
  upsertSession: Session;
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


export type MutationCreateManyPlayerAttendanceArgs = {
  data: Array<PlayerAttendanceCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPlayerDataArgs = {
  data: Array<PlayerDataCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPlayerGuardianArgs = {
  data: Array<PlayerGuardianCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPlayerInjuriesArgs = {
  data: Array<PlayerInjuriesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPlayerMedicalArgs = {
  data: Array<PlayerMedicalCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPlayerPsychologyArgs = {
  data: Array<PlayerPsychologyCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPlayerSportDataArgs = {
  data: Array<PlayerSportDataCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyPlayerSurgeriesArgs = {
  data: Array<PlayerSurgeriesCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySchoolArgs = {
  data: Array<SchoolCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreatePlayerArgs = {
  data: PlayerCreateInput;
};


export type MutationCreatePlayerAttendanceArgs = {
  data: PlayerAttendanceCreateInput;
};


export type MutationCreatePlayerDataArgs = {
  data: PlayerDataCreateInput;
};


export type MutationCreatePlayerGuardianArgs = {
  data: PlayerGuardianCreateInput;
};


export type MutationCreatePlayerInjuriesArgs = {
  data: PlayerInjuriesCreateInput;
};


export type MutationCreatePlayerMedicalArgs = {
  data: PlayerMedicalCreateInput;
};


export type MutationCreatePlayerPsychologyArgs = {
  data: PlayerPsychologyCreateInput;
};


export type MutationCreatePlayerSportDataArgs = {
  data: PlayerSportDataCreateInput;
};


export type MutationCreatePlayerSurgeriesArgs = {
  data: PlayerSurgeriesCreateInput;
};


export type MutationCreateSchoolArgs = {
  data: SchoolCreateInput;
};


export type MutationCreateSessionArgs = {
  data: SessionCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyPlayerArgs = {
  where?: InputMaybe<PlayerWhereInput>;
};


export type MutationDeleteManyPlayerAttendanceArgs = {
  where?: InputMaybe<PlayerAttendanceWhereInput>;
};


export type MutationDeleteManyPlayerDataArgs = {
  where?: InputMaybe<PlayerDataWhereInput>;
};


export type MutationDeleteManyPlayerGuardianArgs = {
  where?: InputMaybe<PlayerGuardianWhereInput>;
};


export type MutationDeleteManyPlayerInjuriesArgs = {
  where?: InputMaybe<PlayerInjuriesWhereInput>;
};


export type MutationDeleteManyPlayerMedicalArgs = {
  where?: InputMaybe<PlayerMedicalWhereInput>;
};


export type MutationDeleteManyPlayerPsychologyArgs = {
  where?: InputMaybe<PlayerPsychologyWhereInput>;
};


export type MutationDeleteManyPlayerSportDataArgs = {
  where?: InputMaybe<PlayerSportDataWhereInput>;
};


export type MutationDeleteManyPlayerSurgeriesArgs = {
  where?: InputMaybe<PlayerSurgeriesWhereInput>;
};


export type MutationDeleteManySchoolArgs = {
  where?: InputMaybe<SchoolWhereInput>;
};


export type MutationDeleteManySessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeletePlayerArgs = {
  where: PlayerWhereUniqueInput;
};


export type MutationDeletePlayerAttendanceArgs = {
  where: PlayerAttendanceWhereUniqueInput;
};


export type MutationDeletePlayerDataArgs = {
  where: PlayerDataWhereUniqueInput;
};


export type MutationDeletePlayerGuardianArgs = {
  where: PlayerGuardianWhereUniqueInput;
};


export type MutationDeletePlayerInjuriesArgs = {
  where: PlayerInjuriesWhereUniqueInput;
};


export type MutationDeletePlayerMedicalArgs = {
  where: PlayerMedicalWhereUniqueInput;
};


export type MutationDeletePlayerPsychologyArgs = {
  where: PlayerPsychologyWhereUniqueInput;
};


export type MutationDeletePlayerSportDataArgs = {
  where: PlayerSportDataWhereUniqueInput;
};


export type MutationDeletePlayerSurgeriesArgs = {
  where: PlayerSurgeriesWhereUniqueInput;
};


export type MutationDeleteSchoolArgs = {
  where: SchoolWhereUniqueInput;
};


export type MutationDeleteSessionArgs = {
  where: SessionWhereUniqueInput;
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


export type MutationUpdateManyPlayerAttendanceArgs = {
  data: PlayerAttendanceUpdateManyMutationInput;
  where?: InputMaybe<PlayerAttendanceWhereInput>;
};


export type MutationUpdateManyPlayerDataArgs = {
  data: PlayerDataUpdateManyMutationInput;
  where?: InputMaybe<PlayerDataWhereInput>;
};


export type MutationUpdateManyPlayerGuardianArgs = {
  data: PlayerGuardianUpdateManyMutationInput;
  where?: InputMaybe<PlayerGuardianWhereInput>;
};


export type MutationUpdateManyPlayerInjuriesArgs = {
  data: PlayerInjuriesUpdateManyMutationInput;
  where?: InputMaybe<PlayerInjuriesWhereInput>;
};


export type MutationUpdateManyPlayerMedicalArgs = {
  data: PlayerMedicalUpdateManyMutationInput;
  where?: InputMaybe<PlayerMedicalWhereInput>;
};


export type MutationUpdateManyPlayerPsychologyArgs = {
  data: PlayerPsychologyUpdateManyMutationInput;
  where?: InputMaybe<PlayerPsychologyWhereInput>;
};


export type MutationUpdateManyPlayerSportDataArgs = {
  data: PlayerSportDataUpdateManyMutationInput;
  where?: InputMaybe<PlayerSportDataWhereInput>;
};


export type MutationUpdateManyPlayerSurgeriesArgs = {
  data: PlayerSurgeriesUpdateManyMutationInput;
  where?: InputMaybe<PlayerSurgeriesWhereInput>;
};


export type MutationUpdateManySchoolArgs = {
  data: SchoolUpdateManyMutationInput;
  where?: InputMaybe<SchoolWhereInput>;
};


export type MutationUpdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdatePlayerArgs = {
  data: PlayerUpdateInput;
  where: PlayerWhereUniqueInput;
};


export type MutationUpdatePlayerAttendanceArgs = {
  data: PlayerAttendanceUpdateInput;
  where: PlayerAttendanceWhereUniqueInput;
};


export type MutationUpdatePlayerDataArgs = {
  data: PlayerDataUpdateInput;
  where: PlayerDataWhereUniqueInput;
};


export type MutationUpdatePlayerGuardianArgs = {
  data: PlayerGuardianUpdateInput;
  where: PlayerGuardianWhereUniqueInput;
};


export type MutationUpdatePlayerInjuriesArgs = {
  data: PlayerInjuriesUpdateInput;
  where: PlayerInjuriesWhereUniqueInput;
};


export type MutationUpdatePlayerMedicalArgs = {
  data: PlayerMedicalUpdateInput;
  where: PlayerMedicalWhereUniqueInput;
};


export type MutationUpdatePlayerPsychologyArgs = {
  data: PlayerPsychologyUpdateInput;
  where: PlayerPsychologyWhereUniqueInput;
};


export type MutationUpdatePlayerSportDataArgs = {
  data: PlayerSportDataUpdateInput;
  where: PlayerSportDataWhereUniqueInput;
};


export type MutationUpdatePlayerSurgeriesArgs = {
  data: PlayerSurgeriesUpdateInput;
  where: PlayerSurgeriesWhereUniqueInput;
};


export type MutationUpdateSchoolArgs = {
  data: SchoolUpdateInput;
  where: SchoolWhereUniqueInput;
};


export type MutationUpdateSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
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


export type MutationUpsertPlayerAttendanceArgs = {
  create: PlayerAttendanceCreateInput;
  update: PlayerAttendanceUpdateInput;
  where: PlayerAttendanceWhereUniqueInput;
};


export type MutationUpsertPlayerDataArgs = {
  create: PlayerDataCreateInput;
  update: PlayerDataUpdateInput;
  where: PlayerDataWhereUniqueInput;
};


export type MutationUpsertPlayerGuardianArgs = {
  create: PlayerGuardianCreateInput;
  update: PlayerGuardianUpdateInput;
  where: PlayerGuardianWhereUniqueInput;
};


export type MutationUpsertPlayerInjuriesArgs = {
  create: PlayerInjuriesCreateInput;
  update: PlayerInjuriesUpdateInput;
  where: PlayerInjuriesWhereUniqueInput;
};


export type MutationUpsertPlayerMedicalArgs = {
  create: PlayerMedicalCreateInput;
  update: PlayerMedicalUpdateInput;
  where: PlayerMedicalWhereUniqueInput;
};


export type MutationUpsertPlayerPsychologyArgs = {
  create: PlayerPsychologyCreateInput;
  update: PlayerPsychologyUpdateInput;
  where: PlayerPsychologyWhereUniqueInput;
};


export type MutationUpsertPlayerSportDataArgs = {
  create: PlayerSportDataCreateInput;
  update: PlayerSportDataUpdateInput;
  where: PlayerSportDataWhereUniqueInput;
};


export type MutationUpsertPlayerSurgeriesArgs = {
  create: PlayerSurgeriesCreateInput;
  update: PlayerSurgeriesUpdateInput;
  where: PlayerSurgeriesWhereUniqueInput;
};


export type MutationUpsertSchoolArgs = {
  create: SchoolCreateInput;
  update: SchoolUpdateInput;
  where: SchoolWhereUniqueInput;
};


export type MutationUpsertSessionArgs = {
  create: SessionCreateInput;
  update: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export enum Ndi_Type {
  CivilRegistration = 'CIVIL_REGISTRATION',
  ForeignCard = 'FOREIGN_CARD',
  IdentityCard = 'IDENTITY_CARD',
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

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
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

export type NestedEnumGenderFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type NestedEnumGenderWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumGenderFilter>;
  _min?: InputMaybe<NestedEnumGenderFilter>;
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Gender>>;
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

export type NestedEnumHandednessFilter = {
  equals?: InputMaybe<Handedness>;
  in?: InputMaybe<Array<Handedness>>;
  not?: InputMaybe<NestedEnumHandednessFilter>;
  notIn?: InputMaybe<Array<Handedness>>;
};

export type NestedEnumHandednessWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumHandednessFilter>;
  _min?: InputMaybe<NestedEnumHandednessFilter>;
  equals?: InputMaybe<Handedness>;
  in?: InputMaybe<Array<Handedness>>;
  not?: InputMaybe<NestedEnumHandednessWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Handedness>>;
};

export type NestedEnumMissed_ReasonFilter = {
  equals?: InputMaybe<Missed_Reason>;
  in?: InputMaybe<Array<Missed_Reason>>;
  not?: InputMaybe<NestedEnumMissed_ReasonFilter>;
  notIn?: InputMaybe<Array<Missed_Reason>>;
};

export type NestedEnumMissed_ReasonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumMissed_ReasonFilter>;
  _min?: InputMaybe<NestedEnumMissed_ReasonFilter>;
  equals?: InputMaybe<Missed_Reason>;
  in?: InputMaybe<Array<Missed_Reason>>;
  not?: InputMaybe<NestedEnumMissed_ReasonWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Missed_Reason>>;
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

export type NestedEnumPlayer_Payment_StatusFilter = {
  equals?: InputMaybe<Player_Payment_Status>;
  in?: InputMaybe<Array<Player_Payment_Status>>;
  not?: InputMaybe<NestedEnumPlayer_Payment_StatusFilter>;
  notIn?: InputMaybe<Array<Player_Payment_Status>>;
};

export type NestedEnumPlayer_Payment_StatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPlayer_Payment_StatusFilter>;
  _min?: InputMaybe<NestedEnumPlayer_Payment_StatusFilter>;
  equals?: InputMaybe<Player_Payment_Status>;
  in?: InputMaybe<Array<Player_Payment_Status>>;
  not?: InputMaybe<NestedEnumPlayer_Payment_StatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Player_Payment_Status>>;
};

export type NestedEnumPlayer_StatusFilter = {
  equals?: InputMaybe<Player_Status>;
  in?: InputMaybe<Array<Player_Status>>;
  not?: InputMaybe<NestedEnumPlayer_StatusFilter>;
  notIn?: InputMaybe<Array<Player_Status>>;
};

export type NestedEnumPlayer_StatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumPlayer_StatusFilter>;
  _min?: InputMaybe<NestedEnumPlayer_StatusFilter>;
  equals?: InputMaybe<Player_Status>;
  in?: InputMaybe<Array<Player_Status>>;
  not?: InputMaybe<NestedEnumPlayer_StatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Player_Status>>;
};

export type NestedEnumSportsFilter = {
  equals?: InputMaybe<Sports>;
  in?: InputMaybe<Array<Sports>>;
  not?: InputMaybe<NestedEnumSportsFilter>;
  notIn?: InputMaybe<Array<Sports>>;
};

export type NestedEnumSportsWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumSportsFilter>;
  _min?: InputMaybe<NestedEnumSportsFilter>;
  equals?: InputMaybe<Sports>;
  in?: InputMaybe<Array<Sports>>;
  not?: InputMaybe<NestedEnumSportsWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Sports>>;
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

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
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

export enum Player_Payment_Status {
  Paid = 'PAID',
  Unpaid = 'UNPAID'
}

export enum Player_Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type Player = {
  __typename?: 'Player';
  _count?: Maybe<PlayerCount>;
  coachId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerAttendances: Array<PlayerAttendance>;
  playerData: PlayerData;
  playerDataId: Scalars['String'];
  playerEmail: Scalars['String'];
  playerGuardian?: Maybe<PlayerGuardian>;
  playerGuardianId?: Maybe<Scalars['String']>;
  playerInjuries?: Maybe<PlayerInjuries>;
  playerInjuriesId?: Maybe<Scalars['String']>;
  playerMedical?: Maybe<PlayerMedical>;
  playerMedicalId?: Maybe<Scalars['String']>;
  playerPaymentStatus: Player_Payment_Status;
  playerPsychology?: Maybe<PlayerPsychology>;
  playerPsychologyId?: Maybe<Scalars['String']>;
  playerSportData?: Maybe<PlayerSportData>;
  playerSportDataId?: Maybe<Scalars['String']>;
  playerStatus: Player_Status;
  playerSurgeries?: Maybe<PlayerSurgeries>;
  playerSurgeryId?: Maybe<Scalars['String']>;
  school: School;
  schoolId: Scalars['String'];
};


export type PlayerPlayerAttendancesArgs = {
  cursor?: InputMaybe<PlayerAttendanceWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerAttendanceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerAttendanceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttendanceWhereInput>;
};

export type PlayerAttendance = {
  __typename?: 'PlayerAttendance';
  School?: Maybe<School>;
  id: Scalars['String'];
  missAttendanceDate: Scalars['DateTime'];
  player: Player;
  playerId: Scalars['String'];
  reason: Missed_Reason;
  schoolId?: Maybe<Scalars['String']>;
  sport: Sports;
};

export type PlayerAttendanceCountAggregate = {
  __typename?: 'PlayerAttendanceCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  missAttendanceDate: Scalars['Int'];
  playerId: Scalars['Int'];
  reason: Scalars['Int'];
  schoolId: Scalars['Int'];
  sport: Scalars['Int'];
};

export type PlayerAttendanceCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  missAttendanceDate?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  reason?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
  sport?: InputMaybe<SortOrder>;
};

export type PlayerAttendanceCreateInput = {
  School?: InputMaybe<SchoolCreateNestedOneWithoutAttendanceInput>;
  id?: InputMaybe<Scalars['String']>;
  missAttendanceDate: Scalars['DateTime'];
  player: PlayerCreateNestedOneWithoutPlayerAttendancesInput;
  reason?: InputMaybe<Missed_Reason>;
  sport: Sports;
};

export type PlayerAttendanceCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  missAttendanceDate: Scalars['DateTime'];
  playerId: Scalars['String'];
  reason?: InputMaybe<Missed_Reason>;
  schoolId?: InputMaybe<Scalars['String']>;
  sport: Sports;
};

export type PlayerAttendanceCreateManyPlayerInput = {
  id?: InputMaybe<Scalars['String']>;
  missAttendanceDate: Scalars['DateTime'];
  reason?: InputMaybe<Missed_Reason>;
  schoolId?: InputMaybe<Scalars['String']>;
  sport: Sports;
};

export type PlayerAttendanceCreateManyPlayerInputEnvelope = {
  data: Array<PlayerAttendanceCreateManyPlayerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerAttendanceCreateManySchoolInput = {
  id?: InputMaybe<Scalars['String']>;
  missAttendanceDate: Scalars['DateTime'];
  playerId: Scalars['String'];
  reason?: InputMaybe<Missed_Reason>;
  sport: Sports;
};

export type PlayerAttendanceCreateManySchoolInputEnvelope = {
  data: Array<PlayerAttendanceCreateManySchoolInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerAttendanceCreateNestedManyWithoutPlayerInput = {
  connect?: InputMaybe<Array<PlayerAttendanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerAttendanceCreateOrConnectWithoutPlayerInput>>;
  create?: InputMaybe<Array<PlayerAttendanceCreateWithoutPlayerInput>>;
  createMany?: InputMaybe<PlayerAttendanceCreateManyPlayerInputEnvelope>;
};

export type PlayerAttendanceCreateNestedManyWithoutSchoolInput = {
  connect?: InputMaybe<Array<PlayerAttendanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerAttendanceCreateOrConnectWithoutSchoolInput>>;
  create?: InputMaybe<Array<PlayerAttendanceCreateWithoutSchoolInput>>;
  createMany?: InputMaybe<PlayerAttendanceCreateManySchoolInputEnvelope>;
};

export type PlayerAttendanceCreateOrConnectWithoutPlayerInput = {
  create: PlayerAttendanceCreateWithoutPlayerInput;
  where: PlayerAttendanceWhereUniqueInput;
};

export type PlayerAttendanceCreateOrConnectWithoutSchoolInput = {
  create: PlayerAttendanceCreateWithoutSchoolInput;
  where: PlayerAttendanceWhereUniqueInput;
};

export type PlayerAttendanceCreateWithoutPlayerInput = {
  School?: InputMaybe<SchoolCreateNestedOneWithoutAttendanceInput>;
  id?: InputMaybe<Scalars['String']>;
  missAttendanceDate: Scalars['DateTime'];
  reason?: InputMaybe<Missed_Reason>;
  sport: Sports;
};

export type PlayerAttendanceCreateWithoutSchoolInput = {
  id?: InputMaybe<Scalars['String']>;
  missAttendanceDate: Scalars['DateTime'];
  player: PlayerCreateNestedOneWithoutPlayerAttendancesInput;
  reason?: InputMaybe<Missed_Reason>;
  sport: Sports;
};

export type PlayerAttendanceGroupBy = {
  __typename?: 'PlayerAttendanceGroupBy';
  _count?: Maybe<PlayerAttendanceCountAggregate>;
  _max?: Maybe<PlayerAttendanceMaxAggregate>;
  _min?: Maybe<PlayerAttendanceMinAggregate>;
  id: Scalars['String'];
  missAttendanceDate: Scalars['DateTime'];
  playerId: Scalars['String'];
  reason: Missed_Reason;
  schoolId?: Maybe<Scalars['String']>;
  sport: Sports;
};

export type PlayerAttendanceListRelationFilter = {
  every?: InputMaybe<PlayerAttendanceWhereInput>;
  none?: InputMaybe<PlayerAttendanceWhereInput>;
  some?: InputMaybe<PlayerAttendanceWhereInput>;
};

export type PlayerAttendanceMaxAggregate = {
  __typename?: 'PlayerAttendanceMaxAggregate';
  id?: Maybe<Scalars['String']>;
  missAttendanceDate?: Maybe<Scalars['DateTime']>;
  playerId?: Maybe<Scalars['String']>;
  reason?: Maybe<Missed_Reason>;
  schoolId?: Maybe<Scalars['String']>;
  sport?: Maybe<Sports>;
};

export type PlayerAttendanceMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  missAttendanceDate?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  reason?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
  sport?: InputMaybe<SortOrder>;
};

export type PlayerAttendanceMinAggregate = {
  __typename?: 'PlayerAttendanceMinAggregate';
  id?: Maybe<Scalars['String']>;
  missAttendanceDate?: Maybe<Scalars['DateTime']>;
  playerId?: Maybe<Scalars['String']>;
  reason?: Maybe<Missed_Reason>;
  schoolId?: Maybe<Scalars['String']>;
  sport?: Maybe<Sports>;
};

export type PlayerAttendanceMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  missAttendanceDate?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  reason?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
  sport?: InputMaybe<SortOrder>;
};

export type PlayerAttendanceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlayerAttendanceOrderByWithAggregationInput = {
  _count?: InputMaybe<PlayerAttendanceCountOrderByAggregateInput>;
  _max?: InputMaybe<PlayerAttendanceMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlayerAttendanceMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  missAttendanceDate?: InputMaybe<SortOrder>;
  playerId?: InputMaybe<SortOrder>;
  reason?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
  sport?: InputMaybe<SortOrder>;
};

export type PlayerAttendanceOrderByWithRelationInput = {
  School?: InputMaybe<SchoolOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  missAttendanceDate?: InputMaybe<SortOrder>;
  player?: InputMaybe<PlayerOrderByWithRelationInput>;
  playerId?: InputMaybe<SortOrder>;
  reason?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
  sport?: InputMaybe<SortOrder>;
};

export enum PlayerAttendanceScalarFieldEnum {
  Id = 'id',
  MissAttendanceDate = 'missAttendanceDate',
  PlayerId = 'playerId',
  Reason = 'reason',
  SchoolId = 'schoolId',
  Sport = 'sport'
}

export type PlayerAttendanceScalarWhereInput = {
  AND?: InputMaybe<Array<PlayerAttendanceScalarWhereInput>>;
  NOT?: InputMaybe<Array<PlayerAttendanceScalarWhereInput>>;
  OR?: InputMaybe<Array<PlayerAttendanceScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  missAttendanceDate?: InputMaybe<DateTimeFilter>;
  playerId?: InputMaybe<StringFilter>;
  reason?: InputMaybe<EnumMissed_ReasonFilter>;
  schoolId?: InputMaybe<StringNullableFilter>;
  sport?: InputMaybe<EnumSportsFilter>;
};

export type PlayerAttendanceScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlayerAttendanceScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PlayerAttendanceScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlayerAttendanceScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  missAttendanceDate?: InputMaybe<DateTimeWithAggregatesFilter>;
  playerId?: InputMaybe<StringWithAggregatesFilter>;
  reason?: InputMaybe<EnumMissed_ReasonWithAggregatesFilter>;
  schoolId?: InputMaybe<StringNullableWithAggregatesFilter>;
  sport?: InputMaybe<EnumSportsWithAggregatesFilter>;
};

export type PlayerAttendanceUpdateInput = {
  School?: InputMaybe<SchoolUpdateOneWithoutAttendanceInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  missAttendanceDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  player?: InputMaybe<PlayerUpdateOneRequiredWithoutPlayerAttendancesInput>;
  reason?: InputMaybe<EnumMissed_ReasonFieldUpdateOperationsInput>;
  sport?: InputMaybe<EnumSportsFieldUpdateOperationsInput>;
};

export type PlayerAttendanceUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  missAttendanceDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  reason?: InputMaybe<EnumMissed_ReasonFieldUpdateOperationsInput>;
  sport?: InputMaybe<EnumSportsFieldUpdateOperationsInput>;
};

export type PlayerAttendanceUpdateManyWithWhereWithoutPlayerInput = {
  data: PlayerAttendanceUpdateManyMutationInput;
  where: PlayerAttendanceScalarWhereInput;
};

export type PlayerAttendanceUpdateManyWithWhereWithoutSchoolInput = {
  data: PlayerAttendanceUpdateManyMutationInput;
  where: PlayerAttendanceScalarWhereInput;
};

export type PlayerAttendanceUpdateManyWithoutPlayerInput = {
  connect?: InputMaybe<Array<PlayerAttendanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerAttendanceCreateOrConnectWithoutPlayerInput>>;
  create?: InputMaybe<Array<PlayerAttendanceCreateWithoutPlayerInput>>;
  createMany?: InputMaybe<PlayerAttendanceCreateManyPlayerInputEnvelope>;
  delete?: InputMaybe<Array<PlayerAttendanceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerAttendanceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerAttendanceWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerAttendanceWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerAttendanceUpdateWithWhereUniqueWithoutPlayerInput>>;
  updateMany?: InputMaybe<Array<PlayerAttendanceUpdateManyWithWhereWithoutPlayerInput>>;
  upsert?: InputMaybe<Array<PlayerAttendanceUpsertWithWhereUniqueWithoutPlayerInput>>;
};

export type PlayerAttendanceUpdateManyWithoutSchoolInput = {
  connect?: InputMaybe<Array<PlayerAttendanceWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerAttendanceCreateOrConnectWithoutSchoolInput>>;
  create?: InputMaybe<Array<PlayerAttendanceCreateWithoutSchoolInput>>;
  createMany?: InputMaybe<PlayerAttendanceCreateManySchoolInputEnvelope>;
  delete?: InputMaybe<Array<PlayerAttendanceWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerAttendanceScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerAttendanceWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerAttendanceWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerAttendanceUpdateWithWhereUniqueWithoutSchoolInput>>;
  updateMany?: InputMaybe<Array<PlayerAttendanceUpdateManyWithWhereWithoutSchoolInput>>;
  upsert?: InputMaybe<Array<PlayerAttendanceUpsertWithWhereUniqueWithoutSchoolInput>>;
};

export type PlayerAttendanceUpdateWithWhereUniqueWithoutPlayerInput = {
  data: PlayerAttendanceUpdateWithoutPlayerInput;
  where: PlayerAttendanceWhereUniqueInput;
};

export type PlayerAttendanceUpdateWithWhereUniqueWithoutSchoolInput = {
  data: PlayerAttendanceUpdateWithoutSchoolInput;
  where: PlayerAttendanceWhereUniqueInput;
};

export type PlayerAttendanceUpdateWithoutPlayerInput = {
  School?: InputMaybe<SchoolUpdateOneWithoutAttendanceInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  missAttendanceDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  reason?: InputMaybe<EnumMissed_ReasonFieldUpdateOperationsInput>;
  sport?: InputMaybe<EnumSportsFieldUpdateOperationsInput>;
};

export type PlayerAttendanceUpdateWithoutSchoolInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  missAttendanceDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  player?: InputMaybe<PlayerUpdateOneRequiredWithoutPlayerAttendancesInput>;
  reason?: InputMaybe<EnumMissed_ReasonFieldUpdateOperationsInput>;
  sport?: InputMaybe<EnumSportsFieldUpdateOperationsInput>;
};

export type PlayerAttendanceUpsertWithWhereUniqueWithoutPlayerInput = {
  create: PlayerAttendanceCreateWithoutPlayerInput;
  update: PlayerAttendanceUpdateWithoutPlayerInput;
  where: PlayerAttendanceWhereUniqueInput;
};

export type PlayerAttendanceUpsertWithWhereUniqueWithoutSchoolInput = {
  create: PlayerAttendanceCreateWithoutSchoolInput;
  update: PlayerAttendanceUpdateWithoutSchoolInput;
  where: PlayerAttendanceWhereUniqueInput;
};

export type PlayerAttendanceWhereInput = {
  AND?: InputMaybe<Array<PlayerAttendanceWhereInput>>;
  NOT?: InputMaybe<Array<PlayerAttendanceWhereInput>>;
  OR?: InputMaybe<Array<PlayerAttendanceWhereInput>>;
  School?: InputMaybe<SchoolRelationFilter>;
  id?: InputMaybe<StringFilter>;
  missAttendanceDate?: InputMaybe<DateTimeFilter>;
  player?: InputMaybe<PlayerRelationFilter>;
  playerId?: InputMaybe<StringFilter>;
  reason?: InputMaybe<EnumMissed_ReasonFilter>;
  schoolId?: InputMaybe<StringNullableFilter>;
  sport?: InputMaybe<EnumSportsFilter>;
};

export type PlayerAttendanceWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type PlayerCount = {
  __typename?: 'PlayerCount';
  playerAttendances: Scalars['Int'];
};

export type PlayerCountAggregate = {
  __typename?: 'PlayerCountAggregate';
  _all: Scalars['Int'];
  coachId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  lastName: Scalars['Int'];
  name: Scalars['Int'];
  playerDataId: Scalars['Int'];
  playerEmail: Scalars['Int'];
  playerGuardianId: Scalars['Int'];
  playerInjuriesId: Scalars['Int'];
  playerMedicalId: Scalars['Int'];
  playerPaymentStatus: Scalars['Int'];
  playerPsychologyId: Scalars['Int'];
  playerSportDataId: Scalars['Int'];
  playerStatus: Scalars['Int'];
  playerSurgeryId: Scalars['Int'];
  schoolId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PlayerCountOrderByAggregateInput = {
  coachId?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  playerDataId?: InputMaybe<SortOrder>;
  playerEmail?: InputMaybe<SortOrder>;
  playerGuardianId?: InputMaybe<SortOrder>;
  playerInjuriesId?: InputMaybe<SortOrder>;
  playerMedicalId?: InputMaybe<SortOrder>;
  playerPaymentStatus?: InputMaybe<SortOrder>;
  playerPsychologyId?: InputMaybe<SortOrder>;
  playerSportDataId?: InputMaybe<SortOrder>;
  playerStatus?: InputMaybe<SortOrder>;
  playerSurgeryId?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
};

export type PlayerCreateInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerAttendances?: InputMaybe<PlayerAttendanceCreateNestedManyWithoutPlayerInput>;
  playerData: PlayerDataCreateNestedOneWithoutPlayersInput;
  playerEmail: Scalars['String'];
  playerGuardian?: InputMaybe<PlayerGuardianCreateNestedOneWithoutPlayerInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesCreateNestedOneWithoutPlayersInput>;
  playerMedical?: InputMaybe<PlayerMedicalCreateNestedOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychology?: InputMaybe<PlayerPsychologyCreateNestedOneWithoutPlayersInput>;
  playerSportData?: InputMaybe<PlayerSportDataCreateNestedOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesCreateNestedOneWithoutPlayersInput>;
  school: SchoolCreateNestedOneWithoutPlayersInput;
};

export type PlayerCreateManyInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerDataId: Scalars['String'];
  playerEmail: Scalars['String'];
  playerGuardianId?: InputMaybe<Scalars['String']>;
  playerInjuriesId?: InputMaybe<Scalars['String']>;
  playerMedicalId?: InputMaybe<Scalars['String']>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychologyId?: InputMaybe<Scalars['String']>;
  playerSportDataId?: InputMaybe<Scalars['String']>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeryId?: InputMaybe<Scalars['String']>;
  schoolId: Scalars['String'];
};

export type PlayerCreateManyPlayerDataInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerEmail: Scalars['String'];
  playerGuardianId?: InputMaybe<Scalars['String']>;
  playerInjuriesId?: InputMaybe<Scalars['String']>;
  playerMedicalId?: InputMaybe<Scalars['String']>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychologyId?: InputMaybe<Scalars['String']>;
  playerSportDataId?: InputMaybe<Scalars['String']>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeryId?: InputMaybe<Scalars['String']>;
  schoolId: Scalars['String'];
};

export type PlayerCreateManyPlayerDataInputEnvelope = {
  data: Array<PlayerCreateManyPlayerDataInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerCreateManyPlayerGuardianInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerDataId: Scalars['String'];
  playerEmail: Scalars['String'];
  playerInjuriesId?: InputMaybe<Scalars['String']>;
  playerMedicalId?: InputMaybe<Scalars['String']>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychologyId?: InputMaybe<Scalars['String']>;
  playerSportDataId?: InputMaybe<Scalars['String']>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeryId?: InputMaybe<Scalars['String']>;
  schoolId: Scalars['String'];
};

export type PlayerCreateManyPlayerGuardianInputEnvelope = {
  data: Array<PlayerCreateManyPlayerGuardianInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerCreateManyPlayerInjuriesInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerDataId: Scalars['String'];
  playerEmail: Scalars['String'];
  playerGuardianId?: InputMaybe<Scalars['String']>;
  playerMedicalId?: InputMaybe<Scalars['String']>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychologyId?: InputMaybe<Scalars['String']>;
  playerSportDataId?: InputMaybe<Scalars['String']>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeryId?: InputMaybe<Scalars['String']>;
  schoolId: Scalars['String'];
};

export type PlayerCreateManyPlayerInjuriesInputEnvelope = {
  data: Array<PlayerCreateManyPlayerInjuriesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerCreateManyPlayerMedicalInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerDataId: Scalars['String'];
  playerEmail: Scalars['String'];
  playerGuardianId?: InputMaybe<Scalars['String']>;
  playerInjuriesId?: InputMaybe<Scalars['String']>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychologyId?: InputMaybe<Scalars['String']>;
  playerSportDataId?: InputMaybe<Scalars['String']>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeryId?: InputMaybe<Scalars['String']>;
  schoolId: Scalars['String'];
};

export type PlayerCreateManyPlayerMedicalInputEnvelope = {
  data: Array<PlayerCreateManyPlayerMedicalInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerCreateManyPlayerPsychologyInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerDataId: Scalars['String'];
  playerEmail: Scalars['String'];
  playerGuardianId?: InputMaybe<Scalars['String']>;
  playerInjuriesId?: InputMaybe<Scalars['String']>;
  playerMedicalId?: InputMaybe<Scalars['String']>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerSportDataId?: InputMaybe<Scalars['String']>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeryId?: InputMaybe<Scalars['String']>;
  schoolId: Scalars['String'];
};

export type PlayerCreateManyPlayerPsychologyInputEnvelope = {
  data: Array<PlayerCreateManyPlayerPsychologyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerCreateManyPlayerSportDataInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerDataId: Scalars['String'];
  playerEmail: Scalars['String'];
  playerGuardianId?: InputMaybe<Scalars['String']>;
  playerInjuriesId?: InputMaybe<Scalars['String']>;
  playerMedicalId?: InputMaybe<Scalars['String']>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychologyId?: InputMaybe<Scalars['String']>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeryId?: InputMaybe<Scalars['String']>;
  schoolId: Scalars['String'];
};

export type PlayerCreateManyPlayerSportDataInputEnvelope = {
  data: Array<PlayerCreateManyPlayerSportDataInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerCreateManyPlayerSurgeriesInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerDataId: Scalars['String'];
  playerEmail: Scalars['String'];
  playerGuardianId?: InputMaybe<Scalars['String']>;
  playerInjuriesId?: InputMaybe<Scalars['String']>;
  playerMedicalId?: InputMaybe<Scalars['String']>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychologyId?: InputMaybe<Scalars['String']>;
  playerSportDataId?: InputMaybe<Scalars['String']>;
  playerStatus?: InputMaybe<Player_Status>;
  schoolId: Scalars['String'];
};

export type PlayerCreateManyPlayerSurgeriesInputEnvelope = {
  data: Array<PlayerCreateManyPlayerSurgeriesInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerCreateManySchoolInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerDataId: Scalars['String'];
  playerEmail: Scalars['String'];
  playerGuardianId?: InputMaybe<Scalars['String']>;
  playerInjuriesId?: InputMaybe<Scalars['String']>;
  playerMedicalId?: InputMaybe<Scalars['String']>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychologyId?: InputMaybe<Scalars['String']>;
  playerSportDataId?: InputMaybe<Scalars['String']>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeryId?: InputMaybe<Scalars['String']>;
};

export type PlayerCreateManySchoolInputEnvelope = {
  data: Array<PlayerCreateManySchoolInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PlayerCreateNestedManyWithoutPlayerDataInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutPlayerDataInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutPlayerDataInput>>;
  createMany?: InputMaybe<PlayerCreateManyPlayerDataInputEnvelope>;
};

export type PlayerCreateNestedManyWithoutPlayerGuardianInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutPlayerGuardianInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutPlayerGuardianInput>>;
  createMany?: InputMaybe<PlayerCreateManyPlayerGuardianInputEnvelope>;
};

export type PlayerCreateNestedManyWithoutPlayerInjuriesInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutPlayerInjuriesInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutPlayerInjuriesInput>>;
  createMany?: InputMaybe<PlayerCreateManyPlayerInjuriesInputEnvelope>;
};

export type PlayerCreateNestedManyWithoutPlayerMedicalInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutPlayerMedicalInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutPlayerMedicalInput>>;
  createMany?: InputMaybe<PlayerCreateManyPlayerMedicalInputEnvelope>;
};

export type PlayerCreateNestedManyWithoutPlayerPsychologyInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutPlayerPsychologyInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutPlayerPsychologyInput>>;
  createMany?: InputMaybe<PlayerCreateManyPlayerPsychologyInputEnvelope>;
};

export type PlayerCreateNestedManyWithoutPlayerSportDataInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutPlayerSportDataInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutPlayerSportDataInput>>;
  createMany?: InputMaybe<PlayerCreateManyPlayerSportDataInputEnvelope>;
};

export type PlayerCreateNestedManyWithoutPlayerSurgeriesInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutPlayerSurgeriesInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutPlayerSurgeriesInput>>;
  createMany?: InputMaybe<PlayerCreateManyPlayerSurgeriesInputEnvelope>;
};

export type PlayerCreateNestedManyWithoutSchoolInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutSchoolInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutSchoolInput>>;
  createMany?: InputMaybe<PlayerCreateManySchoolInputEnvelope>;
};

export type PlayerCreateNestedOneWithoutPlayerAttendancesInput = {
  connect?: InputMaybe<PlayerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerCreateOrConnectWithoutPlayerAttendancesInput>;
  create?: InputMaybe<PlayerCreateWithoutPlayerAttendancesInput>;
};

export type PlayerCreateOrConnectWithoutPlayerAttendancesInput = {
  create: PlayerCreateWithoutPlayerAttendancesInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutPlayerDataInput = {
  create: PlayerCreateWithoutPlayerDataInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutPlayerGuardianInput = {
  create: PlayerCreateWithoutPlayerGuardianInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutPlayerInjuriesInput = {
  create: PlayerCreateWithoutPlayerInjuriesInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutPlayerMedicalInput = {
  create: PlayerCreateWithoutPlayerMedicalInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutPlayerPsychologyInput = {
  create: PlayerCreateWithoutPlayerPsychologyInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutPlayerSportDataInput = {
  create: PlayerCreateWithoutPlayerSportDataInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutPlayerSurgeriesInput = {
  create: PlayerCreateWithoutPlayerSurgeriesInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateOrConnectWithoutSchoolInput = {
  create: PlayerCreateWithoutSchoolInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerCreateWithoutPlayerAttendancesInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerData: PlayerDataCreateNestedOneWithoutPlayersInput;
  playerEmail: Scalars['String'];
  playerGuardian?: InputMaybe<PlayerGuardianCreateNestedOneWithoutPlayerInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesCreateNestedOneWithoutPlayersInput>;
  playerMedical?: InputMaybe<PlayerMedicalCreateNestedOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychology?: InputMaybe<PlayerPsychologyCreateNestedOneWithoutPlayersInput>;
  playerSportData?: InputMaybe<PlayerSportDataCreateNestedOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesCreateNestedOneWithoutPlayersInput>;
  school: SchoolCreateNestedOneWithoutPlayersInput;
};

export type PlayerCreateWithoutPlayerDataInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerAttendances?: InputMaybe<PlayerAttendanceCreateNestedManyWithoutPlayerInput>;
  playerEmail: Scalars['String'];
  playerGuardian?: InputMaybe<PlayerGuardianCreateNestedOneWithoutPlayerInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesCreateNestedOneWithoutPlayersInput>;
  playerMedical?: InputMaybe<PlayerMedicalCreateNestedOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychology?: InputMaybe<PlayerPsychologyCreateNestedOneWithoutPlayersInput>;
  playerSportData?: InputMaybe<PlayerSportDataCreateNestedOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesCreateNestedOneWithoutPlayersInput>;
  school: SchoolCreateNestedOneWithoutPlayersInput;
};

export type PlayerCreateWithoutPlayerGuardianInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerAttendances?: InputMaybe<PlayerAttendanceCreateNestedManyWithoutPlayerInput>;
  playerData: PlayerDataCreateNestedOneWithoutPlayersInput;
  playerEmail: Scalars['String'];
  playerInjuries?: InputMaybe<PlayerInjuriesCreateNestedOneWithoutPlayersInput>;
  playerMedical?: InputMaybe<PlayerMedicalCreateNestedOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychology?: InputMaybe<PlayerPsychologyCreateNestedOneWithoutPlayersInput>;
  playerSportData?: InputMaybe<PlayerSportDataCreateNestedOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesCreateNestedOneWithoutPlayersInput>;
  school: SchoolCreateNestedOneWithoutPlayersInput;
};

export type PlayerCreateWithoutPlayerInjuriesInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerAttendances?: InputMaybe<PlayerAttendanceCreateNestedManyWithoutPlayerInput>;
  playerData: PlayerDataCreateNestedOneWithoutPlayersInput;
  playerEmail: Scalars['String'];
  playerGuardian?: InputMaybe<PlayerGuardianCreateNestedOneWithoutPlayerInput>;
  playerMedical?: InputMaybe<PlayerMedicalCreateNestedOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychology?: InputMaybe<PlayerPsychologyCreateNestedOneWithoutPlayersInput>;
  playerSportData?: InputMaybe<PlayerSportDataCreateNestedOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesCreateNestedOneWithoutPlayersInput>;
  school: SchoolCreateNestedOneWithoutPlayersInput;
};

export type PlayerCreateWithoutPlayerMedicalInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerAttendances?: InputMaybe<PlayerAttendanceCreateNestedManyWithoutPlayerInput>;
  playerData: PlayerDataCreateNestedOneWithoutPlayersInput;
  playerEmail: Scalars['String'];
  playerGuardian?: InputMaybe<PlayerGuardianCreateNestedOneWithoutPlayerInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesCreateNestedOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychology?: InputMaybe<PlayerPsychologyCreateNestedOneWithoutPlayersInput>;
  playerSportData?: InputMaybe<PlayerSportDataCreateNestedOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesCreateNestedOneWithoutPlayersInput>;
  school: SchoolCreateNestedOneWithoutPlayersInput;
};

export type PlayerCreateWithoutPlayerPsychologyInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerAttendances?: InputMaybe<PlayerAttendanceCreateNestedManyWithoutPlayerInput>;
  playerData: PlayerDataCreateNestedOneWithoutPlayersInput;
  playerEmail: Scalars['String'];
  playerGuardian?: InputMaybe<PlayerGuardianCreateNestedOneWithoutPlayerInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesCreateNestedOneWithoutPlayersInput>;
  playerMedical?: InputMaybe<PlayerMedicalCreateNestedOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerSportData?: InputMaybe<PlayerSportDataCreateNestedOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesCreateNestedOneWithoutPlayersInput>;
  school: SchoolCreateNestedOneWithoutPlayersInput;
};

export type PlayerCreateWithoutPlayerSportDataInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerAttendances?: InputMaybe<PlayerAttendanceCreateNestedManyWithoutPlayerInput>;
  playerData: PlayerDataCreateNestedOneWithoutPlayersInput;
  playerEmail: Scalars['String'];
  playerGuardian?: InputMaybe<PlayerGuardianCreateNestedOneWithoutPlayerInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesCreateNestedOneWithoutPlayersInput>;
  playerMedical?: InputMaybe<PlayerMedicalCreateNestedOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychology?: InputMaybe<PlayerPsychologyCreateNestedOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesCreateNestedOneWithoutPlayersInput>;
  school: SchoolCreateNestedOneWithoutPlayersInput;
};

export type PlayerCreateWithoutPlayerSurgeriesInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerAttendances?: InputMaybe<PlayerAttendanceCreateNestedManyWithoutPlayerInput>;
  playerData: PlayerDataCreateNestedOneWithoutPlayersInput;
  playerEmail: Scalars['String'];
  playerGuardian?: InputMaybe<PlayerGuardianCreateNestedOneWithoutPlayerInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesCreateNestedOneWithoutPlayersInput>;
  playerMedical?: InputMaybe<PlayerMedicalCreateNestedOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychology?: InputMaybe<PlayerPsychologyCreateNestedOneWithoutPlayersInput>;
  playerSportData?: InputMaybe<PlayerSportDataCreateNestedOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<Player_Status>;
  school: SchoolCreateNestedOneWithoutPlayersInput;
};

export type PlayerCreateWithoutSchoolInput = {
  coachId?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerAttendances?: InputMaybe<PlayerAttendanceCreateNestedManyWithoutPlayerInput>;
  playerData: PlayerDataCreateNestedOneWithoutPlayersInput;
  playerEmail: Scalars['String'];
  playerGuardian?: InputMaybe<PlayerGuardianCreateNestedOneWithoutPlayerInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesCreateNestedOneWithoutPlayersInput>;
  playerMedical?: InputMaybe<PlayerMedicalCreateNestedOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<Player_Payment_Status>;
  playerPsychology?: InputMaybe<PlayerPsychologyCreateNestedOneWithoutPlayersInput>;
  playerSportData?: InputMaybe<PlayerSportDataCreateNestedOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<Player_Status>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesCreateNestedOneWithoutPlayersInput>;
};

export type PlayerData = {
  __typename?: 'PlayerData';
  _count?: Maybe<PlayerDataCount>;
  birthday?: Maybe<Scalars['DateTime']>;
  gender: Gender;
  id: Scalars['String'];
  placeOfBirth?: Maybe<Scalars['String']>;
  playerIdExpeditionPlace?: Maybe<Scalars['String']>;
  playerIdNumber: Scalars['String'];
  playerIdType: Ndi_Type;
  playerPhone?: Maybe<Scalars['String']>;
  players: Array<Player>;
};


export type PlayerDataPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};

export type PlayerDataCount = {
  __typename?: 'PlayerDataCount';
  players: Scalars['Int'];
};

export type PlayerDataCountAggregate = {
  __typename?: 'PlayerDataCountAggregate';
  _all: Scalars['Int'];
  birthday: Scalars['Int'];
  createdAt: Scalars['Int'];
  gender: Scalars['Int'];
  id: Scalars['Int'];
  placeOfBirth: Scalars['Int'];
  playerIdExpeditionPlace: Scalars['Int'];
  playerIdNumber: Scalars['Int'];
  playerIdType: Scalars['Int'];
  playerPhone: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PlayerDataCountOrderByAggregateInput = {
  birthday?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  placeOfBirth?: InputMaybe<SortOrder>;
  playerIdExpeditionPlace?: InputMaybe<SortOrder>;
  playerIdNumber?: InputMaybe<SortOrder>;
  playerIdType?: InputMaybe<SortOrder>;
  playerPhone?: InputMaybe<SortOrder>;
};

export type PlayerDataCreateInput = {
  birthday?: InputMaybe<Scalars['DateTime']>;
  gender?: InputMaybe<Gender>;
  placeOfBirth?: InputMaybe<Scalars['String']>;
  playerIdExpeditionPlace?: InputMaybe<Scalars['String']>;
  playerIdNumber: Scalars['String'];
  playerIdType: Ndi_Type;
  playerPhone?: InputMaybe<Scalars['String']>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutPlayerDataInput>;
};

export type PlayerDataCreateManyInput = {
  birthday?: InputMaybe<Scalars['DateTime']>;
  gender?: InputMaybe<Gender>;
  placeOfBirth?: InputMaybe<Scalars['String']>;
  playerIdExpeditionPlace?: InputMaybe<Scalars['String']>;
  playerIdNumber: Scalars['String'];
  playerIdType: Ndi_Type;
  playerPhone?: InputMaybe<Scalars['String']>;
};

export type PlayerDataCreateNestedOneWithoutPlayersInput = {
  connect?: InputMaybe<PlayerDataWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerDataCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<PlayerDataCreateWithoutPlayersInput>;
};

export type PlayerDataCreateOrConnectWithoutPlayersInput = {
  create: PlayerDataCreateWithoutPlayersInput;
  where: PlayerDataWhereUniqueInput;
};

export type PlayerDataCreateWithoutPlayersInput = {
  birthday?: InputMaybe<Scalars['DateTime']>;
  gender?: InputMaybe<Gender>;
  placeOfBirth?: InputMaybe<Scalars['String']>;
  playerIdExpeditionPlace?: InputMaybe<Scalars['String']>;
  playerIdNumber: Scalars['String'];
  playerIdType: Ndi_Type;
  playerPhone?: InputMaybe<Scalars['String']>;
};

export type PlayerDataGroupBy = {
  __typename?: 'PlayerDataGroupBy';
  _count?: Maybe<PlayerDataCountAggregate>;
  _max?: Maybe<PlayerDataMaxAggregate>;
  _min?: Maybe<PlayerDataMinAggregate>;
  birthday?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  gender: Gender;
  id: Scalars['String'];
  placeOfBirth?: Maybe<Scalars['String']>;
  playerIdExpeditionPlace?: Maybe<Scalars['String']>;
  playerIdNumber: Scalars['String'];
  playerIdType: Ndi_Type;
  playerPhone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type PlayerDataMaxAggregate = {
  __typename?: 'PlayerDataMaxAggregate';
  birthday?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  playerIdExpeditionPlace?: Maybe<Scalars['String']>;
  playerIdNumber?: Maybe<Scalars['String']>;
  playerIdType?: Maybe<Ndi_Type>;
  playerPhone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlayerDataMaxOrderByAggregateInput = {
  birthday?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  placeOfBirth?: InputMaybe<SortOrder>;
  playerIdExpeditionPlace?: InputMaybe<SortOrder>;
  playerIdNumber?: InputMaybe<SortOrder>;
  playerIdType?: InputMaybe<SortOrder>;
  playerPhone?: InputMaybe<SortOrder>;
};

export type PlayerDataMinAggregate = {
  __typename?: 'PlayerDataMinAggregate';
  birthday?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  playerIdExpeditionPlace?: Maybe<Scalars['String']>;
  playerIdNumber?: Maybe<Scalars['String']>;
  playerIdType?: Maybe<Ndi_Type>;
  playerPhone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlayerDataMinOrderByAggregateInput = {
  birthday?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  placeOfBirth?: InputMaybe<SortOrder>;
  playerIdExpeditionPlace?: InputMaybe<SortOrder>;
  playerIdNumber?: InputMaybe<SortOrder>;
  playerIdType?: InputMaybe<SortOrder>;
  playerPhone?: InputMaybe<SortOrder>;
};

export type PlayerDataOrderByWithAggregationInput = {
  _count?: InputMaybe<PlayerDataCountOrderByAggregateInput>;
  _max?: InputMaybe<PlayerDataMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlayerDataMinOrderByAggregateInput>;
  birthday?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  placeOfBirth?: InputMaybe<SortOrder>;
  playerIdExpeditionPlace?: InputMaybe<SortOrder>;
  playerIdNumber?: InputMaybe<SortOrder>;
  playerIdType?: InputMaybe<SortOrder>;
  playerPhone?: InputMaybe<SortOrder>;
};

export type PlayerDataOrderByWithRelationInput = {
  birthday?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  placeOfBirth?: InputMaybe<SortOrder>;
  playerIdExpeditionPlace?: InputMaybe<SortOrder>;
  playerIdNumber?: InputMaybe<SortOrder>;
  playerIdType?: InputMaybe<SortOrder>;
  playerPhone?: InputMaybe<SortOrder>;
  players?: InputMaybe<PlayerOrderByRelationAggregateInput>;
};

export type PlayerDataRelationFilter = {
  is?: InputMaybe<PlayerDataWhereInput>;
  isNot?: InputMaybe<PlayerDataWhereInput>;
};

export enum PlayerDataScalarFieldEnum {
  Birthday = 'birthday',
  CreatedAt = 'createdAt',
  Gender = 'gender',
  Id = 'id',
  PlaceOfBirth = 'placeOfBirth',
  PlayerIdExpeditionPlace = 'playerIdExpeditionPlace',
  PlayerIdNumber = 'playerIdNumber',
  PlayerIdType = 'playerIdType',
  PlayerPhone = 'playerPhone',
  UpdatedAt = 'updatedAt'
}

export type PlayerDataScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlayerDataScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PlayerDataScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlayerDataScalarWhereWithAggregatesInput>>;
  birthday?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  gender?: InputMaybe<EnumGenderWithAggregatesFilter>;
  placeOfBirth?: InputMaybe<StringNullableWithAggregatesFilter>;
  playerIdExpeditionPlace?: InputMaybe<StringNullableWithAggregatesFilter>;
  playerIdNumber?: InputMaybe<StringWithAggregatesFilter>;
  playerIdType?: InputMaybe<EnumNdi_TypeWithAggregatesFilter>;
  playerPhone?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type PlayerDataUpdateInput = {
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<EnumGenderFieldUpdateOperationsInput>;
  placeOfBirth?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  playerIdExpeditionPlace?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  playerIdNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerIdType?: InputMaybe<EnumNdi_TypeFieldUpdateOperationsInput>;
  playerPhone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutPlayerDataInput>;
};

export type PlayerDataUpdateManyMutationInput = {
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<EnumGenderFieldUpdateOperationsInput>;
  placeOfBirth?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  playerIdExpeditionPlace?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  playerIdNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerIdType?: InputMaybe<EnumNdi_TypeFieldUpdateOperationsInput>;
  playerPhone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PlayerDataUpdateOneRequiredWithoutPlayersInput = {
  connect?: InputMaybe<PlayerDataWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerDataCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<PlayerDataCreateWithoutPlayersInput>;
  update?: InputMaybe<PlayerDataUpdateWithoutPlayersInput>;
  upsert?: InputMaybe<PlayerDataUpsertWithoutPlayersInput>;
};

export type PlayerDataUpdateWithoutPlayersInput = {
  birthday?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  gender?: InputMaybe<EnumGenderFieldUpdateOperationsInput>;
  placeOfBirth?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  playerIdExpeditionPlace?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  playerIdNumber?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerIdType?: InputMaybe<EnumNdi_TypeFieldUpdateOperationsInput>;
  playerPhone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type PlayerDataUpsertWithoutPlayersInput = {
  create: PlayerDataCreateWithoutPlayersInput;
  update: PlayerDataUpdateWithoutPlayersInput;
};

export type PlayerDataWhereInput = {
  AND?: InputMaybe<Array<PlayerDataWhereInput>>;
  NOT?: InputMaybe<Array<PlayerDataWhereInput>>;
  OR?: InputMaybe<Array<PlayerDataWhereInput>>;
  birthday?: InputMaybe<DateTimeNullableFilter>;
  gender?: InputMaybe<EnumGenderFilter>;
  placeOfBirth?: InputMaybe<StringNullableFilter>;
  playerIdExpeditionPlace?: InputMaybe<StringNullableFilter>;
  playerIdNumber?: InputMaybe<StringFilter>;
  playerIdType?: InputMaybe<EnumNdi_TypeFilter>;
  playerPhone?: InputMaybe<StringNullableFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
};

export type PlayerDataWhereUniqueInput = {
  playerIdNumber?: InputMaybe<Scalars['String']>;
};

export type PlayerGroupBy = {
  __typename?: 'PlayerGroupBy';
  _count?: Maybe<PlayerCountAggregate>;
  _max?: Maybe<PlayerMaxAggregate>;
  _min?: Maybe<PlayerMinAggregate>;
  coachId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  name: Scalars['String'];
  playerDataId: Scalars['String'];
  playerEmail: Scalars['String'];
  playerGuardianId?: Maybe<Scalars['String']>;
  playerInjuriesId?: Maybe<Scalars['String']>;
  playerMedicalId?: Maybe<Scalars['String']>;
  playerPaymentStatus: Player_Payment_Status;
  playerPsychologyId?: Maybe<Scalars['String']>;
  playerSportDataId?: Maybe<Scalars['String']>;
  playerStatus: Player_Status;
  playerSurgeryId?: Maybe<Scalars['String']>;
  schoolId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PlayerGuardian = {
  __typename?: 'PlayerGuardian';
  _count?: Maybe<PlayerGuardianCount>;
  familySupport?: Maybe<Family_Support>;
  guardianEmail: Scalars['String'];
  guardianId: Scalars['String'];
  guardianIdExpeditionPlace: Scalars['String'];
  guardianIdType: Ndi_Type;
  guardianLastName: Scalars['String'];
  guardianName: Scalars['String'];
  guardianPhone: Scalars['String'];
  guardianType: Guardian_Type;
  id: Scalars['String'];
  player: Array<Player>;
};


export type PlayerGuardianPlayerArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};

export type PlayerGuardianCount = {
  __typename?: 'PlayerGuardianCount';
  player: Scalars['Int'];
};

export type PlayerGuardianCountAggregate = {
  __typename?: 'PlayerGuardianCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  familySupport: Scalars['Int'];
  guardianEmail: Scalars['Int'];
  guardianId: Scalars['Int'];
  guardianIdExpeditionPlace: Scalars['Int'];
  guardianIdType: Scalars['Int'];
  guardianLastName: Scalars['Int'];
  guardianName: Scalars['Int'];
  guardianPhone: Scalars['Int'];
  guardianType: Scalars['Int'];
  id: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PlayerGuardianCountOrderByAggregateInput = {
  familySupport?: InputMaybe<SortOrder>;
  guardianEmail?: InputMaybe<SortOrder>;
  guardianId?: InputMaybe<SortOrder>;
  guardianIdExpeditionPlace?: InputMaybe<SortOrder>;
  guardianIdType?: InputMaybe<SortOrder>;
  guardianLastName?: InputMaybe<SortOrder>;
  guardianName?: InputMaybe<SortOrder>;
  guardianPhone?: InputMaybe<SortOrder>;
  guardianType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PlayerGuardianCreateInput = {
  familySupport?: InputMaybe<Family_Support>;
  guardianEmail: Scalars['String'];
  guardianId: Scalars['String'];
  guardianIdExpeditionPlace: Scalars['String'];
  guardianIdType: Ndi_Type;
  guardianLastName: Scalars['String'];
  guardianName: Scalars['String'];
  guardianPhone: Scalars['String'];
  guardianType: Guardian_Type;
  id?: InputMaybe<Scalars['String']>;
  player?: InputMaybe<PlayerCreateNestedManyWithoutPlayerGuardianInput>;
};

export type PlayerGuardianCreateManyInput = {
  familySupport?: InputMaybe<Family_Support>;
  guardianEmail: Scalars['String'];
  guardianId: Scalars['String'];
  guardianIdExpeditionPlace: Scalars['String'];
  guardianIdType: Ndi_Type;
  guardianLastName: Scalars['String'];
  guardianName: Scalars['String'];
  guardianPhone: Scalars['String'];
  guardianType: Guardian_Type;
  id?: InputMaybe<Scalars['String']>;
};

export type PlayerGuardianCreateNestedOneWithoutPlayerInput = {
  connect?: InputMaybe<PlayerGuardianWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerGuardianCreateOrConnectWithoutPlayerInput>;
  create?: InputMaybe<PlayerGuardianCreateWithoutPlayerInput>;
};

export type PlayerGuardianCreateOrConnectWithoutPlayerInput = {
  create: PlayerGuardianCreateWithoutPlayerInput;
  where: PlayerGuardianWhereUniqueInput;
};

export type PlayerGuardianCreateWithoutPlayerInput = {
  familySupport?: InputMaybe<Family_Support>;
  guardianEmail: Scalars['String'];
  guardianId: Scalars['String'];
  guardianIdExpeditionPlace: Scalars['String'];
  guardianIdType: Ndi_Type;
  guardianLastName: Scalars['String'];
  guardianName: Scalars['String'];
  guardianPhone: Scalars['String'];
  guardianType: Guardian_Type;
  id?: InputMaybe<Scalars['String']>;
};

export type PlayerGuardianGroupBy = {
  __typename?: 'PlayerGuardianGroupBy';
  _count?: Maybe<PlayerGuardianCountAggregate>;
  _max?: Maybe<PlayerGuardianMaxAggregate>;
  _min?: Maybe<PlayerGuardianMinAggregate>;
  createdAt: Scalars['DateTime'];
  familySupport?: Maybe<Family_Support>;
  guardianEmail: Scalars['String'];
  guardianId: Scalars['String'];
  guardianIdExpeditionPlace: Scalars['String'];
  guardianIdType: Ndi_Type;
  guardianLastName: Scalars['String'];
  guardianName: Scalars['String'];
  guardianPhone: Scalars['String'];
  guardianType: Guardian_Type;
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PlayerGuardianMaxAggregate = {
  __typename?: 'PlayerGuardianMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  familySupport?: Maybe<Family_Support>;
  guardianEmail?: Maybe<Scalars['String']>;
  guardianId?: Maybe<Scalars['String']>;
  guardianIdExpeditionPlace?: Maybe<Scalars['String']>;
  guardianIdType?: Maybe<Ndi_Type>;
  guardianLastName?: Maybe<Scalars['String']>;
  guardianName?: Maybe<Scalars['String']>;
  guardianPhone?: Maybe<Scalars['String']>;
  guardianType?: Maybe<Guardian_Type>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlayerGuardianMaxOrderByAggregateInput = {
  familySupport?: InputMaybe<SortOrder>;
  guardianEmail?: InputMaybe<SortOrder>;
  guardianId?: InputMaybe<SortOrder>;
  guardianIdExpeditionPlace?: InputMaybe<SortOrder>;
  guardianIdType?: InputMaybe<SortOrder>;
  guardianLastName?: InputMaybe<SortOrder>;
  guardianName?: InputMaybe<SortOrder>;
  guardianPhone?: InputMaybe<SortOrder>;
  guardianType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PlayerGuardianMinAggregate = {
  __typename?: 'PlayerGuardianMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  familySupport?: Maybe<Family_Support>;
  guardianEmail?: Maybe<Scalars['String']>;
  guardianId?: Maybe<Scalars['String']>;
  guardianIdExpeditionPlace?: Maybe<Scalars['String']>;
  guardianIdType?: Maybe<Ndi_Type>;
  guardianLastName?: Maybe<Scalars['String']>;
  guardianName?: Maybe<Scalars['String']>;
  guardianPhone?: Maybe<Scalars['String']>;
  guardianType?: Maybe<Guardian_Type>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlayerGuardianMinOrderByAggregateInput = {
  familySupport?: InputMaybe<SortOrder>;
  guardianEmail?: InputMaybe<SortOrder>;
  guardianId?: InputMaybe<SortOrder>;
  guardianIdExpeditionPlace?: InputMaybe<SortOrder>;
  guardianIdType?: InputMaybe<SortOrder>;
  guardianLastName?: InputMaybe<SortOrder>;
  guardianName?: InputMaybe<SortOrder>;
  guardianPhone?: InputMaybe<SortOrder>;
  guardianType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PlayerGuardianOrderByWithAggregationInput = {
  _count?: InputMaybe<PlayerGuardianCountOrderByAggregateInput>;
  _max?: InputMaybe<PlayerGuardianMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlayerGuardianMinOrderByAggregateInput>;
  familySupport?: InputMaybe<SortOrder>;
  guardianEmail?: InputMaybe<SortOrder>;
  guardianId?: InputMaybe<SortOrder>;
  guardianIdExpeditionPlace?: InputMaybe<SortOrder>;
  guardianIdType?: InputMaybe<SortOrder>;
  guardianLastName?: InputMaybe<SortOrder>;
  guardianName?: InputMaybe<SortOrder>;
  guardianPhone?: InputMaybe<SortOrder>;
  guardianType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PlayerGuardianOrderByWithRelationInput = {
  familySupport?: InputMaybe<SortOrder>;
  guardianEmail?: InputMaybe<SortOrder>;
  guardianId?: InputMaybe<SortOrder>;
  guardianIdExpeditionPlace?: InputMaybe<SortOrder>;
  guardianIdType?: InputMaybe<SortOrder>;
  guardianLastName?: InputMaybe<SortOrder>;
  guardianName?: InputMaybe<SortOrder>;
  guardianPhone?: InputMaybe<SortOrder>;
  guardianType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  player?: InputMaybe<PlayerOrderByRelationAggregateInput>;
};

export type PlayerGuardianRelationFilter = {
  is?: InputMaybe<PlayerGuardianWhereInput>;
  isNot?: InputMaybe<PlayerGuardianWhereInput>;
};

export enum PlayerGuardianScalarFieldEnum {
  CreatedAt = 'createdAt',
  FamilySupport = 'familySupport',
  GuardianEmail = 'guardianEmail',
  GuardianId = 'guardianId',
  GuardianIdExpeditionPlace = 'guardianIdExpeditionPlace',
  GuardianIdType = 'guardianIdType',
  GuardianLastName = 'guardianLastName',
  GuardianName = 'guardianName',
  GuardianPhone = 'guardianPhone',
  GuardianType = 'guardianType',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type PlayerGuardianScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlayerGuardianScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PlayerGuardianScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlayerGuardianScalarWhereWithAggregatesInput>>;
  familySupport?: InputMaybe<EnumFamily_SupportNullableWithAggregatesFilter>;
  guardianEmail?: InputMaybe<StringWithAggregatesFilter>;
  guardianId?: InputMaybe<StringWithAggregatesFilter>;
  guardianIdExpeditionPlace?: InputMaybe<StringWithAggregatesFilter>;
  guardianIdType?: InputMaybe<EnumNdi_TypeWithAggregatesFilter>;
  guardianLastName?: InputMaybe<StringWithAggregatesFilter>;
  guardianName?: InputMaybe<StringWithAggregatesFilter>;
  guardianPhone?: InputMaybe<StringWithAggregatesFilter>;
  guardianType?: InputMaybe<EnumGuardian_TypeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
};

export type PlayerGuardianUpdateInput = {
  familySupport?: InputMaybe<NullableEnumFamily_SupportFieldUpdateOperationsInput>;
  guardianEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianId?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianIdExpeditionPlace?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianIdType?: InputMaybe<EnumNdi_TypeFieldUpdateOperationsInput>;
  guardianLastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianName?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianPhone?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianType?: InputMaybe<EnumGuardian_TypeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  player?: InputMaybe<PlayerUpdateManyWithoutPlayerGuardianInput>;
};

export type PlayerGuardianUpdateManyMutationInput = {
  familySupport?: InputMaybe<NullableEnumFamily_SupportFieldUpdateOperationsInput>;
  guardianEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianId?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianIdExpeditionPlace?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianIdType?: InputMaybe<EnumNdi_TypeFieldUpdateOperationsInput>;
  guardianLastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianName?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianPhone?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianType?: InputMaybe<EnumGuardian_TypeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PlayerGuardianUpdateOneWithoutPlayerInput = {
  connect?: InputMaybe<PlayerGuardianWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerGuardianCreateOrConnectWithoutPlayerInput>;
  create?: InputMaybe<PlayerGuardianCreateWithoutPlayerInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PlayerGuardianUpdateWithoutPlayerInput>;
  upsert?: InputMaybe<PlayerGuardianUpsertWithoutPlayerInput>;
};

export type PlayerGuardianUpdateWithoutPlayerInput = {
  familySupport?: InputMaybe<NullableEnumFamily_SupportFieldUpdateOperationsInput>;
  guardianEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianId?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianIdExpeditionPlace?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianIdType?: InputMaybe<EnumNdi_TypeFieldUpdateOperationsInput>;
  guardianLastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianName?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianPhone?: InputMaybe<StringFieldUpdateOperationsInput>;
  guardianType?: InputMaybe<EnumGuardian_TypeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PlayerGuardianUpsertWithoutPlayerInput = {
  create: PlayerGuardianCreateWithoutPlayerInput;
  update: PlayerGuardianUpdateWithoutPlayerInput;
};

export type PlayerGuardianWhereInput = {
  AND?: InputMaybe<Array<PlayerGuardianWhereInput>>;
  NOT?: InputMaybe<Array<PlayerGuardianWhereInput>>;
  OR?: InputMaybe<Array<PlayerGuardianWhereInput>>;
  familySupport?: InputMaybe<EnumFamily_SupportNullableFilter>;
  guardianEmail?: InputMaybe<StringFilter>;
  guardianId?: InputMaybe<StringFilter>;
  guardianIdExpeditionPlace?: InputMaybe<StringFilter>;
  guardianIdType?: InputMaybe<EnumNdi_TypeFilter>;
  guardianLastName?: InputMaybe<StringFilter>;
  guardianName?: InputMaybe<StringFilter>;
  guardianPhone?: InputMaybe<StringFilter>;
  guardianType?: InputMaybe<EnumGuardian_TypeFilter>;
  id?: InputMaybe<StringFilter>;
  player?: InputMaybe<PlayerListRelationFilter>;
};

export type PlayerGuardianWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type PlayerInjuries = {
  __typename?: 'PlayerInjuries';
  _count?: Maybe<PlayerInjuriesCount>;
  id: Scalars['String'];
  name: Scalars['String'];
  observations: Scalars['String'];
  occurrenceDate: Scalars['DateTime'];
  players: Array<Player>;
};


export type PlayerInjuriesPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};

export type PlayerInjuriesCount = {
  __typename?: 'PlayerInjuriesCount';
  players: Scalars['Int'];
};

export type PlayerInjuriesCountAggregate = {
  __typename?: 'PlayerInjuriesCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  observations: Scalars['Int'];
  occurrenceDate: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PlayerInjuriesCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  occurrenceDate?: InputMaybe<SortOrder>;
};

export type PlayerInjuriesCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  observations: Scalars['String'];
  occurrenceDate: Scalars['DateTime'];
  players?: InputMaybe<PlayerCreateNestedManyWithoutPlayerInjuriesInput>;
};

export type PlayerInjuriesCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  observations: Scalars['String'];
  occurrenceDate: Scalars['DateTime'];
};

export type PlayerInjuriesCreateNestedOneWithoutPlayersInput = {
  connect?: InputMaybe<PlayerInjuriesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerInjuriesCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<PlayerInjuriesCreateWithoutPlayersInput>;
};

export type PlayerInjuriesCreateOrConnectWithoutPlayersInput = {
  create: PlayerInjuriesCreateWithoutPlayersInput;
  where: PlayerInjuriesWhereUniqueInput;
};

export type PlayerInjuriesCreateWithoutPlayersInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  observations: Scalars['String'];
  occurrenceDate: Scalars['DateTime'];
};

export type PlayerInjuriesGroupBy = {
  __typename?: 'PlayerInjuriesGroupBy';
  _count?: Maybe<PlayerInjuriesCountAggregate>;
  _max?: Maybe<PlayerInjuriesMaxAggregate>;
  _min?: Maybe<PlayerInjuriesMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  observations: Scalars['String'];
  occurrenceDate: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type PlayerInjuriesMaxAggregate = {
  __typename?: 'PlayerInjuriesMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  observations?: Maybe<Scalars['String']>;
  occurrenceDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlayerInjuriesMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  occurrenceDate?: InputMaybe<SortOrder>;
};

export type PlayerInjuriesMinAggregate = {
  __typename?: 'PlayerInjuriesMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  observations?: Maybe<Scalars['String']>;
  occurrenceDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlayerInjuriesMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  occurrenceDate?: InputMaybe<SortOrder>;
};

export type PlayerInjuriesOrderByWithAggregationInput = {
  _count?: InputMaybe<PlayerInjuriesCountOrderByAggregateInput>;
  _max?: InputMaybe<PlayerInjuriesMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlayerInjuriesMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  occurrenceDate?: InputMaybe<SortOrder>;
};

export type PlayerInjuriesOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  occurrenceDate?: InputMaybe<SortOrder>;
  players?: InputMaybe<PlayerOrderByRelationAggregateInput>;
};

export type PlayerInjuriesRelationFilter = {
  is?: InputMaybe<PlayerInjuriesWhereInput>;
  isNot?: InputMaybe<PlayerInjuriesWhereInput>;
};

export enum PlayerInjuriesScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Observations = 'observations',
  OccurrenceDate = 'occurrenceDate',
  UpdatedAt = 'updatedAt'
}

export type PlayerInjuriesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlayerInjuriesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PlayerInjuriesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlayerInjuriesScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  observations?: InputMaybe<StringWithAggregatesFilter>;
  occurrenceDate?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type PlayerInjuriesUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  observations?: InputMaybe<StringFieldUpdateOperationsInput>;
  occurrenceDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutPlayerInjuriesInput>;
};

export type PlayerInjuriesUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  observations?: InputMaybe<StringFieldUpdateOperationsInput>;
  occurrenceDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PlayerInjuriesUpdateOneWithoutPlayersInput = {
  connect?: InputMaybe<PlayerInjuriesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerInjuriesCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<PlayerInjuriesCreateWithoutPlayersInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PlayerInjuriesUpdateWithoutPlayersInput>;
  upsert?: InputMaybe<PlayerInjuriesUpsertWithoutPlayersInput>;
};

export type PlayerInjuriesUpdateWithoutPlayersInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  observations?: InputMaybe<StringFieldUpdateOperationsInput>;
  occurrenceDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PlayerInjuriesUpsertWithoutPlayersInput = {
  create: PlayerInjuriesCreateWithoutPlayersInput;
  update: PlayerInjuriesUpdateWithoutPlayersInput;
};

export type PlayerInjuriesWhereInput = {
  AND?: InputMaybe<Array<PlayerInjuriesWhereInput>>;
  NOT?: InputMaybe<Array<PlayerInjuriesWhereInput>>;
  OR?: InputMaybe<Array<PlayerInjuriesWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  observations?: InputMaybe<StringFilter>;
  occurrenceDate?: InputMaybe<DateTimeFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
};

export type PlayerInjuriesWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type PlayerListRelationFilter = {
  every?: InputMaybe<PlayerWhereInput>;
  none?: InputMaybe<PlayerWhereInput>;
  some?: InputMaybe<PlayerWhereInput>;
};

export type PlayerMaxAggregate = {
  __typename?: 'PlayerMaxAggregate';
  coachId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  playerDataId?: Maybe<Scalars['String']>;
  playerEmail?: Maybe<Scalars['String']>;
  playerGuardianId?: Maybe<Scalars['String']>;
  playerInjuriesId?: Maybe<Scalars['String']>;
  playerMedicalId?: Maybe<Scalars['String']>;
  playerPaymentStatus?: Maybe<Player_Payment_Status>;
  playerPsychologyId?: Maybe<Scalars['String']>;
  playerSportDataId?: Maybe<Scalars['String']>;
  playerStatus?: Maybe<Player_Status>;
  playerSurgeryId?: Maybe<Scalars['String']>;
  schoolId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlayerMaxOrderByAggregateInput = {
  coachId?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  playerDataId?: InputMaybe<SortOrder>;
  playerEmail?: InputMaybe<SortOrder>;
  playerGuardianId?: InputMaybe<SortOrder>;
  playerInjuriesId?: InputMaybe<SortOrder>;
  playerMedicalId?: InputMaybe<SortOrder>;
  playerPaymentStatus?: InputMaybe<SortOrder>;
  playerPsychologyId?: InputMaybe<SortOrder>;
  playerSportDataId?: InputMaybe<SortOrder>;
  playerStatus?: InputMaybe<SortOrder>;
  playerSurgeryId?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
};

export type PlayerMedical = {
  __typename?: 'PlayerMedical';
  IMC: Scalars['String'];
  _count?: Maybe<PlayerMedicalCount>;
  alergies: Array<Scalars['String']>;
  bloodType: Scalars['String'];
  diseases: Array<Scalars['String']>;
  healthProvider: Scalars['String'];
  height: Scalars['String'];
  id: Scalars['String'];
  observations?: Maybe<Scalars['String']>;
  players: Array<Player>;
  weight: Scalars['String'];
};


export type PlayerMedicalPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};

export type PlayerMedicalCount = {
  __typename?: 'PlayerMedicalCount';
  players: Scalars['Int'];
};

export type PlayerMedicalCountAggregate = {
  __typename?: 'PlayerMedicalCountAggregate';
  IMC: Scalars['Int'];
  _all: Scalars['Int'];
  alergies: Scalars['Int'];
  bloodType: Scalars['Int'];
  createdAt: Scalars['Int'];
  diseases: Scalars['Int'];
  healthProvider: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['Int'];
  observations: Scalars['Int'];
  updatedAt: Scalars['Int'];
  weight: Scalars['Int'];
};

export type PlayerMedicalCountOrderByAggregateInput = {
  IMC?: InputMaybe<SortOrder>;
  alergies?: InputMaybe<SortOrder>;
  bloodType?: InputMaybe<SortOrder>;
  diseases?: InputMaybe<SortOrder>;
  healthProvider?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export type PlayerMedicalCreateInput = {
  IMC: Scalars['String'];
  alergies?: InputMaybe<PlayerMedicalCreatealergiesInput>;
  bloodType: Scalars['String'];
  diseases?: InputMaybe<PlayerMedicalCreatediseasesInput>;
  healthProvider: Scalars['String'];
  height: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  observations?: InputMaybe<Scalars['String']>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutPlayerMedicalInput>;
  weight: Scalars['String'];
};

export type PlayerMedicalCreateManyInput = {
  IMC: Scalars['String'];
  alergies?: InputMaybe<PlayerMedicalCreatealergiesInput>;
  bloodType: Scalars['String'];
  diseases?: InputMaybe<PlayerMedicalCreatediseasesInput>;
  healthProvider: Scalars['String'];
  height: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  observations?: InputMaybe<Scalars['String']>;
  weight: Scalars['String'];
};

export type PlayerMedicalCreateNestedOneWithoutPlayersInput = {
  connect?: InputMaybe<PlayerMedicalWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerMedicalCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<PlayerMedicalCreateWithoutPlayersInput>;
};

export type PlayerMedicalCreateOrConnectWithoutPlayersInput = {
  create: PlayerMedicalCreateWithoutPlayersInput;
  where: PlayerMedicalWhereUniqueInput;
};

export type PlayerMedicalCreateWithoutPlayersInput = {
  IMC: Scalars['String'];
  alergies?: InputMaybe<PlayerMedicalCreatealergiesInput>;
  bloodType: Scalars['String'];
  diseases?: InputMaybe<PlayerMedicalCreatediseasesInput>;
  healthProvider: Scalars['String'];
  height: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  observations?: InputMaybe<Scalars['String']>;
  weight: Scalars['String'];
};

export type PlayerMedicalCreatealergiesInput = {
  set: Array<Scalars['String']>;
};

export type PlayerMedicalCreatediseasesInput = {
  set: Array<Scalars['String']>;
};

export type PlayerMedicalGroupBy = {
  __typename?: 'PlayerMedicalGroupBy';
  IMC: Scalars['String'];
  _count?: Maybe<PlayerMedicalCountAggregate>;
  _max?: Maybe<PlayerMedicalMaxAggregate>;
  _min?: Maybe<PlayerMedicalMinAggregate>;
  alergies?: Maybe<Array<Scalars['String']>>;
  bloodType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  diseases?: Maybe<Array<Scalars['String']>>;
  healthProvider: Scalars['String'];
  height: Scalars['String'];
  id: Scalars['String'];
  observations?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  weight: Scalars['String'];
};

export type PlayerMedicalMaxAggregate = {
  __typename?: 'PlayerMedicalMaxAggregate';
  IMC?: Maybe<Scalars['String']>;
  bloodType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  healthProvider?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  observations?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['String']>;
};

export type PlayerMedicalMaxOrderByAggregateInput = {
  IMC?: InputMaybe<SortOrder>;
  bloodType?: InputMaybe<SortOrder>;
  healthProvider?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export type PlayerMedicalMinAggregate = {
  __typename?: 'PlayerMedicalMinAggregate';
  IMC?: Maybe<Scalars['String']>;
  bloodType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  healthProvider?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  observations?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['String']>;
};

export type PlayerMedicalMinOrderByAggregateInput = {
  IMC?: InputMaybe<SortOrder>;
  bloodType?: InputMaybe<SortOrder>;
  healthProvider?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export type PlayerMedicalOrderByWithAggregationInput = {
  IMC?: InputMaybe<SortOrder>;
  _count?: InputMaybe<PlayerMedicalCountOrderByAggregateInput>;
  _max?: InputMaybe<PlayerMedicalMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlayerMedicalMinOrderByAggregateInput>;
  alergies?: InputMaybe<SortOrder>;
  bloodType?: InputMaybe<SortOrder>;
  diseases?: InputMaybe<SortOrder>;
  healthProvider?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export type PlayerMedicalOrderByWithRelationInput = {
  IMC?: InputMaybe<SortOrder>;
  alergies?: InputMaybe<SortOrder>;
  bloodType?: InputMaybe<SortOrder>;
  diseases?: InputMaybe<SortOrder>;
  healthProvider?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  players?: InputMaybe<PlayerOrderByRelationAggregateInput>;
  weight?: InputMaybe<SortOrder>;
};

export type PlayerMedicalRelationFilter = {
  is?: InputMaybe<PlayerMedicalWhereInput>;
  isNot?: InputMaybe<PlayerMedicalWhereInput>;
};

export enum PlayerMedicalScalarFieldEnum {
  Imc = 'IMC',
  Alergies = 'alergies',
  BloodType = 'bloodType',
  CreatedAt = 'createdAt',
  Diseases = 'diseases',
  HealthProvider = 'healthProvider',
  Height = 'height',
  Id = 'id',
  Observations = 'observations',
  UpdatedAt = 'updatedAt',
  Weight = 'weight'
}

export type PlayerMedicalScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlayerMedicalScalarWhereWithAggregatesInput>>;
  IMC?: InputMaybe<StringWithAggregatesFilter>;
  NOT?: InputMaybe<Array<PlayerMedicalScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlayerMedicalScalarWhereWithAggregatesInput>>;
  alergies?: InputMaybe<StringNullableListFilter>;
  bloodType?: InputMaybe<StringWithAggregatesFilter>;
  diseases?: InputMaybe<StringNullableListFilter>;
  healthProvider?: InputMaybe<StringWithAggregatesFilter>;
  height?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  observations?: InputMaybe<StringNullableWithAggregatesFilter>;
  weight?: InputMaybe<StringWithAggregatesFilter>;
};

export type PlayerMedicalUpdateInput = {
  IMC?: InputMaybe<StringFieldUpdateOperationsInput>;
  alergies?: InputMaybe<PlayerMedicalUpdatealergiesInput>;
  bloodType?: InputMaybe<StringFieldUpdateOperationsInput>;
  diseases?: InputMaybe<PlayerMedicalUpdatediseasesInput>;
  healthProvider?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  observations?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutPlayerMedicalInput>;
  weight?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PlayerMedicalUpdateManyMutationInput = {
  IMC?: InputMaybe<StringFieldUpdateOperationsInput>;
  alergies?: InputMaybe<PlayerMedicalUpdatealergiesInput>;
  bloodType?: InputMaybe<StringFieldUpdateOperationsInput>;
  diseases?: InputMaybe<PlayerMedicalUpdatediseasesInput>;
  healthProvider?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  observations?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  weight?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PlayerMedicalUpdateOneWithoutPlayersInput = {
  connect?: InputMaybe<PlayerMedicalWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerMedicalCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<PlayerMedicalCreateWithoutPlayersInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PlayerMedicalUpdateWithoutPlayersInput>;
  upsert?: InputMaybe<PlayerMedicalUpsertWithoutPlayersInput>;
};

export type PlayerMedicalUpdateWithoutPlayersInput = {
  IMC?: InputMaybe<StringFieldUpdateOperationsInput>;
  alergies?: InputMaybe<PlayerMedicalUpdatealergiesInput>;
  bloodType?: InputMaybe<StringFieldUpdateOperationsInput>;
  diseases?: InputMaybe<PlayerMedicalUpdatediseasesInput>;
  healthProvider?: InputMaybe<StringFieldUpdateOperationsInput>;
  height?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  observations?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  weight?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PlayerMedicalUpdatealergiesInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type PlayerMedicalUpdatediseasesInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type PlayerMedicalUpsertWithoutPlayersInput = {
  create: PlayerMedicalCreateWithoutPlayersInput;
  update: PlayerMedicalUpdateWithoutPlayersInput;
};

export type PlayerMedicalWhereInput = {
  AND?: InputMaybe<Array<PlayerMedicalWhereInput>>;
  IMC?: InputMaybe<StringFilter>;
  NOT?: InputMaybe<Array<PlayerMedicalWhereInput>>;
  OR?: InputMaybe<Array<PlayerMedicalWhereInput>>;
  alergies?: InputMaybe<StringNullableListFilter>;
  bloodType?: InputMaybe<StringFilter>;
  diseases?: InputMaybe<StringNullableListFilter>;
  healthProvider?: InputMaybe<StringFilter>;
  height?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  observations?: InputMaybe<StringNullableFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
  weight?: InputMaybe<StringFilter>;
};

export type PlayerMedicalWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type PlayerMinAggregate = {
  __typename?: 'PlayerMinAggregate';
  coachId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  playerDataId?: Maybe<Scalars['String']>;
  playerEmail?: Maybe<Scalars['String']>;
  playerGuardianId?: Maybe<Scalars['String']>;
  playerInjuriesId?: Maybe<Scalars['String']>;
  playerMedicalId?: Maybe<Scalars['String']>;
  playerPaymentStatus?: Maybe<Player_Payment_Status>;
  playerPsychologyId?: Maybe<Scalars['String']>;
  playerSportDataId?: Maybe<Scalars['String']>;
  playerStatus?: Maybe<Player_Status>;
  playerSurgeryId?: Maybe<Scalars['String']>;
  schoolId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlayerMinOrderByAggregateInput = {
  coachId?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  playerDataId?: InputMaybe<SortOrder>;
  playerEmail?: InputMaybe<SortOrder>;
  playerGuardianId?: InputMaybe<SortOrder>;
  playerInjuriesId?: InputMaybe<SortOrder>;
  playerMedicalId?: InputMaybe<SortOrder>;
  playerPaymentStatus?: InputMaybe<SortOrder>;
  playerPsychologyId?: InputMaybe<SortOrder>;
  playerSportDataId?: InputMaybe<SortOrder>;
  playerStatus?: InputMaybe<SortOrder>;
  playerSurgeryId?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
};

export type PlayerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PlayerOrderByWithAggregationInput = {
  _count?: InputMaybe<PlayerCountOrderByAggregateInput>;
  _max?: InputMaybe<PlayerMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlayerMinOrderByAggregateInput>;
  coachId?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  playerDataId?: InputMaybe<SortOrder>;
  playerEmail?: InputMaybe<SortOrder>;
  playerGuardianId?: InputMaybe<SortOrder>;
  playerInjuriesId?: InputMaybe<SortOrder>;
  playerMedicalId?: InputMaybe<SortOrder>;
  playerPaymentStatus?: InputMaybe<SortOrder>;
  playerPsychologyId?: InputMaybe<SortOrder>;
  playerSportDataId?: InputMaybe<SortOrder>;
  playerStatus?: InputMaybe<SortOrder>;
  playerSurgeryId?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
};

export type PlayerOrderByWithRelationInput = {
  coachId?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  playerAttendances?: InputMaybe<PlayerAttendanceOrderByRelationAggregateInput>;
  playerData?: InputMaybe<PlayerDataOrderByWithRelationInput>;
  playerDataId?: InputMaybe<SortOrder>;
  playerEmail?: InputMaybe<SortOrder>;
  playerGuardian?: InputMaybe<PlayerGuardianOrderByWithRelationInput>;
  playerGuardianId?: InputMaybe<SortOrder>;
  playerInjuries?: InputMaybe<PlayerInjuriesOrderByWithRelationInput>;
  playerInjuriesId?: InputMaybe<SortOrder>;
  playerMedical?: InputMaybe<PlayerMedicalOrderByWithRelationInput>;
  playerMedicalId?: InputMaybe<SortOrder>;
  playerPaymentStatus?: InputMaybe<SortOrder>;
  playerPsychology?: InputMaybe<PlayerPsychologyOrderByWithRelationInput>;
  playerPsychologyId?: InputMaybe<SortOrder>;
  playerSportData?: InputMaybe<PlayerSportDataOrderByWithRelationInput>;
  playerSportDataId?: InputMaybe<SortOrder>;
  playerStatus?: InputMaybe<SortOrder>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesOrderByWithRelationInput>;
  playerSurgeryId?: InputMaybe<SortOrder>;
  school?: InputMaybe<SchoolOrderByWithRelationInput>;
  schoolId?: InputMaybe<SortOrder>;
};

export type PlayerPsychology = {
  __typename?: 'PlayerPsychology';
  _count?: Maybe<PlayerPsychologyCount>;
  hobbies: Array<Scalars['String']>;
  id: Scalars['String'];
  personalQualities: Array<Personal_Qualities>;
  physicalCapabilities: Array<Physical_Capabilities>;
  physicalQualities: Array<Physical_Qualities>;
  players: Array<Player>;
};


export type PlayerPsychologyPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};

export type PlayerPsychologyCount = {
  __typename?: 'PlayerPsychologyCount';
  players: Scalars['Int'];
};

export type PlayerPsychologyCountAggregate = {
  __typename?: 'PlayerPsychologyCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  hobbies: Scalars['Int'];
  id: Scalars['Int'];
  personalQualities: Scalars['Int'];
  physicalCapabilities: Scalars['Int'];
  physicalQualities: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PlayerPsychologyCountOrderByAggregateInput = {
  hobbies?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  personalQualities?: InputMaybe<SortOrder>;
  physicalCapabilities?: InputMaybe<SortOrder>;
  physicalQualities?: InputMaybe<SortOrder>;
};

export type PlayerPsychologyCreateInput = {
  hobbies?: InputMaybe<PlayerPsychologyCreatehobbiesInput>;
  id?: InputMaybe<Scalars['String']>;
  personalQualities?: InputMaybe<PlayerPsychologyCreatepersonalQualitiesInput>;
  physicalCapabilities?: InputMaybe<PlayerPsychologyCreatephysicalCapabilitiesInput>;
  physicalQualities?: InputMaybe<PlayerPsychologyCreatephysicalQualitiesInput>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutPlayerPsychologyInput>;
};

export type PlayerPsychologyCreateManyInput = {
  hobbies?: InputMaybe<PlayerPsychologyCreatehobbiesInput>;
  id?: InputMaybe<Scalars['String']>;
  personalQualities?: InputMaybe<PlayerPsychologyCreatepersonalQualitiesInput>;
  physicalCapabilities?: InputMaybe<PlayerPsychologyCreatephysicalCapabilitiesInput>;
  physicalQualities?: InputMaybe<PlayerPsychologyCreatephysicalQualitiesInput>;
};

export type PlayerPsychologyCreateNestedOneWithoutPlayersInput = {
  connect?: InputMaybe<PlayerPsychologyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerPsychologyCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<PlayerPsychologyCreateWithoutPlayersInput>;
};

export type PlayerPsychologyCreateOrConnectWithoutPlayersInput = {
  create: PlayerPsychologyCreateWithoutPlayersInput;
  where: PlayerPsychologyWhereUniqueInput;
};

export type PlayerPsychologyCreateWithoutPlayersInput = {
  hobbies?: InputMaybe<PlayerPsychologyCreatehobbiesInput>;
  id?: InputMaybe<Scalars['String']>;
  personalQualities?: InputMaybe<PlayerPsychologyCreatepersonalQualitiesInput>;
  physicalCapabilities?: InputMaybe<PlayerPsychologyCreatephysicalCapabilitiesInput>;
  physicalQualities?: InputMaybe<PlayerPsychologyCreatephysicalQualitiesInput>;
};

export type PlayerPsychologyCreatehobbiesInput = {
  set: Array<Scalars['String']>;
};

export type PlayerPsychologyCreatepersonalQualitiesInput = {
  set: Array<Personal_Qualities>;
};

export type PlayerPsychologyCreatephysicalCapabilitiesInput = {
  set: Array<Physical_Capabilities>;
};

export type PlayerPsychologyCreatephysicalQualitiesInput = {
  set: Array<Physical_Qualities>;
};

export type PlayerPsychologyGroupBy = {
  __typename?: 'PlayerPsychologyGroupBy';
  _count?: Maybe<PlayerPsychologyCountAggregate>;
  _max?: Maybe<PlayerPsychologyMaxAggregate>;
  _min?: Maybe<PlayerPsychologyMinAggregate>;
  createdAt: Scalars['DateTime'];
  hobbies?: Maybe<Array<Scalars['String']>>;
  id: Scalars['String'];
  personalQualities?: Maybe<Array<Personal_Qualities>>;
  physicalCapabilities?: Maybe<Array<Physical_Capabilities>>;
  physicalQualities?: Maybe<Array<Physical_Qualities>>;
  updatedAt: Scalars['DateTime'];
};

export type PlayerPsychologyMaxAggregate = {
  __typename?: 'PlayerPsychologyMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlayerPsychologyMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PlayerPsychologyMinAggregate = {
  __typename?: 'PlayerPsychologyMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlayerPsychologyMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type PlayerPsychologyOrderByWithAggregationInput = {
  _count?: InputMaybe<PlayerPsychologyCountOrderByAggregateInput>;
  _max?: InputMaybe<PlayerPsychologyMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlayerPsychologyMinOrderByAggregateInput>;
  hobbies?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  personalQualities?: InputMaybe<SortOrder>;
  physicalCapabilities?: InputMaybe<SortOrder>;
  physicalQualities?: InputMaybe<SortOrder>;
};

export type PlayerPsychologyOrderByWithRelationInput = {
  hobbies?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  personalQualities?: InputMaybe<SortOrder>;
  physicalCapabilities?: InputMaybe<SortOrder>;
  physicalQualities?: InputMaybe<SortOrder>;
  players?: InputMaybe<PlayerOrderByRelationAggregateInput>;
};

export type PlayerPsychologyRelationFilter = {
  is?: InputMaybe<PlayerPsychologyWhereInput>;
  isNot?: InputMaybe<PlayerPsychologyWhereInput>;
};

export enum PlayerPsychologyScalarFieldEnum {
  CreatedAt = 'createdAt',
  Hobbies = 'hobbies',
  Id = 'id',
  PersonalQualities = 'personalQualities',
  PhysicalCapabilities = 'physicalCapabilities',
  PhysicalQualities = 'physicalQualities',
  UpdatedAt = 'updatedAt'
}

export type PlayerPsychologyScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlayerPsychologyScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PlayerPsychologyScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlayerPsychologyScalarWhereWithAggregatesInput>>;
  hobbies?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  personalQualities?: InputMaybe<EnumPersonal_QualitiesNullableListFilter>;
  physicalCapabilities?: InputMaybe<EnumPhysical_CapabilitiesNullableListFilter>;
  physicalQualities?: InputMaybe<EnumPhysical_QualitiesNullableListFilter>;
};

export type PlayerPsychologyUpdateInput = {
  hobbies?: InputMaybe<PlayerPsychologyUpdatehobbiesInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  personalQualities?: InputMaybe<PlayerPsychologyUpdatepersonalQualitiesInput>;
  physicalCapabilities?: InputMaybe<PlayerPsychologyUpdatephysicalCapabilitiesInput>;
  physicalQualities?: InputMaybe<PlayerPsychologyUpdatephysicalQualitiesInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutPlayerPsychologyInput>;
};

export type PlayerPsychologyUpdateManyMutationInput = {
  hobbies?: InputMaybe<PlayerPsychologyUpdatehobbiesInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  personalQualities?: InputMaybe<PlayerPsychologyUpdatepersonalQualitiesInput>;
  physicalCapabilities?: InputMaybe<PlayerPsychologyUpdatephysicalCapabilitiesInput>;
  physicalQualities?: InputMaybe<PlayerPsychologyUpdatephysicalQualitiesInput>;
};

export type PlayerPsychologyUpdateOneWithoutPlayersInput = {
  connect?: InputMaybe<PlayerPsychologyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerPsychologyCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<PlayerPsychologyCreateWithoutPlayersInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PlayerPsychologyUpdateWithoutPlayersInput>;
  upsert?: InputMaybe<PlayerPsychologyUpsertWithoutPlayersInput>;
};

export type PlayerPsychologyUpdateWithoutPlayersInput = {
  hobbies?: InputMaybe<PlayerPsychologyUpdatehobbiesInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  personalQualities?: InputMaybe<PlayerPsychologyUpdatepersonalQualitiesInput>;
  physicalCapabilities?: InputMaybe<PlayerPsychologyUpdatephysicalCapabilitiesInput>;
  physicalQualities?: InputMaybe<PlayerPsychologyUpdatephysicalQualitiesInput>;
};

export type PlayerPsychologyUpdatehobbiesInput = {
  push?: InputMaybe<Array<Scalars['String']>>;
  set?: InputMaybe<Array<Scalars['String']>>;
};

export type PlayerPsychologyUpdatepersonalQualitiesInput = {
  push?: InputMaybe<Array<Personal_Qualities>>;
  set?: InputMaybe<Array<Personal_Qualities>>;
};

export type PlayerPsychologyUpdatephysicalCapabilitiesInput = {
  push?: InputMaybe<Array<Physical_Capabilities>>;
  set?: InputMaybe<Array<Physical_Capabilities>>;
};

export type PlayerPsychologyUpdatephysicalQualitiesInput = {
  push?: InputMaybe<Array<Physical_Qualities>>;
  set?: InputMaybe<Array<Physical_Qualities>>;
};

export type PlayerPsychologyUpsertWithoutPlayersInput = {
  create: PlayerPsychologyCreateWithoutPlayersInput;
  update: PlayerPsychologyUpdateWithoutPlayersInput;
};

export type PlayerPsychologyWhereInput = {
  AND?: InputMaybe<Array<PlayerPsychologyWhereInput>>;
  NOT?: InputMaybe<Array<PlayerPsychologyWhereInput>>;
  OR?: InputMaybe<Array<PlayerPsychologyWhereInput>>;
  hobbies?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringFilter>;
  personalQualities?: InputMaybe<EnumPersonal_QualitiesNullableListFilter>;
  physicalCapabilities?: InputMaybe<EnumPhysical_CapabilitiesNullableListFilter>;
  physicalQualities?: InputMaybe<EnumPhysical_QualitiesNullableListFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
};

export type PlayerPsychologyWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type PlayerRelationFilter = {
  is?: InputMaybe<PlayerWhereInput>;
  isNot?: InputMaybe<PlayerWhereInput>;
};

export enum PlayerScalarFieldEnum {
  CoachId = 'coachId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Image = 'image',
  LastName = 'lastName',
  Name = 'name',
  PlayerDataId = 'playerDataId',
  PlayerEmail = 'playerEmail',
  PlayerGuardianId = 'playerGuardianId',
  PlayerInjuriesId = 'playerInjuriesId',
  PlayerMedicalId = 'playerMedicalId',
  PlayerPaymentStatus = 'playerPaymentStatus',
  PlayerPsychologyId = 'playerPsychologyId',
  PlayerSportDataId = 'playerSportDataId',
  PlayerStatus = 'playerStatus',
  PlayerSurgeryId = 'playerSurgeryId',
  SchoolId = 'schoolId',
  UpdatedAt = 'updatedAt'
}

export type PlayerScalarWhereInput = {
  AND?: InputMaybe<Array<PlayerScalarWhereInput>>;
  NOT?: InputMaybe<Array<PlayerScalarWhereInput>>;
  OR?: InputMaybe<Array<PlayerScalarWhereInput>>;
  coachId?: InputMaybe<StringNullableFilter>;
  image?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  playerDataId?: InputMaybe<StringFilter>;
  playerEmail?: InputMaybe<StringFilter>;
  playerGuardianId?: InputMaybe<StringNullableFilter>;
  playerInjuriesId?: InputMaybe<StringNullableFilter>;
  playerMedicalId?: InputMaybe<StringNullableFilter>;
  playerPaymentStatus?: InputMaybe<EnumPlayer_Payment_StatusFilter>;
  playerPsychologyId?: InputMaybe<StringNullableFilter>;
  playerSportDataId?: InputMaybe<StringNullableFilter>;
  playerStatus?: InputMaybe<EnumPlayer_StatusFilter>;
  playerSurgeryId?: InputMaybe<StringNullableFilter>;
  schoolId?: InputMaybe<StringFilter>;
};

export type PlayerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlayerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PlayerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlayerScalarWhereWithAggregatesInput>>;
  coachId?: InputMaybe<StringNullableWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  playerDataId?: InputMaybe<StringWithAggregatesFilter>;
  playerEmail?: InputMaybe<StringWithAggregatesFilter>;
  playerGuardianId?: InputMaybe<StringNullableWithAggregatesFilter>;
  playerInjuriesId?: InputMaybe<StringNullableWithAggregatesFilter>;
  playerMedicalId?: InputMaybe<StringNullableWithAggregatesFilter>;
  playerPaymentStatus?: InputMaybe<EnumPlayer_Payment_StatusWithAggregatesFilter>;
  playerPsychologyId?: InputMaybe<StringNullableWithAggregatesFilter>;
  playerSportDataId?: InputMaybe<StringNullableWithAggregatesFilter>;
  playerStatus?: InputMaybe<EnumPlayer_StatusWithAggregatesFilter>;
  playerSurgeryId?: InputMaybe<StringNullableWithAggregatesFilter>;
  schoolId?: InputMaybe<StringWithAggregatesFilter>;
};

export type PlayerSportData = {
  __typename?: 'PlayerSportData';
  _count?: Maybe<PlayerSportDataCount>;
  admissionDate: Scalars['DateTime'];
  category?: Maybe<Player_Category>;
  fieldPosition?: Maybe<Field_Position>;
  handedness: Handedness;
  id: Scalars['String'];
  observations?: Maybe<Scalars['String']>;
  players: Array<Player>;
  previousSchool?: Maybe<Scalars['String']>;
  shirtNumber?: Maybe<Scalars['String']>;
  sport: Array<Sports>;
};


export type PlayerSportDataPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};

export type PlayerSportDataCount = {
  __typename?: 'PlayerSportDataCount';
  players: Scalars['Int'];
};

export type PlayerSportDataCountAggregate = {
  __typename?: 'PlayerSportDataCountAggregate';
  _all: Scalars['Int'];
  admissionDate: Scalars['Int'];
  category: Scalars['Int'];
  createdAt: Scalars['Int'];
  fieldPosition: Scalars['Int'];
  handedness: Scalars['Int'];
  id: Scalars['Int'];
  observations: Scalars['Int'];
  previousSchool: Scalars['Int'];
  shirtNumber: Scalars['Int'];
  sport: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PlayerSportDataCountOrderByAggregateInput = {
  admissionDate?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  fieldPosition?: InputMaybe<SortOrder>;
  handedness?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  previousSchool?: InputMaybe<SortOrder>;
  shirtNumber?: InputMaybe<SortOrder>;
  sport?: InputMaybe<SortOrder>;
};

export type PlayerSportDataCreateInput = {
  admissionDate: Scalars['DateTime'];
  category?: InputMaybe<Player_Category>;
  fieldPosition?: InputMaybe<Field_Position>;
  handedness: Handedness;
  id?: InputMaybe<Scalars['String']>;
  observations?: InputMaybe<Scalars['String']>;
  players?: InputMaybe<PlayerCreateNestedManyWithoutPlayerSportDataInput>;
  previousSchool?: InputMaybe<Scalars['String']>;
  shirtNumber?: InputMaybe<Scalars['String']>;
  sport?: InputMaybe<PlayerSportDataCreatesportInput>;
};

export type PlayerSportDataCreateManyInput = {
  admissionDate: Scalars['DateTime'];
  category?: InputMaybe<Player_Category>;
  fieldPosition?: InputMaybe<Field_Position>;
  handedness: Handedness;
  id?: InputMaybe<Scalars['String']>;
  observations?: InputMaybe<Scalars['String']>;
  previousSchool?: InputMaybe<Scalars['String']>;
  shirtNumber?: InputMaybe<Scalars['String']>;
  sport?: InputMaybe<PlayerSportDataCreatesportInput>;
};

export type PlayerSportDataCreateNestedOneWithoutPlayersInput = {
  connect?: InputMaybe<PlayerSportDataWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerSportDataCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<PlayerSportDataCreateWithoutPlayersInput>;
};

export type PlayerSportDataCreateOrConnectWithoutPlayersInput = {
  create: PlayerSportDataCreateWithoutPlayersInput;
  where: PlayerSportDataWhereUniqueInput;
};

export type PlayerSportDataCreateWithoutPlayersInput = {
  admissionDate: Scalars['DateTime'];
  category?: InputMaybe<Player_Category>;
  fieldPosition?: InputMaybe<Field_Position>;
  handedness: Handedness;
  id?: InputMaybe<Scalars['String']>;
  observations?: InputMaybe<Scalars['String']>;
  previousSchool?: InputMaybe<Scalars['String']>;
  shirtNumber?: InputMaybe<Scalars['String']>;
  sport?: InputMaybe<PlayerSportDataCreatesportInput>;
};

export type PlayerSportDataCreatesportInput = {
  set: Array<Sports>;
};

export type PlayerSportDataGroupBy = {
  __typename?: 'PlayerSportDataGroupBy';
  _count?: Maybe<PlayerSportDataCountAggregate>;
  _max?: Maybe<PlayerSportDataMaxAggregate>;
  _min?: Maybe<PlayerSportDataMinAggregate>;
  admissionDate: Scalars['DateTime'];
  category?: Maybe<Player_Category>;
  createdAt: Scalars['DateTime'];
  fieldPosition?: Maybe<Field_Position>;
  handedness: Handedness;
  id: Scalars['String'];
  observations?: Maybe<Scalars['String']>;
  previousSchool?: Maybe<Scalars['String']>;
  shirtNumber?: Maybe<Scalars['String']>;
  sport?: Maybe<Array<Sports>>;
  updatedAt: Scalars['DateTime'];
};

export type PlayerSportDataMaxAggregate = {
  __typename?: 'PlayerSportDataMaxAggregate';
  admissionDate?: Maybe<Scalars['DateTime']>;
  category?: Maybe<Player_Category>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fieldPosition?: Maybe<Field_Position>;
  handedness?: Maybe<Handedness>;
  id?: Maybe<Scalars['String']>;
  observations?: Maybe<Scalars['String']>;
  previousSchool?: Maybe<Scalars['String']>;
  shirtNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlayerSportDataMaxOrderByAggregateInput = {
  admissionDate?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  fieldPosition?: InputMaybe<SortOrder>;
  handedness?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  previousSchool?: InputMaybe<SortOrder>;
  shirtNumber?: InputMaybe<SortOrder>;
};

export type PlayerSportDataMinAggregate = {
  __typename?: 'PlayerSportDataMinAggregate';
  admissionDate?: Maybe<Scalars['DateTime']>;
  category?: Maybe<Player_Category>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fieldPosition?: Maybe<Field_Position>;
  handedness?: Maybe<Handedness>;
  id?: Maybe<Scalars['String']>;
  observations?: Maybe<Scalars['String']>;
  previousSchool?: Maybe<Scalars['String']>;
  shirtNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlayerSportDataMinOrderByAggregateInput = {
  admissionDate?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  fieldPosition?: InputMaybe<SortOrder>;
  handedness?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  previousSchool?: InputMaybe<SortOrder>;
  shirtNumber?: InputMaybe<SortOrder>;
};

export type PlayerSportDataOrderByWithAggregationInput = {
  _count?: InputMaybe<PlayerSportDataCountOrderByAggregateInput>;
  _max?: InputMaybe<PlayerSportDataMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlayerSportDataMinOrderByAggregateInput>;
  admissionDate?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  fieldPosition?: InputMaybe<SortOrder>;
  handedness?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  previousSchool?: InputMaybe<SortOrder>;
  shirtNumber?: InputMaybe<SortOrder>;
  sport?: InputMaybe<SortOrder>;
};

export type PlayerSportDataOrderByWithRelationInput = {
  admissionDate?: InputMaybe<SortOrder>;
  category?: InputMaybe<SortOrder>;
  fieldPosition?: InputMaybe<SortOrder>;
  handedness?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  players?: InputMaybe<PlayerOrderByRelationAggregateInput>;
  previousSchool?: InputMaybe<SortOrder>;
  shirtNumber?: InputMaybe<SortOrder>;
  sport?: InputMaybe<SortOrder>;
};

export type PlayerSportDataRelationFilter = {
  is?: InputMaybe<PlayerSportDataWhereInput>;
  isNot?: InputMaybe<PlayerSportDataWhereInput>;
};

export enum PlayerSportDataScalarFieldEnum {
  AdmissionDate = 'admissionDate',
  Category = 'category',
  CreatedAt = 'createdAt',
  FieldPosition = 'fieldPosition',
  Handedness = 'handedness',
  Id = 'id',
  Observations = 'observations',
  PreviousSchool = 'previousSchool',
  ShirtNumber = 'shirtNumber',
  Sport = 'sport',
  UpdatedAt = 'updatedAt'
}

export type PlayerSportDataScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlayerSportDataScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PlayerSportDataScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlayerSportDataScalarWhereWithAggregatesInput>>;
  admissionDate?: InputMaybe<DateTimeWithAggregatesFilter>;
  category?: InputMaybe<EnumPlayer_CategoryNullableWithAggregatesFilter>;
  fieldPosition?: InputMaybe<EnumField_PositionNullableWithAggregatesFilter>;
  handedness?: InputMaybe<EnumHandednessWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  observations?: InputMaybe<StringNullableWithAggregatesFilter>;
  previousSchool?: InputMaybe<StringNullableWithAggregatesFilter>;
  shirtNumber?: InputMaybe<StringNullableWithAggregatesFilter>;
  sport?: InputMaybe<EnumSportsNullableListFilter>;
};

export type PlayerSportDataUpdateInput = {
  admissionDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  category?: InputMaybe<NullableEnumPlayer_CategoryFieldUpdateOperationsInput>;
  fieldPosition?: InputMaybe<NullableEnumField_PositionFieldUpdateOperationsInput>;
  handedness?: InputMaybe<EnumHandednessFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  observations?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutPlayerSportDataInput>;
  previousSchool?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  shirtNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sport?: InputMaybe<PlayerSportDataUpdatesportInput>;
};

export type PlayerSportDataUpdateManyMutationInput = {
  admissionDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  category?: InputMaybe<NullableEnumPlayer_CategoryFieldUpdateOperationsInput>;
  fieldPosition?: InputMaybe<NullableEnumField_PositionFieldUpdateOperationsInput>;
  handedness?: InputMaybe<EnumHandednessFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  observations?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousSchool?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  shirtNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sport?: InputMaybe<PlayerSportDataUpdatesportInput>;
};

export type PlayerSportDataUpdateOneWithoutPlayersInput = {
  connect?: InputMaybe<PlayerSportDataWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerSportDataCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<PlayerSportDataCreateWithoutPlayersInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PlayerSportDataUpdateWithoutPlayersInput>;
  upsert?: InputMaybe<PlayerSportDataUpsertWithoutPlayersInput>;
};

export type PlayerSportDataUpdateWithoutPlayersInput = {
  admissionDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  category?: InputMaybe<NullableEnumPlayer_CategoryFieldUpdateOperationsInput>;
  fieldPosition?: InputMaybe<NullableEnumField_PositionFieldUpdateOperationsInput>;
  handedness?: InputMaybe<EnumHandednessFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  observations?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  previousSchool?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  shirtNumber?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sport?: InputMaybe<PlayerSportDataUpdatesportInput>;
};

export type PlayerSportDataUpdatesportInput = {
  push?: InputMaybe<Array<Sports>>;
  set?: InputMaybe<Array<Sports>>;
};

export type PlayerSportDataUpsertWithoutPlayersInput = {
  create: PlayerSportDataCreateWithoutPlayersInput;
  update: PlayerSportDataUpdateWithoutPlayersInput;
};

export type PlayerSportDataWhereInput = {
  AND?: InputMaybe<Array<PlayerSportDataWhereInput>>;
  NOT?: InputMaybe<Array<PlayerSportDataWhereInput>>;
  OR?: InputMaybe<Array<PlayerSportDataWhereInput>>;
  admissionDate?: InputMaybe<DateTimeFilter>;
  category?: InputMaybe<EnumPlayer_CategoryNullableFilter>;
  fieldPosition?: InputMaybe<EnumField_PositionNullableFilter>;
  handedness?: InputMaybe<EnumHandednessFilter>;
  id?: InputMaybe<StringFilter>;
  observations?: InputMaybe<StringNullableFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
  previousSchool?: InputMaybe<StringNullableFilter>;
  shirtNumber?: InputMaybe<StringNullableFilter>;
  sport?: InputMaybe<EnumSportsNullableListFilter>;
};

export type PlayerSportDataWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type PlayerSurgeries = {
  __typename?: 'PlayerSurgeries';
  _count?: Maybe<PlayerSurgeriesCount>;
  id: Scalars['String'];
  name: Scalars['String'];
  observations?: Maybe<Scalars['String']>;
  performedDate: Scalars['DateTime'];
  players: Array<Player>;
};


export type PlayerSurgeriesPlayersArgs = {
  cursor?: InputMaybe<PlayerWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};

export type PlayerSurgeriesCount = {
  __typename?: 'PlayerSurgeriesCount';
  players: Scalars['Int'];
};

export type PlayerSurgeriesCountAggregate = {
  __typename?: 'PlayerSurgeriesCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  observations: Scalars['Int'];
  performedDate: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PlayerSurgeriesCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  performedDate?: InputMaybe<SortOrder>;
};

export type PlayerSurgeriesCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  observations?: InputMaybe<Scalars['String']>;
  performedDate: Scalars['DateTime'];
  players?: InputMaybe<PlayerCreateNestedManyWithoutPlayerSurgeriesInput>;
};

export type PlayerSurgeriesCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  observations?: InputMaybe<Scalars['String']>;
  performedDate: Scalars['DateTime'];
};

export type PlayerSurgeriesCreateNestedOneWithoutPlayersInput = {
  connect?: InputMaybe<PlayerSurgeriesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerSurgeriesCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<PlayerSurgeriesCreateWithoutPlayersInput>;
};

export type PlayerSurgeriesCreateOrConnectWithoutPlayersInput = {
  create: PlayerSurgeriesCreateWithoutPlayersInput;
  where: PlayerSurgeriesWhereUniqueInput;
};

export type PlayerSurgeriesCreateWithoutPlayersInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  observations?: InputMaybe<Scalars['String']>;
  performedDate: Scalars['DateTime'];
};

export type PlayerSurgeriesGroupBy = {
  __typename?: 'PlayerSurgeriesGroupBy';
  _count?: Maybe<PlayerSurgeriesCountAggregate>;
  _max?: Maybe<PlayerSurgeriesMaxAggregate>;
  _min?: Maybe<PlayerSurgeriesMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  observations?: Maybe<Scalars['String']>;
  performedDate: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type PlayerSurgeriesMaxAggregate = {
  __typename?: 'PlayerSurgeriesMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  observations?: Maybe<Scalars['String']>;
  performedDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlayerSurgeriesMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  performedDate?: InputMaybe<SortOrder>;
};

export type PlayerSurgeriesMinAggregate = {
  __typename?: 'PlayerSurgeriesMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  observations?: Maybe<Scalars['String']>;
  performedDate?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PlayerSurgeriesMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  performedDate?: InputMaybe<SortOrder>;
};

export type PlayerSurgeriesOrderByWithAggregationInput = {
  _count?: InputMaybe<PlayerSurgeriesCountOrderByAggregateInput>;
  _max?: InputMaybe<PlayerSurgeriesMaxOrderByAggregateInput>;
  _min?: InputMaybe<PlayerSurgeriesMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  performedDate?: InputMaybe<SortOrder>;
};

export type PlayerSurgeriesOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  observations?: InputMaybe<SortOrder>;
  performedDate?: InputMaybe<SortOrder>;
  players?: InputMaybe<PlayerOrderByRelationAggregateInput>;
};

export type PlayerSurgeriesRelationFilter = {
  is?: InputMaybe<PlayerSurgeriesWhereInput>;
  isNot?: InputMaybe<PlayerSurgeriesWhereInput>;
};

export enum PlayerSurgeriesScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Observations = 'observations',
  PerformedDate = 'performedDate',
  UpdatedAt = 'updatedAt'
}

export type PlayerSurgeriesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PlayerSurgeriesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PlayerSurgeriesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PlayerSurgeriesScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  observations?: InputMaybe<StringNullableWithAggregatesFilter>;
  performedDate?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type PlayerSurgeriesUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  observations?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  performedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutPlayerSurgeriesInput>;
};

export type PlayerSurgeriesUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  observations?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  performedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PlayerSurgeriesUpdateOneWithoutPlayersInput = {
  connect?: InputMaybe<PlayerSurgeriesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerSurgeriesCreateOrConnectWithoutPlayersInput>;
  create?: InputMaybe<PlayerSurgeriesCreateWithoutPlayersInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<PlayerSurgeriesUpdateWithoutPlayersInput>;
  upsert?: InputMaybe<PlayerSurgeriesUpsertWithoutPlayersInput>;
};

export type PlayerSurgeriesUpdateWithoutPlayersInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  observations?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  performedDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PlayerSurgeriesUpsertWithoutPlayersInput = {
  create: PlayerSurgeriesCreateWithoutPlayersInput;
  update: PlayerSurgeriesUpdateWithoutPlayersInput;
};

export type PlayerSurgeriesWhereInput = {
  AND?: InputMaybe<Array<PlayerSurgeriesWhereInput>>;
  NOT?: InputMaybe<Array<PlayerSurgeriesWhereInput>>;
  OR?: InputMaybe<Array<PlayerSurgeriesWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  observations?: InputMaybe<StringNullableFilter>;
  performedDate?: InputMaybe<DateTimeFilter>;
  players?: InputMaybe<PlayerListRelationFilter>;
};

export type PlayerSurgeriesWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type PlayerUpdateInput = {
  coachId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttendances?: InputMaybe<PlayerAttendanceUpdateManyWithoutPlayerInput>;
  playerData?: InputMaybe<PlayerDataUpdateOneRequiredWithoutPlayersInput>;
  playerEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerGuardian?: InputMaybe<PlayerGuardianUpdateOneWithoutPlayerInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesUpdateOneWithoutPlayersInput>;
  playerMedical?: InputMaybe<PlayerMedicalUpdateOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<EnumPlayer_Payment_StatusFieldUpdateOperationsInput>;
  playerPsychology?: InputMaybe<PlayerPsychologyUpdateOneWithoutPlayersInput>;
  playerSportData?: InputMaybe<PlayerSportDataUpdateOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<EnumPlayer_StatusFieldUpdateOperationsInput>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesUpdateOneWithoutPlayersInput>;
  school?: InputMaybe<SchoolUpdateOneRequiredWithoutPlayersInput>;
};

export type PlayerUpdateManyMutationInput = {
  coachId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerPaymentStatus?: InputMaybe<EnumPlayer_Payment_StatusFieldUpdateOperationsInput>;
  playerStatus?: InputMaybe<EnumPlayer_StatusFieldUpdateOperationsInput>;
};

export type PlayerUpdateManyWithWhereWithoutPlayerDataInput = {
  data: PlayerUpdateManyMutationInput;
  where: PlayerScalarWhereInput;
};

export type PlayerUpdateManyWithWhereWithoutPlayerGuardianInput = {
  data: PlayerUpdateManyMutationInput;
  where: PlayerScalarWhereInput;
};

export type PlayerUpdateManyWithWhereWithoutPlayerInjuriesInput = {
  data: PlayerUpdateManyMutationInput;
  where: PlayerScalarWhereInput;
};

export type PlayerUpdateManyWithWhereWithoutPlayerMedicalInput = {
  data: PlayerUpdateManyMutationInput;
  where: PlayerScalarWhereInput;
};

export type PlayerUpdateManyWithWhereWithoutPlayerPsychologyInput = {
  data: PlayerUpdateManyMutationInput;
  where: PlayerScalarWhereInput;
};

export type PlayerUpdateManyWithWhereWithoutPlayerSportDataInput = {
  data: PlayerUpdateManyMutationInput;
  where: PlayerScalarWhereInput;
};

export type PlayerUpdateManyWithWhereWithoutPlayerSurgeriesInput = {
  data: PlayerUpdateManyMutationInput;
  where: PlayerScalarWhereInput;
};

export type PlayerUpdateManyWithWhereWithoutSchoolInput = {
  data: PlayerUpdateManyMutationInput;
  where: PlayerScalarWhereInput;
};

export type PlayerUpdateManyWithoutPlayerDataInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutPlayerDataInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutPlayerDataInput>>;
  createMany?: InputMaybe<PlayerCreateManyPlayerDataInputEnvelope>;
  delete?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerUpdateWithWhereUniqueWithoutPlayerDataInput>>;
  updateMany?: InputMaybe<Array<PlayerUpdateManyWithWhereWithoutPlayerDataInput>>;
  upsert?: InputMaybe<Array<PlayerUpsertWithWhereUniqueWithoutPlayerDataInput>>;
};

export type PlayerUpdateManyWithoutPlayerGuardianInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutPlayerGuardianInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutPlayerGuardianInput>>;
  createMany?: InputMaybe<PlayerCreateManyPlayerGuardianInputEnvelope>;
  delete?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerUpdateWithWhereUniqueWithoutPlayerGuardianInput>>;
  updateMany?: InputMaybe<Array<PlayerUpdateManyWithWhereWithoutPlayerGuardianInput>>;
  upsert?: InputMaybe<Array<PlayerUpsertWithWhereUniqueWithoutPlayerGuardianInput>>;
};

export type PlayerUpdateManyWithoutPlayerInjuriesInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutPlayerInjuriesInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutPlayerInjuriesInput>>;
  createMany?: InputMaybe<PlayerCreateManyPlayerInjuriesInputEnvelope>;
  delete?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerUpdateWithWhereUniqueWithoutPlayerInjuriesInput>>;
  updateMany?: InputMaybe<Array<PlayerUpdateManyWithWhereWithoutPlayerInjuriesInput>>;
  upsert?: InputMaybe<Array<PlayerUpsertWithWhereUniqueWithoutPlayerInjuriesInput>>;
};

export type PlayerUpdateManyWithoutPlayerMedicalInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutPlayerMedicalInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutPlayerMedicalInput>>;
  createMany?: InputMaybe<PlayerCreateManyPlayerMedicalInputEnvelope>;
  delete?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerUpdateWithWhereUniqueWithoutPlayerMedicalInput>>;
  updateMany?: InputMaybe<Array<PlayerUpdateManyWithWhereWithoutPlayerMedicalInput>>;
  upsert?: InputMaybe<Array<PlayerUpsertWithWhereUniqueWithoutPlayerMedicalInput>>;
};

export type PlayerUpdateManyWithoutPlayerPsychologyInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutPlayerPsychologyInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutPlayerPsychologyInput>>;
  createMany?: InputMaybe<PlayerCreateManyPlayerPsychologyInputEnvelope>;
  delete?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerUpdateWithWhereUniqueWithoutPlayerPsychologyInput>>;
  updateMany?: InputMaybe<Array<PlayerUpdateManyWithWhereWithoutPlayerPsychologyInput>>;
  upsert?: InputMaybe<Array<PlayerUpsertWithWhereUniqueWithoutPlayerPsychologyInput>>;
};

export type PlayerUpdateManyWithoutPlayerSportDataInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutPlayerSportDataInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutPlayerSportDataInput>>;
  createMany?: InputMaybe<PlayerCreateManyPlayerSportDataInputEnvelope>;
  delete?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerUpdateWithWhereUniqueWithoutPlayerSportDataInput>>;
  updateMany?: InputMaybe<Array<PlayerUpdateManyWithWhereWithoutPlayerSportDataInput>>;
  upsert?: InputMaybe<Array<PlayerUpsertWithWhereUniqueWithoutPlayerSportDataInput>>;
};

export type PlayerUpdateManyWithoutPlayerSurgeriesInput = {
  connect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PlayerCreateOrConnectWithoutPlayerSurgeriesInput>>;
  create?: InputMaybe<Array<PlayerCreateWithoutPlayerSurgeriesInput>>;
  createMany?: InputMaybe<PlayerCreateManyPlayerSurgeriesInputEnvelope>;
  delete?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PlayerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  set?: InputMaybe<Array<PlayerWhereUniqueInput>>;
  update?: InputMaybe<Array<PlayerUpdateWithWhereUniqueWithoutPlayerSurgeriesInput>>;
  updateMany?: InputMaybe<Array<PlayerUpdateManyWithWhereWithoutPlayerSurgeriesInput>>;
  upsert?: InputMaybe<Array<PlayerUpsertWithWhereUniqueWithoutPlayerSurgeriesInput>>;
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

export type PlayerUpdateOneRequiredWithoutPlayerAttendancesInput = {
  connect?: InputMaybe<PlayerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PlayerCreateOrConnectWithoutPlayerAttendancesInput>;
  create?: InputMaybe<PlayerCreateWithoutPlayerAttendancesInput>;
  update?: InputMaybe<PlayerUpdateWithoutPlayerAttendancesInput>;
  upsert?: InputMaybe<PlayerUpsertWithoutPlayerAttendancesInput>;
};

export type PlayerUpdateWithWhereUniqueWithoutPlayerDataInput = {
  data: PlayerUpdateWithoutPlayerDataInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpdateWithWhereUniqueWithoutPlayerGuardianInput = {
  data: PlayerUpdateWithoutPlayerGuardianInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpdateWithWhereUniqueWithoutPlayerInjuriesInput = {
  data: PlayerUpdateWithoutPlayerInjuriesInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpdateWithWhereUniqueWithoutPlayerMedicalInput = {
  data: PlayerUpdateWithoutPlayerMedicalInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpdateWithWhereUniqueWithoutPlayerPsychologyInput = {
  data: PlayerUpdateWithoutPlayerPsychologyInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpdateWithWhereUniqueWithoutPlayerSportDataInput = {
  data: PlayerUpdateWithoutPlayerSportDataInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpdateWithWhereUniqueWithoutPlayerSurgeriesInput = {
  data: PlayerUpdateWithoutPlayerSurgeriesInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpdateWithWhereUniqueWithoutSchoolInput = {
  data: PlayerUpdateWithoutSchoolInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpdateWithoutPlayerAttendancesInput = {
  coachId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerData?: InputMaybe<PlayerDataUpdateOneRequiredWithoutPlayersInput>;
  playerEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerGuardian?: InputMaybe<PlayerGuardianUpdateOneWithoutPlayerInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesUpdateOneWithoutPlayersInput>;
  playerMedical?: InputMaybe<PlayerMedicalUpdateOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<EnumPlayer_Payment_StatusFieldUpdateOperationsInput>;
  playerPsychology?: InputMaybe<PlayerPsychologyUpdateOneWithoutPlayersInput>;
  playerSportData?: InputMaybe<PlayerSportDataUpdateOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<EnumPlayer_StatusFieldUpdateOperationsInput>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesUpdateOneWithoutPlayersInput>;
  school?: InputMaybe<SchoolUpdateOneRequiredWithoutPlayersInput>;
};

export type PlayerUpdateWithoutPlayerDataInput = {
  coachId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttendances?: InputMaybe<PlayerAttendanceUpdateManyWithoutPlayerInput>;
  playerEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerGuardian?: InputMaybe<PlayerGuardianUpdateOneWithoutPlayerInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesUpdateOneWithoutPlayersInput>;
  playerMedical?: InputMaybe<PlayerMedicalUpdateOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<EnumPlayer_Payment_StatusFieldUpdateOperationsInput>;
  playerPsychology?: InputMaybe<PlayerPsychologyUpdateOneWithoutPlayersInput>;
  playerSportData?: InputMaybe<PlayerSportDataUpdateOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<EnumPlayer_StatusFieldUpdateOperationsInput>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesUpdateOneWithoutPlayersInput>;
  school?: InputMaybe<SchoolUpdateOneRequiredWithoutPlayersInput>;
};

export type PlayerUpdateWithoutPlayerGuardianInput = {
  coachId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttendances?: InputMaybe<PlayerAttendanceUpdateManyWithoutPlayerInput>;
  playerData?: InputMaybe<PlayerDataUpdateOneRequiredWithoutPlayersInput>;
  playerEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesUpdateOneWithoutPlayersInput>;
  playerMedical?: InputMaybe<PlayerMedicalUpdateOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<EnumPlayer_Payment_StatusFieldUpdateOperationsInput>;
  playerPsychology?: InputMaybe<PlayerPsychologyUpdateOneWithoutPlayersInput>;
  playerSportData?: InputMaybe<PlayerSportDataUpdateOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<EnumPlayer_StatusFieldUpdateOperationsInput>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesUpdateOneWithoutPlayersInput>;
  school?: InputMaybe<SchoolUpdateOneRequiredWithoutPlayersInput>;
};

export type PlayerUpdateWithoutPlayerInjuriesInput = {
  coachId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttendances?: InputMaybe<PlayerAttendanceUpdateManyWithoutPlayerInput>;
  playerData?: InputMaybe<PlayerDataUpdateOneRequiredWithoutPlayersInput>;
  playerEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerGuardian?: InputMaybe<PlayerGuardianUpdateOneWithoutPlayerInput>;
  playerMedical?: InputMaybe<PlayerMedicalUpdateOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<EnumPlayer_Payment_StatusFieldUpdateOperationsInput>;
  playerPsychology?: InputMaybe<PlayerPsychologyUpdateOneWithoutPlayersInput>;
  playerSportData?: InputMaybe<PlayerSportDataUpdateOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<EnumPlayer_StatusFieldUpdateOperationsInput>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesUpdateOneWithoutPlayersInput>;
  school?: InputMaybe<SchoolUpdateOneRequiredWithoutPlayersInput>;
};

export type PlayerUpdateWithoutPlayerMedicalInput = {
  coachId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttendances?: InputMaybe<PlayerAttendanceUpdateManyWithoutPlayerInput>;
  playerData?: InputMaybe<PlayerDataUpdateOneRequiredWithoutPlayersInput>;
  playerEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerGuardian?: InputMaybe<PlayerGuardianUpdateOneWithoutPlayerInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesUpdateOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<EnumPlayer_Payment_StatusFieldUpdateOperationsInput>;
  playerPsychology?: InputMaybe<PlayerPsychologyUpdateOneWithoutPlayersInput>;
  playerSportData?: InputMaybe<PlayerSportDataUpdateOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<EnumPlayer_StatusFieldUpdateOperationsInput>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesUpdateOneWithoutPlayersInput>;
  school?: InputMaybe<SchoolUpdateOneRequiredWithoutPlayersInput>;
};

export type PlayerUpdateWithoutPlayerPsychologyInput = {
  coachId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttendances?: InputMaybe<PlayerAttendanceUpdateManyWithoutPlayerInput>;
  playerData?: InputMaybe<PlayerDataUpdateOneRequiredWithoutPlayersInput>;
  playerEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerGuardian?: InputMaybe<PlayerGuardianUpdateOneWithoutPlayerInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesUpdateOneWithoutPlayersInput>;
  playerMedical?: InputMaybe<PlayerMedicalUpdateOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<EnumPlayer_Payment_StatusFieldUpdateOperationsInput>;
  playerSportData?: InputMaybe<PlayerSportDataUpdateOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<EnumPlayer_StatusFieldUpdateOperationsInput>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesUpdateOneWithoutPlayersInput>;
  school?: InputMaybe<SchoolUpdateOneRequiredWithoutPlayersInput>;
};

export type PlayerUpdateWithoutPlayerSportDataInput = {
  coachId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttendances?: InputMaybe<PlayerAttendanceUpdateManyWithoutPlayerInput>;
  playerData?: InputMaybe<PlayerDataUpdateOneRequiredWithoutPlayersInput>;
  playerEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerGuardian?: InputMaybe<PlayerGuardianUpdateOneWithoutPlayerInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesUpdateOneWithoutPlayersInput>;
  playerMedical?: InputMaybe<PlayerMedicalUpdateOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<EnumPlayer_Payment_StatusFieldUpdateOperationsInput>;
  playerPsychology?: InputMaybe<PlayerPsychologyUpdateOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<EnumPlayer_StatusFieldUpdateOperationsInput>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesUpdateOneWithoutPlayersInput>;
  school?: InputMaybe<SchoolUpdateOneRequiredWithoutPlayersInput>;
};

export type PlayerUpdateWithoutPlayerSurgeriesInput = {
  coachId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttendances?: InputMaybe<PlayerAttendanceUpdateManyWithoutPlayerInput>;
  playerData?: InputMaybe<PlayerDataUpdateOneRequiredWithoutPlayersInput>;
  playerEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerGuardian?: InputMaybe<PlayerGuardianUpdateOneWithoutPlayerInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesUpdateOneWithoutPlayersInput>;
  playerMedical?: InputMaybe<PlayerMedicalUpdateOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<EnumPlayer_Payment_StatusFieldUpdateOperationsInput>;
  playerPsychology?: InputMaybe<PlayerPsychologyUpdateOneWithoutPlayersInput>;
  playerSportData?: InputMaybe<PlayerSportDataUpdateOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<EnumPlayer_StatusFieldUpdateOperationsInput>;
  school?: InputMaybe<SchoolUpdateOneRequiredWithoutPlayersInput>;
};

export type PlayerUpdateWithoutSchoolInput = {
  coachId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerAttendances?: InputMaybe<PlayerAttendanceUpdateManyWithoutPlayerInput>;
  playerData?: InputMaybe<PlayerDataUpdateOneRequiredWithoutPlayersInput>;
  playerEmail?: InputMaybe<StringFieldUpdateOperationsInput>;
  playerGuardian?: InputMaybe<PlayerGuardianUpdateOneWithoutPlayerInput>;
  playerInjuries?: InputMaybe<PlayerInjuriesUpdateOneWithoutPlayersInput>;
  playerMedical?: InputMaybe<PlayerMedicalUpdateOneWithoutPlayersInput>;
  playerPaymentStatus?: InputMaybe<EnumPlayer_Payment_StatusFieldUpdateOperationsInput>;
  playerPsychology?: InputMaybe<PlayerPsychologyUpdateOneWithoutPlayersInput>;
  playerSportData?: InputMaybe<PlayerSportDataUpdateOneWithoutPlayersInput>;
  playerStatus?: InputMaybe<EnumPlayer_StatusFieldUpdateOperationsInput>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesUpdateOneWithoutPlayersInput>;
};

export type PlayerUpsertWithWhereUniqueWithoutPlayerDataInput = {
  create: PlayerCreateWithoutPlayerDataInput;
  update: PlayerUpdateWithoutPlayerDataInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpsertWithWhereUniqueWithoutPlayerGuardianInput = {
  create: PlayerCreateWithoutPlayerGuardianInput;
  update: PlayerUpdateWithoutPlayerGuardianInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpsertWithWhereUniqueWithoutPlayerInjuriesInput = {
  create: PlayerCreateWithoutPlayerInjuriesInput;
  update: PlayerUpdateWithoutPlayerInjuriesInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpsertWithWhereUniqueWithoutPlayerMedicalInput = {
  create: PlayerCreateWithoutPlayerMedicalInput;
  update: PlayerUpdateWithoutPlayerMedicalInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpsertWithWhereUniqueWithoutPlayerPsychologyInput = {
  create: PlayerCreateWithoutPlayerPsychologyInput;
  update: PlayerUpdateWithoutPlayerPsychologyInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpsertWithWhereUniqueWithoutPlayerSportDataInput = {
  create: PlayerCreateWithoutPlayerSportDataInput;
  update: PlayerUpdateWithoutPlayerSportDataInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpsertWithWhereUniqueWithoutPlayerSurgeriesInput = {
  create: PlayerCreateWithoutPlayerSurgeriesInput;
  update: PlayerUpdateWithoutPlayerSurgeriesInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpsertWithWhereUniqueWithoutSchoolInput = {
  create: PlayerCreateWithoutSchoolInput;
  update: PlayerUpdateWithoutSchoolInput;
  where: PlayerWhereUniqueInput;
};

export type PlayerUpsertWithoutPlayerAttendancesInput = {
  create: PlayerCreateWithoutPlayerAttendancesInput;
  update: PlayerUpdateWithoutPlayerAttendancesInput;
};

export type PlayerWhereInput = {
  AND?: InputMaybe<Array<PlayerWhereInput>>;
  NOT?: InputMaybe<Array<PlayerWhereInput>>;
  OR?: InputMaybe<Array<PlayerWhereInput>>;
  coachId?: InputMaybe<StringNullableFilter>;
  image?: InputMaybe<StringNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  playerAttendances?: InputMaybe<PlayerAttendanceListRelationFilter>;
  playerData?: InputMaybe<PlayerDataRelationFilter>;
  playerDataId?: InputMaybe<StringFilter>;
  playerEmail?: InputMaybe<StringFilter>;
  playerGuardian?: InputMaybe<PlayerGuardianRelationFilter>;
  playerGuardianId?: InputMaybe<StringNullableFilter>;
  playerInjuries?: InputMaybe<PlayerInjuriesRelationFilter>;
  playerInjuriesId?: InputMaybe<StringNullableFilter>;
  playerMedical?: InputMaybe<PlayerMedicalRelationFilter>;
  playerMedicalId?: InputMaybe<StringNullableFilter>;
  playerPaymentStatus?: InputMaybe<EnumPlayer_Payment_StatusFilter>;
  playerPsychology?: InputMaybe<PlayerPsychologyRelationFilter>;
  playerPsychologyId?: InputMaybe<StringNullableFilter>;
  playerSportData?: InputMaybe<PlayerSportDataRelationFilter>;
  playerSportDataId?: InputMaybe<StringNullableFilter>;
  playerStatus?: InputMaybe<EnumPlayer_StatusFilter>;
  playerSurgeries?: InputMaybe<PlayerSurgeriesRelationFilter>;
  playerSurgeryId?: InputMaybe<StringNullableFilter>;
  school?: InputMaybe<SchoolRelationFilter>;
  schoolId?: InputMaybe<StringFilter>;
};

export type PlayerWhereUniqueInput = {
  playerEmail?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregatePlayer: AggregatePlayer;
  aggregatePlayerAttendance: AggregatePlayerAttendance;
  aggregatePlayerData: AggregatePlayerData;
  aggregatePlayerGuardian: AggregatePlayerGuardian;
  aggregatePlayerInjuries: AggregatePlayerInjuries;
  aggregatePlayerMedical: AggregatePlayerMedical;
  aggregatePlayerPsychology: AggregatePlayerPsychology;
  aggregatePlayerSportData: AggregatePlayerSportData;
  aggregatePlayerSurgeries: AggregatePlayerSurgeries;
  aggregateSchool: AggregateSchool;
  aggregateSession: AggregateSession;
  aggregateUser: AggregateUser;
  findFirstPlayer?: Maybe<Player>;
  findFirstPlayerAttendance?: Maybe<PlayerAttendance>;
  findFirstPlayerData?: Maybe<PlayerData>;
  findFirstPlayerGuardian?: Maybe<PlayerGuardian>;
  findFirstPlayerInjuries?: Maybe<PlayerInjuries>;
  findFirstPlayerMedical?: Maybe<PlayerMedical>;
  findFirstPlayerPsychology?: Maybe<PlayerPsychology>;
  findFirstPlayerSportData?: Maybe<PlayerSportData>;
  findFirstPlayerSurgeries?: Maybe<PlayerSurgeries>;
  findFirstSchool?: Maybe<School>;
  findFirstSession?: Maybe<Session>;
  findFirstUser?: Maybe<User>;
  findManyPlayerData: Array<PlayerData>;
  findManyPlayerInjuries: Array<PlayerInjuries>;
  findManyPlayerSportData: Array<PlayerSportData>;
  findManyPlayerSurgeries: Array<PlayerSurgeries>;
  findUniquePlayerData?: Maybe<PlayerData>;
  findUniquePlayerInjuries?: Maybe<PlayerInjuries>;
  findUniquePlayerSportData?: Maybe<PlayerSportData>;
  findUniquePlayerSurgeries?: Maybe<PlayerSurgeries>;
  groupByPlayer: Array<PlayerGroupBy>;
  groupByPlayerAttendance: Array<PlayerAttendanceGroupBy>;
  groupByPlayerData: Array<PlayerDataGroupBy>;
  groupByPlayerGuardian: Array<PlayerGuardianGroupBy>;
  groupByPlayerInjuries: Array<PlayerInjuriesGroupBy>;
  groupByPlayerMedical: Array<PlayerMedicalGroupBy>;
  groupByPlayerPsychology: Array<PlayerPsychologyGroupBy>;
  groupByPlayerSportData: Array<PlayerSportDataGroupBy>;
  groupByPlayerSurgeries: Array<PlayerSurgeriesGroupBy>;
  groupBySchool: Array<SchoolGroupBy>;
  groupBySession: Array<SessionGroupBy>;
  groupByUser: Array<UserGroupBy>;
  player?: Maybe<Player>;
  playerAttendance?: Maybe<PlayerAttendance>;
  playerAttendances: Array<PlayerAttendance>;
  playerGuardian?: Maybe<PlayerGuardian>;
  playerGuardians: Array<PlayerGuardian>;
  playerMedical?: Maybe<PlayerMedical>;
  playerMedicals: Array<PlayerMedical>;
  playerPsychologies: Array<PlayerPsychology>;
  playerPsychology?: Maybe<PlayerPsychology>;
  players: Array<Player>;
  school?: Maybe<School>;
  schools: Array<School>;
  session?: Maybe<Session>;
  sessions: Array<Session>;
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


export type QueryAggregatePlayerAttendanceArgs = {
  cursor?: InputMaybe<PlayerAttendanceWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlayerAttendanceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttendanceWhereInput>;
};


export type QueryAggregatePlayerDataArgs = {
  cursor?: InputMaybe<PlayerDataWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlayerDataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerDataWhereInput>;
};


export type QueryAggregatePlayerGuardianArgs = {
  cursor?: InputMaybe<PlayerGuardianWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlayerGuardianOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerGuardianWhereInput>;
};


export type QueryAggregatePlayerInjuriesArgs = {
  cursor?: InputMaybe<PlayerInjuriesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlayerInjuriesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerInjuriesWhereInput>;
};


export type QueryAggregatePlayerMedicalArgs = {
  cursor?: InputMaybe<PlayerMedicalWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlayerMedicalOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerMedicalWhereInput>;
};


export type QueryAggregatePlayerPsychologyArgs = {
  cursor?: InputMaybe<PlayerPsychologyWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlayerPsychologyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerPsychologyWhereInput>;
};


export type QueryAggregatePlayerSportDataArgs = {
  cursor?: InputMaybe<PlayerSportDataWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlayerSportDataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerSportDataWhereInput>;
};


export type QueryAggregatePlayerSurgeriesArgs = {
  cursor?: InputMaybe<PlayerSurgeriesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PlayerSurgeriesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerSurgeriesWhereInput>;
};


export type QueryAggregateSchoolArgs = {
  cursor?: InputMaybe<SchoolWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};


export type QueryAggregateSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
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


export type QueryFindFirstPlayerAttendanceArgs = {
  cursor?: InputMaybe<PlayerAttendanceWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerAttendanceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerAttendanceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttendanceWhereInput>;
};


export type QueryFindFirstPlayerDataArgs = {
  cursor?: InputMaybe<PlayerDataWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerDataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerDataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerDataWhereInput>;
};


export type QueryFindFirstPlayerGuardianArgs = {
  cursor?: InputMaybe<PlayerGuardianWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerGuardianScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerGuardianOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerGuardianWhereInput>;
};


export type QueryFindFirstPlayerInjuriesArgs = {
  cursor?: InputMaybe<PlayerInjuriesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerInjuriesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerInjuriesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerInjuriesWhereInput>;
};


export type QueryFindFirstPlayerMedicalArgs = {
  cursor?: InputMaybe<PlayerMedicalWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerMedicalScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerMedicalOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerMedicalWhereInput>;
};


export type QueryFindFirstPlayerPsychologyArgs = {
  cursor?: InputMaybe<PlayerPsychologyWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerPsychologyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerPsychologyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerPsychologyWhereInput>;
};


export type QueryFindFirstPlayerSportDataArgs = {
  cursor?: InputMaybe<PlayerSportDataWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerSportDataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerSportDataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerSportDataWhereInput>;
};


export type QueryFindFirstPlayerSurgeriesArgs = {
  cursor?: InputMaybe<PlayerSurgeriesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerSurgeriesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerSurgeriesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerSurgeriesWhereInput>;
};


export type QueryFindFirstSchoolArgs = {
  cursor?: InputMaybe<SchoolWhereUniqueInput>;
  distinct?: InputMaybe<Array<SchoolScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};


export type QueryFindFirstSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyPlayerDataArgs = {
  cursor?: InputMaybe<PlayerDataWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerDataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerDataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerDataWhereInput>;
};


export type QueryFindManyPlayerInjuriesArgs = {
  cursor?: InputMaybe<PlayerInjuriesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerInjuriesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerInjuriesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerInjuriesWhereInput>;
};


export type QueryFindManyPlayerSportDataArgs = {
  cursor?: InputMaybe<PlayerSportDataWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerSportDataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerSportDataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerSportDataWhereInput>;
};


export type QueryFindManyPlayerSurgeriesArgs = {
  cursor?: InputMaybe<PlayerSurgeriesWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerSurgeriesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerSurgeriesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerSurgeriesWhereInput>;
};


export type QueryFindUniquePlayerDataArgs = {
  where: PlayerDataWhereUniqueInput;
};


export type QueryFindUniquePlayerInjuriesArgs = {
  where: PlayerInjuriesWhereUniqueInput;
};


export type QueryFindUniquePlayerSportDataArgs = {
  where: PlayerSportDataWhereUniqueInput;
};


export type QueryFindUniquePlayerSurgeriesArgs = {
  where: PlayerSurgeriesWhereUniqueInput;
};


export type QueryGroupByPlayerArgs = {
  by: Array<PlayerScalarFieldEnum>;
  having?: InputMaybe<PlayerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlayerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
};


export type QueryGroupByPlayerAttendanceArgs = {
  by: Array<PlayerAttendanceScalarFieldEnum>;
  having?: InputMaybe<PlayerAttendanceScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlayerAttendanceOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttendanceWhereInput>;
};


export type QueryGroupByPlayerDataArgs = {
  by: Array<PlayerDataScalarFieldEnum>;
  having?: InputMaybe<PlayerDataScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlayerDataOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerDataWhereInput>;
};


export type QueryGroupByPlayerGuardianArgs = {
  by: Array<PlayerGuardianScalarFieldEnum>;
  having?: InputMaybe<PlayerGuardianScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlayerGuardianOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerGuardianWhereInput>;
};


export type QueryGroupByPlayerInjuriesArgs = {
  by: Array<PlayerInjuriesScalarFieldEnum>;
  having?: InputMaybe<PlayerInjuriesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlayerInjuriesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerInjuriesWhereInput>;
};


export type QueryGroupByPlayerMedicalArgs = {
  by: Array<PlayerMedicalScalarFieldEnum>;
  having?: InputMaybe<PlayerMedicalScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlayerMedicalOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerMedicalWhereInput>;
};


export type QueryGroupByPlayerPsychologyArgs = {
  by: Array<PlayerPsychologyScalarFieldEnum>;
  having?: InputMaybe<PlayerPsychologyScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlayerPsychologyOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerPsychologyWhereInput>;
};


export type QueryGroupByPlayerSportDataArgs = {
  by: Array<PlayerSportDataScalarFieldEnum>;
  having?: InputMaybe<PlayerSportDataScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlayerSportDataOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerSportDataWhereInput>;
};


export type QueryGroupByPlayerSurgeriesArgs = {
  by: Array<PlayerSurgeriesScalarFieldEnum>;
  having?: InputMaybe<PlayerSurgeriesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PlayerSurgeriesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerSurgeriesWhereInput>;
};


export type QueryGroupBySchoolArgs = {
  by: Array<SchoolScalarFieldEnum>;
  having?: InputMaybe<SchoolScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SchoolOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SchoolWhereInput>;
};


export type QueryGroupBySessionArgs = {
  by: Array<SessionScalarFieldEnum>;
  having?: InputMaybe<SessionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
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


export type QueryPlayerAttendanceArgs = {
  where: PlayerAttendanceWhereUniqueInput;
};


export type QueryPlayerAttendancesArgs = {
  cursor?: InputMaybe<PlayerAttendanceWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerAttendanceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerAttendanceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttendanceWhereInput>;
};


export type QueryPlayerGuardianArgs = {
  where: PlayerGuardianWhereUniqueInput;
};


export type QueryPlayerGuardiansArgs = {
  cursor?: InputMaybe<PlayerGuardianWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerGuardianScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerGuardianOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerGuardianWhereInput>;
};


export type QueryPlayerMedicalArgs = {
  where: PlayerMedicalWhereUniqueInput;
};


export type QueryPlayerMedicalsArgs = {
  cursor?: InputMaybe<PlayerMedicalWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerMedicalScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerMedicalOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerMedicalWhereInput>;
};


export type QueryPlayerPsychologiesArgs = {
  cursor?: InputMaybe<PlayerPsychologyWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerPsychologyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerPsychologyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerPsychologyWhereInput>;
};


export type QueryPlayerPsychologyArgs = {
  where: PlayerPsychologyWhereUniqueInput;
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


export type QuerySessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
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

export enum Sports {
  Baseball = 'BASEBALL',
  Basketball = 'BASKETBALL',
  Boxing = 'BOXING',
  Karate = 'KARATE',
  Pingpong = 'PINGPONG',
  Running = 'RUNNING',
  Skating = 'SKATING',
  Soccer = 'SOCCER',
  Swimming = 'SWIMMING',
  Taekwondo = 'TAEKWONDO',
  Tennis = 'TENNIS',
  Volleyball = 'VOLLEYBALL'
}

export type School = {
  __typename?: 'School';
  _count?: Maybe<SchoolCount>;
  address: Scalars['String'];
  attendance: Array<PlayerAttendance>;
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  players: Array<Player>;
  users: Array<User>;
};


export type SchoolAttendanceArgs = {
  cursor?: InputMaybe<PlayerAttendanceWhereUniqueInput>;
  distinct?: InputMaybe<Array<PlayerAttendanceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PlayerAttendanceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerAttendanceWhereInput>;
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
  attendance: Scalars['Int'];
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
  attendance?: InputMaybe<PlayerAttendanceCreateNestedManyWithoutSchoolInput>;
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

export type SchoolCreateNestedOneWithoutAttendanceInput = {
  connect?: InputMaybe<SchoolWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SchoolCreateOrConnectWithoutAttendanceInput>;
  create?: InputMaybe<SchoolCreateWithoutAttendanceInput>;
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

export type SchoolCreateOrConnectWithoutAttendanceInput = {
  create: SchoolCreateWithoutAttendanceInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolCreateOrConnectWithoutPlayersInput = {
  create: SchoolCreateWithoutPlayersInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolCreateOrConnectWithoutUsersInput = {
  create: SchoolCreateWithoutUsersInput;
  where: SchoolWhereUniqueInput;
};

export type SchoolCreateWithoutAttendanceInput = {
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

export type SchoolCreateWithoutPlayersInput = {
  address: Scalars['String'];
  attendance?: InputMaybe<PlayerAttendanceCreateNestedManyWithoutSchoolInput>;
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
  attendance?: InputMaybe<PlayerAttendanceCreateNestedManyWithoutSchoolInput>;
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
  attendance?: InputMaybe<PlayerAttendanceOrderByRelationAggregateInput>;
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
  attendance?: InputMaybe<PlayerAttendanceUpdateManyWithoutSchoolInput>;
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

export type SchoolUpdateOneWithoutAttendanceInput = {
  connect?: InputMaybe<SchoolWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SchoolCreateOrConnectWithoutAttendanceInput>;
  create?: InputMaybe<SchoolCreateWithoutAttendanceInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<SchoolUpdateWithoutAttendanceInput>;
  upsert?: InputMaybe<SchoolUpsertWithoutAttendanceInput>;
};

export type SchoolUpdateWithoutAttendanceInput = {
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

export type SchoolUpdateWithoutPlayersInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  attendance?: InputMaybe<PlayerAttendanceUpdateManyWithoutSchoolInput>;
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
  attendance?: InputMaybe<PlayerAttendanceUpdateManyWithoutSchoolInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  players?: InputMaybe<PlayerUpdateManyWithoutSchoolInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SchoolUpsertWithoutAttendanceInput = {
  create: SchoolCreateWithoutAttendanceInput;
  update: SchoolUpdateWithoutAttendanceInput;
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
  attendance?: InputMaybe<PlayerAttendanceListRelationFilter>;
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

export type Session = {
  __typename?: 'Session';
  data: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  id: Scalars['String'];
  sid: Scalars['String'];
};

export type SessionCountAggregate = {
  __typename?: 'SessionCountAggregate';
  _all: Scalars['Int'];
  data: Scalars['Int'];
  expiresAt: Scalars['Int'];
  id: Scalars['Int'];
  sid: Scalars['Int'];
};

export type SessionCountOrderByAggregateInput = {
  data?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sid?: InputMaybe<SortOrder>;
};

export type SessionCreateInput = {
  data: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  id: Scalars['String'];
  sid: Scalars['String'];
};

export type SessionCreateManyInput = {
  data: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  id: Scalars['String'];
  sid: Scalars['String'];
};

export type SessionGroupBy = {
  __typename?: 'SessionGroupBy';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  data: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  id: Scalars['String'];
  sid: Scalars['String'];
};

export type SessionMaxAggregate = {
  __typename?: 'SessionMaxAggregate';
  data?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  sid?: Maybe<Scalars['String']>;
};

export type SessionMaxOrderByAggregateInput = {
  data?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sid?: InputMaybe<SortOrder>;
};

export type SessionMinAggregate = {
  __typename?: 'SessionMinAggregate';
  data?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  sid?: Maybe<Scalars['String']>;
};

export type SessionMinOrderByAggregateInput = {
  data?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sid?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithAggregationInput = {
  _count?: InputMaybe<SessionCountOrderByAggregateInput>;
  _max?: InputMaybe<SessionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SessionMinOrderByAggregateInput>;
  data?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sid?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  data?: InputMaybe<SortOrder>;
  expiresAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sid?: InputMaybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  Data = 'data',
  ExpiresAt = 'expiresAt',
  Id = 'id',
  Sid = 'sid'
}

export type SessionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  data?: InputMaybe<StringWithAggregatesFilter>;
  expiresAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  sid?: InputMaybe<StringWithAggregatesFilter>;
};

export type SessionUpdateInput = {
  data?: InputMaybe<StringFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyMutationInput = {
  data?: InputMaybe<StringFieldUpdateOperationsInput>;
  expiresAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sid?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  data?: InputMaybe<StringFilter>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sid?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  sid?: InputMaybe<Scalars['String']>;
};

export type SignupInput = {
  acceptsPrivacyPolicy: Scalars['Boolean'];
  acceptsTermsOfService: Scalars['Boolean'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  schoolEmail: Scalars['String'];
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
  school: School;
  schoolId: Scalars['String'];
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
  schoolId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  acceptsPrivacyPolicy?: InputMaybe<SortOrder>;
  acceptsTermsOfService?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  roles?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  acceptsPrivacyPolicy?: InputMaybe<Scalars['Boolean']>;
  acceptsTermsOfService?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<UserCreaterolesInput>;
  school?: InputMaybe<SchoolCreateNestedOneWithoutUsersInput>;
};

export type UserCreateManyInput = {
  acceptsPrivacyPolicy?: InputMaybe<Scalars['Boolean']>;
  acceptsTermsOfService?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<UserCreaterolesInput>;
  schoolId?: InputMaybe<Scalars['String']>;
};

export type UserCreateManySchoolInput = {
  acceptsPrivacyPolicy?: InputMaybe<Scalars['Boolean']>;
  acceptsTermsOfService?: InputMaybe<Scalars['Boolean']>;
  address?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<UserCreaterolesInput>;
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
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<UserCreaterolesInput>;
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
  schoolId: Scalars['String'];
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
  schoolId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  acceptsPrivacyPolicy?: InputMaybe<SortOrder>;
  acceptsTermsOfService?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
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
  schoolId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  acceptsPrivacyPolicy?: InputMaybe<SortOrder>;
  acceptsTermsOfService?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
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
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  roles?: InputMaybe<SortOrder>;
  schoolId?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  acceptsPrivacyPolicy?: InputMaybe<SortOrder>;
  acceptsTermsOfService?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  roles?: InputMaybe<SortOrder>;
  school?: InputMaybe<SchoolOrderByWithRelationInput>;
  schoolId?: InputMaybe<SortOrder>;
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
  SchoolId = 'schoolId',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  acceptsPrivacyPolicy?: InputMaybe<BoolFilter>;
  acceptsTermsOfService?: InputMaybe<BoolFilter>;
  address?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  roles?: InputMaybe<EnumRolesNullableListFilter>;
  schoolId?: InputMaybe<StringFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  acceptsPrivacyPolicy?: InputMaybe<BoolWithAggregatesFilter>;
  acceptsTermsOfService?: InputMaybe<BoolWithAggregatesFilter>;
  address?: InputMaybe<StringNullableWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  phone?: InputMaybe<StringNullableWithAggregatesFilter>;
  roles?: InputMaybe<EnumRolesNullableListFilter>;
  schoolId?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserUpdateInput = {
  acceptsPrivacyPolicy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  acceptsTermsOfService?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roles?: InputMaybe<UserUpdaterolesInput>;
  school?: InputMaybe<SchoolUpdateOneRequiredWithoutUsersInput>;
};

export type UserUpdateManyMutationInput = {
  acceptsPrivacyPolicy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  acceptsTermsOfService?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roles?: InputMaybe<UserUpdaterolesInput>;
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
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roles?: InputMaybe<UserUpdaterolesInput>;
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
  acceptsPrivacyPolicy?: InputMaybe<BoolFilter>;
  acceptsTermsOfService?: InputMaybe<BoolFilter>;
  address?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  roles?: InputMaybe<EnumRolesNullableListFilter>;
  school?: InputMaybe<SchoolRelationFilter>;
  schoolId?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
};

export type CreatePlayerAttendanceMutationVariables = Exact<{
  data: PlayerAttendanceCreateInput;
}>;


export type CreatePlayerAttendanceMutation = { __typename?: 'Mutation', createPlayerAttendance: { __typename?: 'PlayerAttendance', id: string } };

export type PlayerAttendancesQueryVariables = Exact<{
  where?: InputMaybe<PlayerAttendanceWhereInput>;
}>;


export type PlayerAttendancesQuery = { __typename?: 'Query', playerAttendances: Array<{ __typename?: 'PlayerAttendance', missAttendanceDate: any, reason: Missed_Reason, sport: Sports }> };

export type PlayerAttendancesBySchoolAndCategoriyQueryVariables = Exact<{
  where?: InputMaybe<PlayerAttendanceWhereInput>;
}>;


export type PlayerAttendancesBySchoolAndCategoriyQuery = { __typename?: 'Query', playerAttendances: Array<{ __typename?: 'PlayerAttendance', missAttendanceDate: any, playerId: string, reason: Missed_Reason, sport: Sports, player: { __typename?: 'Player', name: string, lastName: string, playerEmail: string } }> };

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

export type CreatePlayerMutationVariables = Exact<{
  data: PlayerCreateInput;
}>;


export type CreatePlayerMutation = { __typename?: 'Mutation', createPlayer: { __typename?: 'Player', id: string } };

export type UpdatePlayerMutationVariables = Exact<{
  data: PlayerUpdateInput;
  where: PlayerWhereUniqueInput;
}>;


export type UpdatePlayerMutation = { __typename?: 'Mutation', updatePlayer?: { __typename?: 'Player', id: string } | null };

export type PlayerQueryVariables = Exact<{
  where: PlayerWhereUniqueInput;
}>;


export type PlayerQuery = { __typename?: 'Query', player?: { __typename?: 'Player', lastName: string, name: string, image?: string | null } | null };

export type PlayerDataQueryVariables = Exact<{
  where: PlayerWhereUniqueInput;
}>;


export type PlayerDataQuery = { __typename?: 'Query', player?: { __typename?: 'Player', id: string, image?: string | null, lastName: string, playerEmail: string, name: string, schoolId: string, playerPaymentStatus: Player_Payment_Status, playerData: { __typename?: 'PlayerData', playerIdNumber: string, playerIdType: Ndi_Type, playerIdExpeditionPlace?: string | null, playerPhone?: string | null, birthday?: any | null, placeOfBirth?: string | null, id: string, gender: Gender }, playerGuardian?: { __typename?: 'PlayerGuardian', guardianEmail: string, guardianId: string, guardianIdType: Ndi_Type, guardianIdExpeditionPlace: string, guardianLastName: string, guardianName: string, guardianPhone: string, guardianType: Guardian_Type } | null } | null };

export type PlayerCardSectionQueryVariables = Exact<{
  where: PlayerWhereUniqueInput;
}>;


export type PlayerCardSectionQuery = { __typename?: 'Query', player?: { __typename?: 'Player', playerPsychology?: { __typename?: 'PlayerPsychology', hobbies: Array<string>, personalQualities: Array<Personal_Qualities> } | null, playerSportData?: { __typename?: 'PlayerSportData', fieldPosition?: Field_Position | null } | null } | null };

export type PlayerMedicalDataQueryVariables = Exact<{
  where: PlayerWhereUniqueInput;
}>;


export type PlayerMedicalDataQuery = { __typename?: 'Query', player?: { __typename?: 'Player', playerMedical?: { __typename?: 'PlayerMedical', alergies: Array<string>, bloodType: string, diseases: Array<string>, healthProvider: string, height: string, IMC: string, observations?: string | null, weight: string } | null, playerInjuries?: { __typename?: 'PlayerInjuries', name: string, observations: string, occurrenceDate: any } | null, playerSurgeries?: { __typename?: 'PlayerSurgeries', name: string, observations?: string | null, performedDate: any } | null } | null };

export type PlayerSportDataQueryVariables = Exact<{
  where: PlayerWhereUniqueInput;
}>;


export type PlayerSportDataQuery = { __typename?: 'Query', player?: { __typename?: 'Player', playerSportData?: { __typename?: 'PlayerSportData', category?: Player_Category | null, admissionDate: any, observations?: string | null, previousSchool?: string | null, sport: Array<Sports>, shirtNumber?: string | null, fieldPosition?: Field_Position | null, handedness: Handedness } | null } | null };

export type GetPlayersFiltersQueryVariables = Exact<{
  where?: InputMaybe<PlayerWhereInput>;
}>;


export type GetPlayersFiltersQuery = { __typename?: 'Query', players: Array<{ __typename?: 'Player', id: string, image?: string | null, lastName: string, name: string, playerEmail: string, playerStatus: Player_Status, playerPaymentStatus: Player_Payment_Status, playerData: { __typename?: 'PlayerData', birthday?: any | null }, playerMedical?: { __typename?: 'PlayerMedical', weight: string, height: string } | null, playerSportData?: { __typename?: 'PlayerSportData', category?: Player_Category | null, fieldPosition?: Field_Position | null, shirtNumber?: string | null } | null }> };

export type GetPlayersQueryVariables = Exact<{
  where?: InputMaybe<PlayerWhereInput>;
}>;


export type GetPlayersQuery = { __typename?: 'Query', players: Array<{ __typename?: 'Player', name: string, lastName: string, playerEmail: string, _count?: { __typename?: 'PlayerCount', playerAttendances: number } | null, playerSportData?: { __typename?: 'PlayerSportData', category?: Player_Category | null, shirtNumber?: string | null, sport: Array<Sports> } | null }> };

export type PlayersQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PlayerWhereInput>;
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

export type GetNoAuthSchoolsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNoAuthSchoolsQuery = { __typename?: 'Query', schools: Array<{ __typename?: 'School', email: string, name: string }> };

export type SigninMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SigninMutation = { __typename?: 'Mutation', signin?: { __typename?: 'User', id: string } | null };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, address?: string | null, email: string, lastName: string, firstName: string, roles: Array<Roles>, phone?: string | null, school: { __typename?: 'School', id: string, email: string } } | null };

export type CreateCoachUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateCoachUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string } };


export const CreatePlayerAttendanceDocument = `
    mutation CreatePlayerAttendance($data: PlayerAttendanceCreateInput!) {
  createPlayerAttendance(data: $data) {
    id
  }
}
    `;
export const useCreatePlayerAttendanceMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreatePlayerAttendanceMutation, TError, CreatePlayerAttendanceMutationVariables, TContext>) =>
    useMutation<CreatePlayerAttendanceMutation, TError, CreatePlayerAttendanceMutationVariables, TContext>(
      ['CreatePlayerAttendance'],
      (variables?: CreatePlayerAttendanceMutationVariables) => fetcher<CreatePlayerAttendanceMutation, CreatePlayerAttendanceMutationVariables>(CreatePlayerAttendanceDocument, variables)(),
      options
    );
export const PlayerAttendancesDocument = `
    query PlayerAttendances($where: PlayerAttendanceWhereInput) {
  playerAttendances(where: $where) {
    missAttendanceDate
    reason
    sport
  }
}
    `;
export const usePlayerAttendancesQuery = <
      TData = PlayerAttendancesQuery,
      TError = unknown
    >(
      variables?: PlayerAttendancesQueryVariables,
      options?: UseQueryOptions<PlayerAttendancesQuery, TError, TData>
    ) =>
    useQuery<PlayerAttendancesQuery, TError, TData>(
      variables === undefined ? ['PlayerAttendances'] : ['PlayerAttendances', variables],
      fetcher<PlayerAttendancesQuery, PlayerAttendancesQueryVariables>(PlayerAttendancesDocument, variables),
      options
    );
export const PlayerAttendancesBySchoolAndCategoriyDocument = `
    query PlayerAttendancesBySchoolAndCategoriy($where: PlayerAttendanceWhereInput) {
  playerAttendances(where: $where) {
    missAttendanceDate
    playerId
    reason
    sport
    player {
      name
      lastName
      playerEmail
    }
  }
}
    `;
export const usePlayerAttendancesBySchoolAndCategoriyQuery = <
      TData = PlayerAttendancesBySchoolAndCategoriyQuery,
      TError = unknown
    >(
      variables?: PlayerAttendancesBySchoolAndCategoriyQueryVariables,
      options?: UseQueryOptions<PlayerAttendancesBySchoolAndCategoriyQuery, TError, TData>
    ) =>
    useQuery<PlayerAttendancesBySchoolAndCategoriyQuery, TError, TData>(
      variables === undefined ? ['PlayerAttendancesBySchoolAndCategoriy'] : ['PlayerAttendancesBySchoolAndCategoriy', variables],
      fetcher<PlayerAttendancesBySchoolAndCategoriyQuery, PlayerAttendancesBySchoolAndCategoriyQueryVariables>(PlayerAttendancesBySchoolAndCategoriyDocument, variables),
      options
    );
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
export const CreatePlayerDocument = `
    mutation CreatePlayer($data: PlayerCreateInput!) {
  createPlayer(data: $data) {
    id
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
export const UpdatePlayerDocument = `
    mutation UpdatePlayer($data: PlayerUpdateInput!, $where: PlayerWhereUniqueInput!) {
  updatePlayer(data: $data, where: $where) {
    id
  }
}
    `;
export const useUpdatePlayerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdatePlayerMutation, TError, UpdatePlayerMutationVariables, TContext>) =>
    useMutation<UpdatePlayerMutation, TError, UpdatePlayerMutationVariables, TContext>(
      ['UpdatePlayer'],
      (variables?: UpdatePlayerMutationVariables) => fetcher<UpdatePlayerMutation, UpdatePlayerMutationVariables>(UpdatePlayerDocument, variables)(),
      options
    );
export const PlayerDocument = `
    query Player($where: PlayerWhereUniqueInput!) {
  player(where: $where) {
    lastName
    name
    image
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
export const PlayerDataDocument = `
    query PlayerData($where: PlayerWhereUniqueInput!) {
  player(where: $where) {
    id
    image
    lastName
    playerEmail
    name
    schoolId
    playerPaymentStatus
    playerData {
      playerIdNumber
      playerIdType
      playerIdExpeditionPlace
      playerPhone
      birthday
      placeOfBirth
      id
      gender
    }
    playerGuardian {
      guardianEmail
      guardianId
      guardianIdType
      guardianIdExpeditionPlace
      guardianLastName
      guardianName
      guardianPhone
      guardianType
    }
  }
}
    `;
export const usePlayerDataQuery = <
      TData = PlayerDataQuery,
      TError = unknown
    >(
      variables: PlayerDataQueryVariables,
      options?: UseQueryOptions<PlayerDataQuery, TError, TData>
    ) =>
    useQuery<PlayerDataQuery, TError, TData>(
      ['PlayerData', variables],
      fetcher<PlayerDataQuery, PlayerDataQueryVariables>(PlayerDataDocument, variables),
      options
    );
export const PlayerCardSectionDocument = `
    query PlayerCardSection($where: PlayerWhereUniqueInput!) {
  player(where: $where) {
    playerPsychology {
      hobbies
      personalQualities
    }
    playerSportData {
      fieldPosition
    }
  }
}
    `;
export const usePlayerCardSectionQuery = <
      TData = PlayerCardSectionQuery,
      TError = unknown
    >(
      variables: PlayerCardSectionQueryVariables,
      options?: UseQueryOptions<PlayerCardSectionQuery, TError, TData>
    ) =>
    useQuery<PlayerCardSectionQuery, TError, TData>(
      ['PlayerCardSection', variables],
      fetcher<PlayerCardSectionQuery, PlayerCardSectionQueryVariables>(PlayerCardSectionDocument, variables),
      options
    );
export const PlayerMedicalDataDocument = `
    query PlayerMedicalData($where: PlayerWhereUniqueInput!) {
  player(where: $where) {
    playerMedical {
      alergies
      bloodType
      diseases
      healthProvider
      height
      IMC
      observations
      weight
    }
    playerInjuries {
      name
      observations
      occurrenceDate
    }
    playerSurgeries {
      name
      observations
      performedDate
    }
  }
}
    `;
export const usePlayerMedicalDataQuery = <
      TData = PlayerMedicalDataQuery,
      TError = unknown
    >(
      variables: PlayerMedicalDataQueryVariables,
      options?: UseQueryOptions<PlayerMedicalDataQuery, TError, TData>
    ) =>
    useQuery<PlayerMedicalDataQuery, TError, TData>(
      ['PlayerMedicalData', variables],
      fetcher<PlayerMedicalDataQuery, PlayerMedicalDataQueryVariables>(PlayerMedicalDataDocument, variables),
      options
    );
export const PlayerSportDataDocument = `
    query PlayerSportData($where: PlayerWhereUniqueInput!) {
  player(where: $where) {
    playerSportData {
      category
      admissionDate
      observations
      previousSchool
      sport
      shirtNumber
      fieldPosition
      handedness
    }
  }
}
    `;
export const usePlayerSportDataQuery = <
      TData = PlayerSportDataQuery,
      TError = unknown
    >(
      variables: PlayerSportDataQueryVariables,
      options?: UseQueryOptions<PlayerSportDataQuery, TError, TData>
    ) =>
    useQuery<PlayerSportDataQuery, TError, TData>(
      ['PlayerSportData', variables],
      fetcher<PlayerSportDataQuery, PlayerSportDataQueryVariables>(PlayerSportDataDocument, variables),
      options
    );
export const GetPlayersFiltersDocument = `
    query GetPlayersFilters($where: PlayerWhereInput) {
  players(where: $where) {
    id
    image
    lastName
    name
    playerEmail
    playerStatus
    playerPaymentStatus
    playerData {
      birthday
    }
    playerMedical {
      weight
      height
    }
    playerSportData {
      category
      fieldPosition
      shirtNumber
    }
  }
}
    `;
export const useGetPlayersFiltersQuery = <
      TData = GetPlayersFiltersQuery,
      TError = unknown
    >(
      variables?: GetPlayersFiltersQueryVariables,
      options?: UseQueryOptions<GetPlayersFiltersQuery, TError, TData>
    ) =>
    useQuery<GetPlayersFiltersQuery, TError, TData>(
      variables === undefined ? ['GetPlayersFilters'] : ['GetPlayersFilters', variables],
      fetcher<GetPlayersFiltersQuery, GetPlayersFiltersQueryVariables>(GetPlayersFiltersDocument, variables),
      options
    );
export const GetPlayersDocument = `
    query GetPlayers($where: PlayerWhereInput) {
  players(where: $where) {
    name
    lastName
    playerEmail
    _count {
      playerAttendances
    }
    playerSportData {
      category
      shirtNumber
      sport
    }
  }
}
    `;
export const useGetPlayersQuery = <
      TData = GetPlayersQuery,
      TError = unknown
    >(
      variables?: GetPlayersQueryVariables,
      options?: UseQueryOptions<GetPlayersQuery, TError, TData>
    ) =>
    useQuery<GetPlayersQuery, TError, TData>(
      variables === undefined ? ['GetPlayers'] : ['GetPlayers', variables],
      fetcher<GetPlayersQuery, GetPlayersQueryVariables>(GetPlayersDocument, variables),
      options
    );
export const PlayersDocument = `
    query Players($take: Int, $skip: Int, $where: PlayerWhereInput) {
  players(take: $take, skip: $skip, where: $where) {
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
export const GetNoAuthSchoolsDocument = `
    query GetNoAuthSchools {
  schools {
    email
    name
  }
}
    `;
export const useGetNoAuthSchoolsQuery = <
      TData = GetNoAuthSchoolsQuery,
      TError = unknown
    >(
      variables?: GetNoAuthSchoolsQueryVariables,
      options?: UseQueryOptions<GetNoAuthSchoolsQuery, TError, TData>
    ) =>
    useQuery<GetNoAuthSchoolsQuery, TError, TData>(
      variables === undefined ? ['GetNoAuthSchools'] : ['GetNoAuthSchools', variables],
      fetcher<GetNoAuthSchoolsQuery, GetNoAuthSchoolsQueryVariables>(GetNoAuthSchoolsDocument, variables),
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
    school {
      id
      email
    }
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
export const CreateCoachUserDocument = `
    mutation CreateCoachUser($data: UserCreateInput!) {
  createUser(data: $data) {
    id
  }
}
    `;
export const useCreateCoachUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateCoachUserMutation, TError, CreateCoachUserMutationVariables, TContext>) =>
    useMutation<CreateCoachUserMutation, TError, CreateCoachUserMutationVariables, TContext>(
      ['CreateCoachUser'],
      (variables?: CreateCoachUserMutationVariables) => fetcher<CreateCoachUserMutation, CreateCoachUserMutationVariables>(CreateCoachUserDocument, variables)(),
      options
    );