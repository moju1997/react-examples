import * as c from '../constants/TodoConstants';

var initialState = {
  todos: [
    {
      id: 876876978,
      text: 'Go Shopping'
    },
    {
      id: 65768578,
      text: 'Pay Water Bill'
    }
  ]
};

export default function todoReducer(state = initialState, action) {
  var tmp = state.todos;

  switch ( action.type ){
    case c.TODO_CREATE: {
      console.log('check 4');
      tmp.push(action.payload);
      state = Object.assign({}, state, { todos: tmp});
      break;
    }
  }
  return state;
}
