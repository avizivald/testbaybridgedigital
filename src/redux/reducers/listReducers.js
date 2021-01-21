import {
    ADD_ITEM,
} from '../actions'
function manageList(state = { items: {} }, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: {
                  ...state.items, [action.name]: action.details
                }
              }
        default:
            return state
    }
}
export default manageList;