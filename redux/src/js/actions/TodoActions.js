import * as c from '../constants/TodoConstants';

export function createTodo (text) {
  console.log('Check 2');
  var id = Date.now();
  var data = {
    id,
    text
  };

  return { type: c.TODO_CREATE, payload: data};

  /*return function (dispatch) {
    console.log('check 2.1');
    dispatch({
      type: c.TODO_CREATE,
      payload: data
    });
  };*/

}
