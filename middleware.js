const redux=require('redux');
const createStore=redux.createStore;
const combineReducers=redux.combineReducers;
const applyMiddleware =redux.applyMiddleware;

const intialStateBooks={
    numberOfBooks:10,
}

const intialStatePens={
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

const booksReducer =(state=intialStateBooks,action)=>{
    switch(action.type){
        case "Buy_Book":return{
            ...state,
            numberOfBooks:state.numberOfBooks-1
        }

        default: return state;
    }
}

const pensReducer =(state=intialStatePens,action)=>{
    switch(action.type){
        
        case "Buy_Pen":return{
            ...state,
            numberOfPens:state.numberOfPens-2
        }

        default: return state;
    }
}

const reducer=combineReducers({
    booksReducer,
   pensReducer
});

const logger=store=>{

    return next=>{
        return action=>{
            const result=next(action);
            console.log("middleware log",result);
            return result;
        }
    }
}



const store =createStore(reducer,applyMiddleware(logger));

console.log("Initial State",store.getState());
const unsubscribe=store.subscribe(()=>{console.log('Updated State Value', store.getState())});
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
unsubscribe();
