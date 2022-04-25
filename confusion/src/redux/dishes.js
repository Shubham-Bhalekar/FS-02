import { ADD_DISHES, DISHES_FAILED, DISHES_LOADING } from "./ActionTypes";

export const Dishes = (state = { isLoading: true,
    errMess: null,
    dishes:[]}, action) => {
    switch (action.type) {
        case ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};
