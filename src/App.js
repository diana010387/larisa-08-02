import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";

function App() {
    const [count, setCount] = useState(1)
    const [count2, setCount2] = useState(1)
    const minus = () => {
        setCount(count - 1)
    };
    const plus = () => {
        setCount(count + 1)
    };
    const changeCount2 = (operand) => {
        if (operand === '+') setCount2(count2 + 1);
        if (operand === '-') setCount2(count2 - 1);
    }

    const [numbers, setNumbers] = useState([1, 2, 3])
    const del = (ind) => {
        const newNumbers = numbers.filter((el, i) => ind !== i)
        setNumbers(newNumbers);
    }
    const reset = (ind) => {
        const newNumbers = numbers.map((el, i) => ind === i ? 0 : el)
        setNumbers(newNumbers);
    }

    const changeNumbers = (ind, value) => {
        const newNumbers = numbers.map((el, i) => ind === i ? el + value : el)
        setNumbers(newNumbers)
    }


    const addCounter = () => {
        const newCount = [...numbers, numbers[numbers.length-1] +1 ]
        setNumbers(newCount)
    }


    return (
        <div className="App">

            <Counter count={count} minus={minus} plus={plus}/>
            <Counter2 count2={count2} changeCount2={changeCount2}/>
            <Counter3
                numbers={numbers}
                del={del}
                reset={reset}
                changeNumbers={changeNumbers}
                addCounter={addCounter}/>
        </div>
    );
}

export default App;
