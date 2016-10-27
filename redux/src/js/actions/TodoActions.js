import * as c from '../constants/TodoConstants';

export function createTodo (text) {
  var id = Date.now();

  var data = {
    id,
    text
  };
  return { type: c.TODO_CREATE, payload: data};
  
}
