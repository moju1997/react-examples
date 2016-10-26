import dispatcher from '../dispatcher/TodoDispatcher';
import * as c from '../constants/TodoConstants';

export function createTodo (text) {
  return {
    type: c.TODO_CREATE,
    text: text
  };
}
