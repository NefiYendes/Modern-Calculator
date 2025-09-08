import '../styles/index.css'
import Screen from './Screen'
import Button from './Button'
import {useState} from 'react'
import HistoryScreen from './HistoryScreen'

export const App = () => {
    const [displayValue, setDisplayValue] = useState('');
    const [firstNumber, setFirstNumber] = useState(null);
    const [operator, setOperator] = useState(null)
    const [history, setHistory] = useState([]);
    
    const handleButtonClick = (value) => {
        const operators = ['+', '-', '*', '/', '%']

        if(operators.includes(value)) {
            setFirstNumber(displayValue);
            setDisplayValue('');
            setOperator(value);
            
        }else if (value === '.' && !displayValue.includes('.')) {
            setDisplayValue(displayValue + value)
        
        }else {
            if(displayValue === '0' && value !== '.') {
                setDisplayValue(value)
            } else {
                setDisplayValue(displayValue + value)
            }
        }
}
const handleEqualClick = () => {
    if (operator === '+'){
        const result = parseFloat(firstNumber) + parseFloat(displayValue);
        setDisplayValue(result)
        setHistory(history => [...history, `${firstNumber} + ${displayValue} = ${result}`])

        setFirstNumber()
        setOperator(null)

    }else if (operator === '-') {
        const result = parseFloat(firstNumber) - parseFloat(displayValue);
        setDisplayValue(result);
        setHistory(history => [...history, `${firstNumber} - ${displayValue} = ${result}`])

        setFirstNumber(null)
        setOperator(null)
    } else if (operator === '*') {
        const result = parseFloat(firstNumber) * parseFloat(displayValue);
        setDisplayValue(result);
        setHistory(history =>[...history, `${firstNumber} * ${displayValue} = ${result}`])

        setFirstNumber(null)
        setOperator(null)
    } else if (operator === '/') {
        const result = parseFloat(firstNumber) / parseFloat(displayValue);
        setDisplayValue(result);
        setHistory(history =>[...history, `${firstNumber} / ${displayValue} = ${result}`])

        setFirstNumber(null)
        setOperator(null)
    }else if (operator === '%') {
        const result = parseFloat(firstNumber) % parseFloat(displayValue);
        setDisplayValue(result);
        setHistory(history =>[...history, `${firstNumber} % ${displayValue} = ${result}`]);

        setFirstNumber(null)
        setOperator(null)
    }else {
        alert('No es posible calcular esto')
    }
}
const handleButtonAc = () => {
    setDisplayValue('0');
    setFirstNumber(null)
    setOperator(null)
    setHistory([]);
}
const handleButtonDlt = () => {
    setDisplayValue(displayValue.slice(0, -1))
}

return (
    <>
        <div className='main-container'>
        <div className='calculator-container'>
            <h1 className='title'>Modern Calculator</h1>
            <Screen value={displayValue} />
            <div className='buttons-panel'>
            <div className='button-row'>
                <Button className='color' onClick={() => handleButtonAc()}>AC</Button>
                <Button className='color' onClick={() => handleButtonDlt()}>Dlt</Button>
                <Button className='color' onClick={() => handleButtonClick('%')}>%</Button>
                <Button className='color' onClick={() => handleButtonClick('/')}>/</Button>
            </div>
            <div className='button-row'>
                <Button onClick={() => handleButtonClick('7')}>7</Button>
                <Button onClick={() => handleButtonClick('8')}>8</Button>
                <Button onClick={() => handleButtonClick('9')}>9</Button>
                <Button className='color' onClick={() => handleButtonClick('*')}>x</Button>
            </div>
            <div className='button-row'>
                <Button onClick={() => handleButtonClick('4')}>4</Button>
                <Button onClick={() => handleButtonClick('5')}>5</Button>
                <Button onClick={() => handleButtonClick('6')}>6</Button>
                <Button className='color' onClick={() => handleButtonClick('-')}>-</Button>
            </div>
            <div className='button-row'>
                <Button onClick={() => handleButtonClick('1')}>1</Button>
                <Button onClick={() => handleButtonClick('2')}>2</Button>
                <Button onClick={() => handleButtonClick('3')}>3</Button>
                <Button className='color' onClick={() => handleButtonClick('+')}>+</Button>
            </div>
            <div className='button-row orange'>
                <Button></Button>
                <Button onClick={() => handleButtonClick('0')}>0</Button>
                <Button onClick={() => handleButtonClick('.')}>.</Button>
                <Button className='orange' onClick={() => handleEqualClick('=')}>=</Button>
            </div>
            </div>
        </div>
        <HistoryScreen history={history} />
        </div>
    </>
    )
}