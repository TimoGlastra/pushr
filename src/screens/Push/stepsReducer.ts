interface State {
  restSecondsBetweenSteps: number
  steps: number[]
  currentStep: number
  isResting: boolean
  isDone: boolean
}

type Action =
  | {
      type: 'COMPLETE_CURRENT_STEP'
    }
  | {
      type: 'END_REST'
    }

function stepsReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'COMPLETE_CURRENT_STEP':
      if (state.currentStep + 1 === state.steps.length) {
        return {
          ...state,
          currentStep: state.currentStep + 1,
          isDone: true,
        }
      } else if (state.currentStep === state.steps.length) {
        return state
      }

      return {
        ...state,
        currentStep: state.currentStep + 1,
        isResting: true,
      }

    case 'END_REST':
      return {
        ...state,
        isResting: false,
      }

    default:
      return state
  }
}

function isFinalStepSelector(state: State): boolean {
  return state.currentStep + 1 === state.steps.length
}

function pushupsForCurrentStepSelector(state: State) {
  return state.steps[state.currentStep]
}

export {
  Action,
  State,
  stepsReducer,
  isFinalStepSelector,
  pushupsForCurrentStepSelector,
}
