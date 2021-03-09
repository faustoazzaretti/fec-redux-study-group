import * as actionType from './actions';

const intialState = {
    tasks: []
};

const reducer = (state = intialState,action ) => {
    switch(action.type) {
        case actionType.ADD_TASK:
            return {
                ...state,
                tasks: state.tasks.concat({id: new Date(), task :action.toDo})
            }
    }
    return state;
}

export default reducer;