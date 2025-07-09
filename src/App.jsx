import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount, reset} from "./features/counter/counterSlice.jsx";
import {useState} from "react";

function App() {
    const [amount, setAmount] = useState(0);
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();


    function handleIncrementClick() {
        dispatch(increment());
    }

    function handleDecrementClick() {
        dispatch(decrement());
    }

    function handleResetClick() {
        dispatch(reset());
    }

    function handleAmountClick() {
        dispatch(incrementByAmount(amount));
        setAmount(0);
    }

    return (
        <div className="container">
            <button onClick={handleIncrementClick}> + </button>
            <p>Count: {count}</p>
            <button onClick={handleDecrementClick}> - </button>
            <button onClick={handleResetClick}> Reset</button>
            <input
                type="number"
                placeholder={"Enter amount"}
                value={amount}
                onChange={(event) => {setAmount(event.target.value)}}/>
            <button onClick={handleAmountClick}> Increment by Amount </button>
        </div>
    )
}

export default App
