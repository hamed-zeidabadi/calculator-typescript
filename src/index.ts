const result = document.querySelector("#result")! as HTMLInputElement;
const numbers = document.querySelectorAll(".numbers")!;
// const del = document.querySelector("#del")! as HTMLElement;
// const percent = document.querySelector("#percent")! as HTMLElement;
// const division = document.querySelector("#division")! as HTMLElement;
// const multi = document.querySelector("#multi")! as HTMLElement;
// const sub = document.querySelector("#sub")! as HTMLElement;
// const add = document.querySelector("#add")! as HTMLElement;
// const dot = document.querySelector("#dot")! as HTMLElement;
// const equal = document.querySelector("#equal")! as HTMLElement;
const marks = document.querySelectorAll(".marks")!;

interface State {
  current: any[];
  compute: number;
  value: string;
  sign: string;
}
let state: State = {
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
    } else if (state.current.length === 0 && _value === 0) {
      state.current.push(0);
      state.value = String(0);
    } else if (state.current[0] === 0 && _value === 0) {
      return;
    } else if (state.current[0] === 0 && _value !== 0) {
      state.current[0] = _value;
      state.value = String(_value);
    } else if (state.current.length === 0 && _value !== 0) {
      state.current.push(_value);
      state.value += String(_value);
    } else {
      state.current.push(_value);
      state.value += String(_value);
    }
    result.value = state.value;
    console.log("_value :", state);
  });
});

marks.forEach((mark) => {
  mark.addEventListener("click", () => {
    const _value: string = mark.innerHTML;
    console.log("case", _value);

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
      case "÷":
        divisionNumber();
        state.sign = "÷";
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

const plusNumber = (): any => {
  let _value: string = "";
  for (const item of state.current) {
    if (state.current.length === 1) {
      _value = item.toString().trim();
    } else {
      _value += item.toString().trim();
    }
  }
  state.compute += Number(_value);
  state.current = [];
  result.value = "";
  state.value = "";
  console.log(state.compute);
};

const minusNumber = (): any => {
  let _value: string = "";
  for (const item of state.current) {
    if (state.current.length === 1) {
      _value = item.toString().trim();
    } else {
      _value += item.toString().trim();
    }
  }
  state.compute -= Number(_value);
  state.current = [];
  result.value = "";
  state.value = "";
  console.log(state.compute);
};

const divisionNumber = (): any => {
  let _value: string = "";
  for (const item of state.current) {
    if (state.current.length === 1) {
      _value = item.toString().trim();
    } else {
      _value += item.toString().trim();
    }
  }
  if (state.compute === 0) {
    state.compute = Number(_value);
  } else if (state.compute !== 0) {
    state.compute = state.compute / Number(_value);
    console.log("/ :", 10 / 5);
  } else {
    return;
  }
  state.current = [];
  result.value = "";
  state.value = "";
  console.log(state.compute);
};

const multipliedNumber = (): any => {
  let _value: string = "";
  for (const item of state.current) {
    if (state.current.length === 1) {
      _value = item.toString().trim();
    } else {
      _value += item.toString().trim();
    }
  }
  if (state.compute === 0) {
    state.compute = Number(_value);
  } else if (state.compute !== 0) {
    state.compute = state.compute * Number(_value);
  } else {
    return;
  }
  state.current = [];
  result.value = "";
  state.value = "";
  console.log(state.compute);
};

const equalsNumber = (): any => {
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
      case "X":
        multipliedNumber();
        state.sign = "";
        break;
      default:
        break;
    }
  } else {
    return;
  }

  state.current = [];
  state.value = String(state.compute);
  result.value = state.value;
  console.log(state.compute);
};

//dark mode
const body = document.querySelector("body")! as HTMLElement;
const mode = document.querySelector("#mode")! as HTMLElement;
mode.addEventListener("click", () => {
  const _mode: string = mode.getAttribute("data-mode")!;
  if (_mode === "false") {
    mode.className = "fa-solid fa-sun";
    mode.setAttribute("data-mode", "true");
    body.setAttribute("data-theme", "dark");
  } else {
    mode.className = "fa-solid fa-moon";
    mode.setAttribute("data-mode", "false");
    body.setAttribute("data-theme", "light");
  }
});
