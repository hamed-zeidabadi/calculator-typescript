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
};
const updateResult = () => {
    let _value = "";
    for (const item of state.current) {
        _value = item.toString().trim();
    }
    result.value = _value;
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
        updateResult();
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
                break;
            case "C":
                state.current.pop();
                break;
            case "+":
                plusNumber();
                break;
            case "-":
                minusNumber();
                break;
            case "=":
                // equalsNumber();
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
    console.log(state.compute);
};
// const equalsNumber = (): any => {
//   let _value: string = "";
//   for (const item of state.current) {
//     if (state.current.length === 1) {
//       _value = item.toString().trim();
//     } else {
//       _value += item.toString().trim();
//     }
//   }
//   state.compute -= Number(_value);
//   state.current = [];
//   console.log(state.compute);
// };
