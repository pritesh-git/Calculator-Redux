import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useSelector, useDispatch } from 'react-redux'
import {
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
} from './redux/calsiReducer'

const App = () => {
  const { a, b, opt } = useSelector(state => state.calsiEvent)
  const dispatch = useDispatch()

  const optPress = n => {
    if (opt !== '') rsltPress(0)
    dispatch(addOpts(n))
  }

  const rsltPress = n => {
    switch (opt) {
      case '+': {
        if (Number.isInteger(a) && Number.isInteger(b)) dispatch(addInt())
        else dispatch(addFloat())
        break
      }
      case '-': {
        if (Number.isInteger(a) && Number.isInteger(b)) dispatch(minusInt())
        else dispatch(minusFloat())
        break
      }
      case '/': {
        if (Number.isInteger(a) && Number.isInteger(b)) dispatch(divideInt())
        else dispatch(divideFloat())
        break
      }
      case '*': {
        if (Number.isInteger(a) && Number.isInteger(b)) dispatch(multiplyInt())
        else dispatch(multiplyFloat())
        break
      }
      default:
        break
    }

    if (n) {
      dispatch(clearData(0))
    }
  }

  const renderNum = n => {
    return (
      <button
        type="button"
        className="btn btn-info m-1 shadow rounded w-25"
        onClick={() => {
          dispatch(addDigit(n))
        }}>
        n
      </button>
    )
  }
  const renderOpt = n => {
    return (
      <button
        type="button"
        className="btn btn-info m-1 shadow rounded"
        onClick={() => {
          optPress(n)
        }}>
        n
      </button>
    )
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-success"
      style={{ height: '100vh' }}>
      <div className=" col-md-3 shadow-lg p-3 rounded px-md-4 bg-primary">
        <h3 className="float-right">
          {a} <small>{opt}</small> {b}
        </h3>
        <input
          type="text"
          value={b}
          className="w-100 p-3 shadow p-3 mb-3 bg-white rounded"
          onKeyPress={() => {
            'if(isNaN(String.fromCharCode(event.keyCode))) return false;'
          }}
          readOnly
        />
        <div className="btn-group-vertical w-100 p-3 h-75 d-inline-block">
          <div className="btn-group h-25">
            renderNum('7'); renderNum('8'); renderNum('9'); renderOpt('*');
          </div>
          <div className="btn-group h-25">
            renderNum('4'); renderNum('5'); renderNum('6'); renderOpt('/');
          </div>
          <div className="btn-group h-25">
            renderNum('1'); renderNum('2'); renderNum('3'); renderOpt('-');
          </div>
          <div className="btn-group h-25">
            renderNum('.'); renderNum('0'); renderOpt('+');
          </div>
          <div className="btn-group h-25">
            <button
              type="button"
              className="btn btn-info m-1 shadow rounded"
              onClick={() => {
                dispatch(clearData(1))
              }}>
              AC
            </button>
            <button
              type="button"
              className="btn btn-info m-1 shadow rounded w-50"
              onClick={() => {
                rsltPress(1)
              }}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
