import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum TrainingType {
  RUNNING_INTERVALL = "RUNNING_INTERVALL",
  RUNNING_WITH_BREAKS = "RUNNING_WITH_BREAKS",
  RUNNING = "RUNNING",
  RUNNING_SLOWLY = "RUNNING_SLOWLY",
  WALKING = "WALKING",
  WALKING_SLOWLY = "WALKING_SLOWLY",
  RUNNING_INTERVALL_SLOWLY = "RUNNING_INTERVALL_SLOWLY",
  WALKING_INTERVALL = "WALKING_INTERVALL"
}

export declare class TrainingDetails {
  readonly totalMinutes?: number;
  readonly intervalls?: number;
  readonly minutesPerIntervall?: number;
  readonly minutesBetweenIntervalls?: number;
  constructor(init: ModelInit<TrainingDetails>);
}

export declare class TrainingExecution {
  readonly executionId?: string;
  readonly trainingStarted?: string;
  readonly trainingFinished?: string;
  constructor(init: ModelInit<TrainingExecution>);
}

export declare class TrainingResults {
  readonly resultSeconds?: number;
  readonly resultAverageBpm?: number;
  readonly resultCalories?: number;
  readonly resultMeters?: number;
  constructor(init: ModelInit<TrainingResults>);
}

export declare class RunningIntervall {
  readonly totalMinutes?: number;
  readonly intervalls?: number;
  readonly minutesPerIntervall?: number;
  readonly minutesBetweenIntervalls?: number;
  readonly intervallBpmPercentFrom?: number;
  readonly intervallBpmPercentTo?: number;
  readonly breakBpmPercentFrom?: number;
  readonly breakBpmPercentTo?: number;
  readonly resultMeters?: number;
  constructor(init: ModelInit<RunningIntervall>);
}

export declare class RunningWithBreaks {
  readonly intervalls?: number;
  readonly minutesPerIntervall?: number;
  readonly minutesBetweenIntervalls?: number;
  readonly runningBpmPercentFrom?: number;
  readonly runningBpmPercentTo?: number;
  readonly resultMeters?: number;
  constructor(init: ModelInit<RunningWithBreaks>);
}

export declare class Running {
  readonly totalMinutes?: number;
  readonly runningBpmPercentFrom?: number;
  readonly runningBpmPercentTo?: number;
  readonly resultMeters?: number;
  constructor(init: ModelInit<Running>);
}

export declare class Training {
  readonly id: string;
  readonly trainingType?: TrainingType | keyof typeof TrainingType;
  readonly date?: string;
  readonly trainingDetails?: TrainingDetails;
  readonly executionDetails?: TrainingExecution;
  readonly resultDetails?: TrainingResults;
  readonly schemaVersion?: number;
  readonly runningIntervall?: RunningIntervall;
  readonly runningWithBreaks?: RunningWithBreaks;
  readonly name?: string;
  readonly running?: Running;
  readonly executionId?: string;
  readonly trainingStarted?: string;
  readonly trainingFinished?: string;
  readonly resultSeconds?: number;
  readonly resultAverageBpm?: number;
  readonly resultCalories?: number;
  constructor(init: ModelInit<Training>);
  static copyOf(source: Training, mutator: (draft: MutableModel<Training>) => MutableModel<Training> | void): Training;
}

export declare class User {
  readonly id: string;
  readonly username?: string;
  readonly birthYear?: number;
  readonly iftttTrigger?: string;
  readonly iftttKey?: string;
  readonly schemaVersion?: number;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}