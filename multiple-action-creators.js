const redux =require('redux');
const createStore=redux.createStore;

const intialState={
    numberOfBooks:10,
    numberOfPens:15
}

// action creator: wraping the action in a single function
function buyBook(){
    return {
        type:"Buy_Book",
        payload:"My First Action"
    }
}

function buyPen(){
    return {
        type:"Buy_Pen",
        payload:"My Second Action"
    }
}
// (prevState,action)=>newState

const Reducer =(state=intialState,action)=>{
    switch(action.type){
        case "Buy_Book":return{
            ...state,
            numberOfBooks:state.numberOfBooks-1
        }

        case "Buy_Pen":return{
            ...state,
            numberOfPens:state.numberOfPens-2
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
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
unsubscribe();
