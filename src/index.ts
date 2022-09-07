const result = document.querySelector("#result")! as HTMLElement;
const numbers = document.querySelectorAll(".numbers")!;
const clear = document.querySelector("#clear")! as HTMLElement;
const del = document.querySelector("#del")! as HTMLElement;
const percent = document.querySelector("#percent")! as HTMLElement;
const division = document.querySelector("#division")! as HTMLElement;
const multi = document.querySelector("#multi")! as HTMLElement;
const sub = document.querySelector("#sub")! as HTMLElement;
const add = document.querySelector("#add")! as HTMLElement;
const dot = document.querySelector("#dot")! as HTMLElement;
const equal = document.querySelector("#equal")! as HTMLElement;

interface State {
  current: any[];
  prev: any[];
  compute: number;
}
let state: State = {
  current: [],
  prev: [],
  compute: 0,
};
numbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    const _value = Number(btn.innerHTML);
    if (state.current.length === 0) {
      state.current.push(_value);
    } else if (state.current.length === 0 && _value === 0) {
      state.current.push(0);
    } else if (state.current[0] === 0 && _value === 0) {
      return;
    } else if (state.current.length === 0 && _value !== 0) {
      state.current.push(_value);
    } else {
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
  let _value: string = "";

  for (const item of current) {
    _value += item.toString().trim();
  }

  if (current.length === 0) {
    const _valueToNumber = Number(_value);
    state.prev.push(_valueToNumber);
    state.current = [];
  } else {
    const _valueToNumber = Number(_value);
  }

  console.log("add");
});
