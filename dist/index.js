"use strict";
const result = document.querySelector("#result");
const numbers = document.querySelectorAll(".numbers");
// const clear = document.querySelector("#clear")! as HTMLElement;
// const del = document.querySelector("#del")! as HTMLElement;
// const percent = document.querySelector("#percent")! as HTMLElement;
// const division = document.querySelector("#division")! as HTMLElement;
// const multi = document.querySelector("#multi")! as HTMLElement;
// const sub = document.querySelector("#sub")! as HTMLElement;
// const add = document.querySelector("#add")! as HTMLElement;
// const dot = document.querySelector("#dot")! as HTMLElement;
// const equal = document.querySelector("#equal")! as HTMLElement;
const marks = document.querySelectorAll(".marks");
let state = {
    current: [],
    compute: 0,
    value: "",
    sign: "",
};
numbers.forEach((btn) => {
    btn.addEventListener("click", () => {
        const _value = Number(btn.innerHTML);
        if (state.current.length >= 8) {
            return;
        }
        if (state.current.length === 0) {
            state.current.push(_value);
            state.value += String(_value);
        }
        else if (state.current.length === 0 && _value === 0) {
            state.current.push(0);
            state.value = String(0);
        }
        else if (state.current[0] === 0 && _value === 0) {
            return;
        }
        else if (state.current[0] === 0 && _value !== 0) {
            state.current[0] = _value;
            state.value = String(_value);
        }
        else if (state.current.length === 0 && _value !== 0) {
            state.current.push(_value);
            state.value += String(_value);
        }
        else {
            state.current.push(_value);
            state.value += String(_value);
        }
        result.value = state.value;
        console.log("_value :", state);
    });
});
marks.forEach((mark) => {
    mark.addEventListener("click", () => {
        const _value = mark.innerHTML;
        console.log("case", _value);
        switch (_value) {
            case "AC":
                state.current = [];
                result.value = "0";
                state.value = "";
                break;
            case "C":
                state.current.pop();
                result.value = result.value.slice(0, -1);
                state.value = result.value;
                break;
            case "+":
                plusNumber();
                state.sign = "+";
                break;
            case "-":
                minusNumber();
                state.sign = "-";
                break;
            case "÷":
                divisionNumber();
                state.sign = "÷";
                break;
            case "-":
                // minusNumber();
                // state.sign = "-";
                break;
            case "=":
                equalsNumber();
                break;
            default:
                break;
        }
    });
});
const plusNumber = () => {
    let _value = "";
    for (const item of state.current) {
        if (state.current.length === 1) {
            _value = item.toString().trim();
        }
        else {
            _value += item.toString().trim();
        }
    }
    state.compute += Number(_value);
    state.current = [];
    result.value = "0";
    state.value = "";
    console.log(state.compute);
};
const minusNumber = () => {
    let _value = "";
    for (const item of state.current) {
        if (state.current.length === 1) {
            _value = item.toString().trim();
        }
        else {
            _value += item.toString().trim();
        }
    }
    state.compute -= Number(_value);
    state.current = [];
    result.value = "0";
    state.value = "";
    console.log(state.compute);
};
const divisionNumber = () => {
    let _value = "";
    for (const item of state.current) {
        if (state.current.length === 1) {
            _value = item.toString().trim();
        }
        else {
            _value += item.toString().trim();
        }
    }
    if (state.compute === 0) {
        state.compute = Number(_value);
    }
    else if (state.compute !== 0) {
        state.compute = state.compute / Number(_value);
    }
    else {
        return;
    }
    state.current = [];
    result.value = "0";
    state.value = "";
    console.log(state.compute);
};
const equalsNumber = () => {
    if (state.current.length !== 0) {
        switch (state.sign) {
            case "+":
                plusNumber();
                state.sign = "";
                break;
            case "-":
                minusNumber();
                state.sign = "";
                break;
            case "÷":
                divisionNumber();
                state.sign = "";
                break;
            default:
                break;
        }
    }
    else {
        return;
    }
    state.current = [];
    state.value = String(state.compute);
    result.value = state.value;
    state.compute = 0;
    console.log(state.compute);
};
