import React, {useContext, useReducer} from 'react';
import incrementReducer from "./incrementReducer"


export  const IncrementContext = React.createContext({value : 0});

const IncrementContextProvider = (props) => {
    const [incrementValue, dispatch] = useReducer(incrementReducer, {value : 0});

    return(
        <IncrementContext.Provider value={{incrementValue, dispatch}}>
            {props.children}
        </IncrementContext.Provider>
    )
}

export default IncrementContextProvider

