import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../logic/actions/actions";

import "./TestClassComponent.scss";

class TestClassComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.init();
    }

    init() {
        console.log("run init")
    }

    onButtonClick = () => {
        this.props.testExampleAction();
    }

    render() {
        return (
            <div className="test-example-component">
                <div className="test-example-button" onClick={this.onButtonClick}>
                    {"Nyomj meg!"}
                </div>

                <div className="test-example-value">
                    {"Ennyiszer nyomtad meg: " + this.props.count}
                </div>
            </div>
        );
    }
}

const makeMapStateToProps = () => {

    const mapStateToProps = (state, props) => {
        return {
            count: state.testExampleReducer.testExampleCount
        };
    };
    return mapStateToProps;
};

function mapDispatchToProps(dispatch) {
    return Object.assign({ dispatch: dispatch }, bindActionCreators(ActionCreators, dispatch));
}

export default connect(makeMapStateToProps, mapDispatchToProps)(TestClassComponent);
