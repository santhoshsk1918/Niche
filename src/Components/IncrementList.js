import React, {useContext} from 'react'
import { IncrementContext } from '../Context/IncrementContext'
import { Row, Col, Button } from 'react-bootstrap'
import Increment from './Increment';

export default function IncrementList() {
    const {incrementValue, dispatch} = useContext(IncrementContext)
    let {value} = incrementValue;
  
    const resetAll = () => {
        dispatch({type: "RESET_VALUES"})
    }

    return (
        <React.Fragment>
            <Row>
                <Col md={4}></Col>
                <Col md={3}><h3>Value : {value}</h3></Col>
            </Row>        

            <Row>
                <Increment value={dispatch} />
                <Increment value={dispatch} />
            </Row>

            <Row className={"mt-5"}>
                <Button onClick={resetAll}>Reset All</Button>
            </Row>
        </React.Fragment>
    )
}
