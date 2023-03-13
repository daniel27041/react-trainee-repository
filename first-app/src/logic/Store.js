import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import timerMiddleware from "redux-timer";
import reducers from "./reducers/index";
import { createLogger } from 'redux-logger'

const enhancers = [];
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
}

const Store = (function () {
    let instance;

    const logger = createLogger();

    function configureStore(initialState) {
        const enhancer = compose(
            applyMiddleware(thunk, timerMiddleware, logger),
            ...enhancers
        );

        return createStore(
            combineReducers(reducers),
            initialState,
            enhancer
        );
    }

    return {
        getStore: function () {
            if (!instance) {
                instance = configureStore({});
            }
            return instance;
        }
    };
})();
export default Store;