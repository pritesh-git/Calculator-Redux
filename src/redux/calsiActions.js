export const addDigit = (n) => {
  return {
    type: 'addDigits',
    payload: n,
  };
};

export const addOpts = (n) => {
  return {
    type: 'addOpts',
    payload: n,
  };
};

export const clearData = (n) => {
  return {
    type: 'clearData',
    payload: n,
  };
};

export const addInt = () => {
  return {
    type: 'addInt',
    payload: '',
  };
};
export const addFloat = () => {
  return {
    type: 'addFloat',
    payload: '',
  };
};

export const minusInt = () => {
  return {
    type: 'minusInt',
    payload: '',
  };
};
export const minusFloat = () => {
  return {
    type: 'minusFloat',
    payload: '',
  };
};

export const divideInt = () => {
  return {
    type: 'divideInt',
    payload: '',
  };
};
export const divideFloat = () => {
  return {
    type: 'divideFloat',
    payload: '',
  };
};

export const multiplyInt = () => {
  return {
    type: 'multiplyInt',
    payload: '',
  };
};
export const multiplyFloat = () => {
  return {
    type: 'multiplyFloat',
    payload: '',
  };
};
