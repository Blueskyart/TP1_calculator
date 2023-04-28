import React, { useReducer } from 'react';

const initialState = {
  input: '',
  previousNumber: '',
  operator: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'number':
      return {
        ...state,
        input: state.input + action.payload,
      };
    case 'operator':
      return {
        input: '',
        previousNumber: state.input,
        operator: action.payload,
      };
    case 'equals':
      let result;
      switch (state.operator) {
        case '+':
          result = Number(state.previousNumber) + Number(state.input);
          break;
        case '-':
          result = Number(state.previousNumber) - Number(state.input);
          break;
        case 'x':
          result = Number(state.previousNumber) * Number(state.input);
          break;
        default:
          result = 0;
      }
      return {
        input: result.toString(),
        previousNumber: '',
        operator: '',
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function MyCalculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClick(e) {
    const value = e.target.value;
    if (value >= '0' && value <= '9') {
      dispatch({ type: 'number', payload: value });
    } else if (value === '+' || value === '-' || value === 'x') {
      dispatch({ type: 'operator', payload: value });
    } else if (value === '=') {
      dispatch({ type: 'equals' });
    } else if (value === 'reset') {
      dispatch({ type: 'reset' });
    }
  }

  return (
    <div>
      <input type="text" value={state.input} disabled />
      <div>
        <button value="7" onClick={handleClick}>
          7
        </button>
        <button value="8" onClick={handleClick}>
          8
        </button>
        <button value="9" onClick={handleClick}>
          9
        </button>
      </div>
      <div>
        <button value="4" onClick={handleClick}>
          4
        </button>
        <button value="5" onClick={handleClick}>
          5
        </button>
        <button value="6" onClick={handleClick}>
          6
        </button>
      </div>
      <div>
        <button value="1" onClick={handleClick}>
          1
        </button>
        <button value="2" onClick={handleClick}>
          2
        </button>
        <button value="3" onClick={handleClick}>
          3
        </button>
      </div>
      <div>
        <button value="0" onClick={handleClick}>
          0
        </button>
      </div>
      <div>
        <button value="+" onClick={handleClick}>
          +
        </button>
        <button value="-" onClick={handleClick}>
          -
        </button>
        <button value="x" onClick={handleClick}>
          x
        </button>
      </div>
      <div>
        <button value="=" onClick={handleClick}>
          =
        </button>
        <button value="reset" onClick={handleClick}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default MyCalculator;