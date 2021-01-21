/*
* action types
*/
export const ADD_ITEM = 'ADD_ITEM'
/*
* action creators
*/
export function addItem(name,details) {
return { type: ADD_ITEM, name ,details}
}