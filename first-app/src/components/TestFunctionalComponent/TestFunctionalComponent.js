import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ActionCreators } from "../../logic/actions/actions";

import "./TestFunctionalComponent.scss";

const TestFunctionalComponent = (props) => {

    const dispatch = useDispatch();

    const count = useSelector(state => state.testExampleReducer.testExampleCount);


    useEffect(() => {
        init();
    }, [count]);

    const onButtonClick = () => {
        dispatch(ActionCreators.testExampleAction());
    }

    const init = () => { 
        console.log("run init")
    }

    return (
        <div className="test-example-component">
            <div className="test-example-button" onClick={onButtonClick}>
                {"Nyomj meg!"}
            </div>

            <div className="test-example-value">
                {"Ennyiszer nyomtad meg: " + count}
            </div>
        </div>
    );

}

export default TestFunctionalComponent;