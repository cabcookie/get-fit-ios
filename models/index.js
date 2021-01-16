// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TrainingType = {
  "RUNNING_INTERVALL": "RUNNING_INTERVALL",
  "RUNNING_WITH_BREAKS": "RUNNING_WITH_BREAKS",
  "RUNNING": "RUNNING",
  "RUNNING_SLOWLY": "RUNNING_SLOWLY",
  "WALKING": "WALKING",
  "WALKING_SLOWLY": "WALKING_SLOWLY",
  "RUNNING_INTERVALL_SLOWLY": "RUNNING_INTERVALL_SLOWLY",
  "WALKING_INTERVALL": "WALKING_INTERVALL"
};

const { Training, User, TrainingDetails, TrainingExecution, TrainingResults, RunningIntervall, RunningWithBreaks, Running } = initSchema(schema);

export {
  Training,
  User,
  TrainingType,
  TrainingDetails,
  TrainingExecution,
  TrainingResults,
  RunningIntervall,
  RunningWithBreaks,
  Running
};