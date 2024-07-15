export enum PlanState {
    UNKNOWN = 'UNKNOWN',
    PENDING = 'PENDING',
    RUNNING = 'RUNNING',
    SUCCESSFUL = 'SUCCESSFUL',
    FAILED = 'FAILED',
    NO_VALID_PLAN_FOUND = 'NO_VALID_PLAN_FOUND',
    CANCELLATION_PENDING = 'CANCELLATION_PENDING',

    // to following states are used only in ui
    RELEASED = 'RELEASED',
    RELEASE_RUNNING = 'RELEASE_RUNNING',
}

/**
'UNKNOWN': Job id is unknown
'PENDING': Job was submitted and is waiting to be processed
'RUNNING': Job is currently being optimized
'SUCCESSFUL': Optimization has succeeded
'FAILED': An error occurred during runtime
'NO_VALID_PLAN_FOUND': The optimization was started but could not find a valid plan (where all constraints are satisfied) before the stopping criteria were met # not implemented yet!
'CANCELLATION_PENDING': The job is currently being canceled. This might take a while as a job can only be canceled when the next worker is available
 */
