import {INCREMENT_COUNT} from "./counterTypes";

const initialCount = {
    count: 0
}

const countReducer = (state = initialCount, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                initialCount: state.initialCount + 1
            }
        default:
            return state
    }
}

export default countReducer
