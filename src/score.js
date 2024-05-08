import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createContext } from "react";

const initialCount = 0;
const initialTime = 30;

const countReducer = (state = initialCount, action) => {
    switch (action.type) {
        case "count/increment":
            return state + 1;
        case "count/decrement":
            return state - 1;
        case "count/update":
            return action.payload;
        default:
            return state
    }
};

const timeReducer = (state = initialTime, action) => {
    switch (action.type) {
        case "time/tick":
            return state - 1;
        default:
            return state
    }
};

const reducer = combineReducers({
    count: countReducer,
    time: timeReducer
  });

const store = configureStore({
    reducer: reducer
});

export default store;

export function increment() {
    return {
        type: "count/increment"
    };
}

export function decrement() {
    return {
        type: "count/decrement"
    };
}

export function zero() {
    return {
        type: "count/update",
        payload: 0
    };
}

export function time() {
    return {
        type: "time/tick"
    }
}

export const TimeContext = createContext(false);
