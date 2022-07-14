import { createSlice } from '@reduxjs/toolkit';

export const calsiReducer = createSlice({
  name: 'iState',
  initialState: {
    a: '',
    b: '',
    opt: '',
  },
  reducers: {
    addDigit: (state, action) => {
      if (state.opt === '') state.a = '';
      if (state.b === '' && action.payload === '.')
        state.b = '0' + action.payload;
      if (state.b === '0' && action.payload === '0') state.b = '0';
      else if (state.b === '0' && action.payload !== '0')
        state.b = action.payload;
      else state.b += action.payload;
    },
    addOpts: (state, action) => {
      console.log('a:', state.a, ', b:', state.b, ', opt:', state.opt);
      if (state.opt === '') state.a = state.b;

      state.b = '';
      state.opt = action.payload;
      console.log(typeof state.b);
      console.log(typeof state.a);
    },
    clearData: (state, action) => {
      if (action.payload) state.a = '';
      state.b = '';
      state.opt = '';
    },
    addInt: (state) => {
      state.a = parseInt(state.a) + parseInt(state.b);
      state.b = '';
    },
    addFloat: (state) => {
      state.a = parseFloat(state.a) + parseFloat(state.b);
      state.b = '';
    },
    minusInt: (state) => {
      state.a = parseInt(state.a) - parseInt(state.b);
      state.b = '';
    },
    minusFloat: (state) => {
      state.a = parseFloat(state.a) - parseFloat(state.b);
      state.b = '';
    },
    divideInt: (state) => {
      state.a = parseInt(state.a) / parseInt(state.b);
      state.b = '';
    },
    divideFloat: (state) => {
      state.a = parseFloat(state.a) / parseFloat(state.b);
      state.b = '';
    },
    multiplyInt: (state) => {
      state.a = parseInt(state.a) * parseInt(state.b);
      state.b = '';
    },
    multiplyFloat: (state) => {
      state.a = parseFloat(state.a) * parseFloat(state.b);
      state.b = '';
    },
  },
});

export const {
  addDigit,
  addOpts,
  clearData,
  addInt,
  addFloat,
  minusFloat,
  minusInt,
  divideFloat,
  divideInt,
  multiplyFloat,
  multiplyInt,
} = calsiReducer.actions;

export default calsiReducer.reducer;
