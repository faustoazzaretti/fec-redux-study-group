import * as actionType from './actions';

const intialState = {
    tasks: []
};

const reducer = (state = intialState,action ) => {
    switch(action.type) {
        case actionType.ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat({id: new Date, toDo :action.task})
            }
        case actionType.DELETE_TASK:
            const updatedArray = state.tasks.filter(task => task.id !== action.taskElId)
            return {
                ...state,
                tasks:updatedArray
            }
    }
    return state;
}

export default reducer;