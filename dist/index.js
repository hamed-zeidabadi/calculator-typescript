"use strict";
//global variable
const result = document.querySelector("#result");
const numbers = document.querySelectorAll(".numbers");
const equal = document.querySelector("#equal");
const marks = document.querySelectorAll(".marks");
const historyList = document.querySelector(".history");
let childNodes = historyList.childNodes;
const body = document.querySelector("body");
const mode = document.querySelector("#mode");
//state value
let state = {
    current: [],
    compute: 0,
    value: "",
    sign: "",
    counter: []
};
//dark mode logic
mode.addEventListener("click", () => {
    const _mode = mode.getAttribute("data-mode");
    if (_mode === "false") {
        mode.className = "fa-solid fa-sun";
        mode.setAttribute("data-mode", "true");
        body.setAttribute("data-theme", "dark");
    }
    else {
        mode.className = "fa-solid fa-moon";
        mode.setAttribute("data-mode", "false");
        body.setAttribute("data-theme", "light");
    }
});
//calculator logic
numbers.forEach((btn) => {
    btn.addEventListener("click", () => {
        const _value = Number(btn.innerHTML);
        if (state.current.length >= 8) {
            return;
        }
        if (state.current.length === 0) {
            state.current.push(_value);
            result.value = String(_value);
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
        // console.log("_value :", state);
    });
});
marks.forEach((mark) => {
    mark.addEventListener("click", () => {
        const _value = mark.innerHTML;
        // console.log("case", _value);
        switch (_value) {
            case "AC":
                state.current = [];
                result.value = "";
                state.value = result.value;
                state.compute = 0;
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
            case "??":
                divisionNumber();
                state.sign = "??";
                break;
            case "X":
                multipliedNumber();
                state.sign = "X";
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
    result.value = "";
    state.value = "";
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
    const _num = state.compute - Number(_value);
    if (state.compute === 0) {
        state.compute = _num * -1;
    }
    else {
        state.compute = _num;
    }
    state.current = [];
    result.value = "";
    state.value = "";
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
        // console.log("/ :", 10 / 5);
    }
    else {
        return;
    }
    state.current = [];
    result.value = "";
    state.value = "";
};
const multipliedNumber = () => {
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
        state.compute = state.compute * Number(_value);
    }
    else {
        return;
    }
    state.current = [];
    result.value = "";
    state.value = "";
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
            case "??":
                divisionNumber();
                state.sign = "";
                break;
            case "X":
                multipliedNumber();
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
    createHistory(String(state.compute));
};
//history logic
const createHistory = (x) => {
    state.counter.push(Number(x));
    const tag = document.createElement('a');
    historyList.appendChild(tag);
    tag.classList.add('tag-list');
    tag.innerHTML = String(x);
    state.current = [];
    state.value = '';
    state.compute = 0;
    if (state.counter.length > 6) {
        const firstChild = historyList.firstChild;
        historyList.removeChild(firstChild);
    }
    updateNode();
};
//update node list logic
const updateNode = () => {
    childNodes.forEach(element => {
        element.addEventListener('click', () => {
            element.remove();
        });
    });
};
