import { configureStore } from "@reduxjs/toolkit";
import { createContext } from "react";

const initialState = {
    count: 0,
    time: 30
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "time":
            return {
                count: state.count,
                time: state.time - 1
            };
        case "increment":
            return {
                count: state.count + 1,
                time: state.time
            };
        case "decrement":
            return {
                count: state.count - 1,
                time: state.time
            }
        case "update":
            return {
                count: action.payload,
                time: state.time
            }
        default:
            return state
    }
};

const store = configureStore({
    reducer: reducer
});

export default store;

export function increment() {
    return {
        type: "increment"
    };
}

export function decrement() {
    return {
        type: "decrement"
    };
}

export function zero() {
    return {
        type: "update",
        payload: 0
    };
}

export function time() {
    return {
        type: "time"
    }
}

export const TimeContext = createContext(false);
