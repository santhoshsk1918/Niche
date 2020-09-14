
const incrementReducer = (state, action) => {
    switch (action.type) {
        case "RESET_VALUES": 
            return {...state, value: 0}
        case "ADD_VALUE": 
            let newValue = state.value + action.payload
            console.log(newValue);
            console.log(action)
            return {...state, value: newValue}
        
        case "DECREMENT_VALUE": 
            let newDecValue = state.value - action.payload
            console.log(action)
            return {...state, value: newDecValue}
        
    }
}

export default incrementReducer;