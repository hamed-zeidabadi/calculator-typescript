"use strict";
const result = document.querySelector("#result");
const numbers = document.querySelectorAll(".numbers");
const clear = document.querySelector("#clear");
const del = document.querySelector("#del");
const percent = document.querySelector("#percent");
const division = document.querySelector("#division");
const multi = document.querySelector("#multi");
const sub = document.querySelector("#sub");
const add = document.querySelector("#add");
const dot = document.querySelector("#dot");
const equal = document.querySelector("#equal");
let state = {
    current: [],
    prev: [],
    compute: 0,
};
numbers.forEach((btn) => {
    btn.addEventListener("click", () => {
        const _value = Number(btn.innerHTML);
        if (state.current.length === 0) {
            state.current.push(_value);
        }
        else if (state.current.length === 0 && _value === 0) {
            state.current.push(0);
        }
        else if (state.current[0] === 0 && _value === 0) {
            return;
        }
        else if (state.current.length === 0 && _value !== 0) {
            state.current.push(_value);
        }
        else {
            state.current.push(_value);
        }
        console.log("_value :", state);
    });
});
clear.addEventListener("click", () => {
    state.current = [];
    console.log(state.current);
});
del.addEventListener("click", () => {
    state.current.pop();
    console.log(state.current);
});
add.addEventListener("click", () => {
    let { current, prev, compute } = state;
    let _value = "";
    for (const item of current) {
        _value += item.toString().trim();
    }
    if (current.length === 0) {
        const _valueToNumber = Number(_value);
        state.prev.push(_valueToNumber);
        state.current = [];
    }
    else {
        const _valueToNumber = Number(_value);
    }
    console.log("add");
});
