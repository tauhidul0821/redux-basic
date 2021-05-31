import store from "./store";

console.log(store.getState());

const unsubscribe = store.subscribe(()=>{
  console.log('store change',store.getState());
});

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'bug1'
  }
});

unsubscribe();

store.dispatch({
  type: 'bugRemoved',
  payload: {
    id:1
  }
});



console.log(store);
console.log(store.getState());