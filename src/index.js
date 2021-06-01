import store from "./store";
import { bugAdded,bugResolved } from "./actions";

console.log(store.getState());

store.subscribe(()=>{
  console.log('store change',store.getState());
});

store.dispatch(bugAdded('bug 1 suhifh'));

// unsubscribe();

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id:1
//   }
// });

store.dispatch(bugResolved(1));

console.log(store);
console.log(store.getState());