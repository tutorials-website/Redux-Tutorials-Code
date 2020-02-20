
const redux =require('redux');
const createStore=redux.createStore;

const intialState={
    numberOfBooks:10,
}

// action creator: wraping the action in a single function
function buyBook(){
    return {
        type:"Buy_Book",
        payload:"My First Action"
    }
}

// (prevState,action)=>newState

const Reducer =(state=intialState,action)=>{
    switch(action.type){
        case "Buy_Book":return{
            ...state,
            numberOfBooks:state.numberOfBooks-1
        }


        default: return state;
    }
}

const store =createStore(Reducer);
console.log("Initial State",store.getState());
const unsubscribe=store.subscribe(()=>{console.log('Updated State Value', store.getState())});
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
unsubscribe();
