import {
  addDigit,
  addFloat,
  addInt,
  addOpts,
  clearData,
  divideFloat,
  divideInt,
  minusFloat,
  minusInt,
  multiplyFloat,
  multiplyInt,
} from './redux/calsiReducer'

const buttonArray = [
  [1, 2, 3, '*'],
  [4, 5, 6, '/'],
  [7, 8, 9, '-'],
  ['.', 0, '+'],
]

const App = () => {
  const { a, b, opt } = useSelector(state => state.calsiEvent)
  const dispatch = useDispatch()

  const optPress = n => {
    if (opt !== '') resultPress(0)
    dispatch(addOpts(n))
  }

  const resultPress = n => {
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

  return (
    <div class="grid min-h-screen place-items-center bg-slate-300">
      <div class="w-96 border border-gray-500 bg-blue-700 p-5 rounded-md shadow-lg">
        <h2 className="float-right">
          {a} {opt} {b}
        </h2>
        <input
          type="text"
          name="inputValue"
          value={b}
          className="w-full p-3 bg-white rounded-md shadow-md"
          onKeyPress={() => {
            'if(isNaN(String.fromCharCode(event.keyCode))) return false;'
          }}
          readOnly
        />

        <div className="grid grid-flow-row gap-4 m-4">
          {buttonArray?.map((btn, idx) => {
            return (
              <div className="grid grid-flow-col gap-4" key={idx}>
                {btn?.map((btnVal, btnIdx) => (
                  <button
                    type="button"
                    key={btnIdx}
                    className="p-2 border rounded-md shadow-md"
                    onClick={() => {
                      if (typeof btnVal === 'string') optPress(btnVal)
                      else dispatch(addDigit(btnVal))
                    }}>
                    {btnVal}
                  </button>
                ))}
              </div>
            )
          })}
          <div className="grid grid-flow-col gap-4">
            <button
              type="button"
              key={'clear'}
              className="p-2 border rounded-md shadow-md"
              onClick={() => {
                clearData()
              }}>
              C
            </button>
            <button
              type="button"
              key={'result'}
              className="p-2 border rounded-md shadow-md"
              onClick={() => {
                resultPress(1)
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
