import React, {useState, useContext} from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { IncrementContext } from '../Context/IncrementContext'

export default function Increment(prop) {

    const {incrementValue, dispatch} = useContext(IncrementContext)
    const [value, setvalue] = useState({curValue: 0})
    
    if(incrementValue.value === 0 && value.curValue != 0){
        console.log("123")
        setvalue((state) => {
            return {...state, curValue: 0}
        })
    }

    const increment = () => {
        setvalue((state) => {
            return {...state, curValue: state.curValue + 1}
        })
        dispatch({type: "ADD_VALUE", payload: 1})
    }

    const decrement = () => {
        let itm = value.curValue;
        setvalue((state) => {
            return {...state, curValue: 0}
        })

        dispatch({type: "DECREMENT_VALUE", payload: itm})
    }


    return (
        <Col className={"bg-secondary ml-2"} md={2}>
            <div className={"ml-2"}>
                <Row>
                    <h4>Value: {value.curValue}</h4>
                </Row>
                <Row>
                    <Button onClick={increment}>Increment</Button>
                </Row>
                <Row className={"mt-2 mb-2"}>
                    <Button onClick={decrement}>Reset</Button>
                </Row>
            </div>
        </Col>
    )
}
