export function counterReducer(state = 10, action) {

    switch(action.type) {
  
      case 'INCREMENT':
        console.log(state);
        return {
          counter: state.counter + 1
        }
       
      case 'DECREMENT': 
        return {
          counter: state.counter - 1
        }
  
      default: 
        return {counter: state}
  
    }
   
  }