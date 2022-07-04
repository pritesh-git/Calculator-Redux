import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [firstval, newval] = useState("");
  const [optval, newopt] = useState("");
  const [ivalue, fvalue] = useState("");

  const numPress = (n) => fvalue(ivalue + n);
  
  const optPress = (opt) => {
    if (optval !== "") rsltPress(0);
    else newval(ivalue);

    fvalue("");
    newopt(opt);
  };
  const rsltPress = (n) => {
    switch (optval) {
      case "+": {
        const res = parseInt(firstval) + parseInt(ivalue);
        newval(res);
        break;
      }
      case "-": {
        const res = parseInt(firstval) - parseInt(ivalue);
        newval(res);
        break;
      }
      case "/": {
        const res = parseInt(firstval) / parseInt(ivalue);
        newval(res);
        break;
      }
      case "*": {
        const res = parseInt(firstval) * parseInt(ivalue);
        newval(res);
        break;
      }
      default:
        break;
    }
    if (n) {
      newopt("");
      fvalue("");
    }
  };
  const clr = () => {
    newopt("");
    fvalue("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-success" style={{ height: "100vh" }}>
      <div className=" col-md-3 shadow-lg p-3 rounded px-md-4 bg-primary">
        <h3 className="float-right">{firstval} {optval} {ivalue}</h3>
        <input type="text" name="vals" value={ivalue} className="w-100 p-3 shadow p-3 mb-3 bg-white rounded" onKeyPress={() => { "if(isNaN(String.fromCharCode(event.keyCode))) return false;" }} readOnly />
        <div className="btn-group-vertical w-100 p-3 h-75 d-inline-block">
          <div className="btn-group h-25">
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { numPress('1') }}>1</button>
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { numPress('2') }}>2</button>
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { numPress('3') }}>3</button>
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { optPress('*') }}>*</button>
          </div>
          <div className="btn-group h-25">
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { numPress('4') }}>4</button>
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { numPress('5') }}>5</button>
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { numPress('6') }}>6</button>
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { optPress('/') }}>/</button>
          </div>
          <div className="btn-group h-25">
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { numPress('7') }}>7</button>
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { numPress('8') }}>8</button>
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { numPress('9') }}>9</button>
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { optPress('-') }}>-</button>
          </div>
          <div className="btn-group h-25">
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { numPress('.') }}>.</button>
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { numPress('0') }}>0</button>
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { optPress('+') }}>+</button>
          </div>
          <div className="btn-group h-25">
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { clr() }}>C</button>
            <button type="button" className="btn btn-info m-1 shadow rounded" onClick={() => { rsltPress(1) }}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
