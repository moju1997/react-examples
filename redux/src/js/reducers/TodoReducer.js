var initailState = {
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

  swith ( action.type ){
    case TODO_CREATE: {

      break;
    }
  }
  return state;
}
