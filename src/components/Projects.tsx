import {styled} from "styled-components";
import useCalculator from "./useCalculator";
import { useState } from "react";

export const MainCalculatorDiv = styled.div`

    background-color: #98c5c2;
    max-width: 100%;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`
export const CalculatorP = styled.p`
    font-size: calc(2px + 2vw);
         
`
export default function Projects() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const { result, color, calculate, clear } = useCalculator();

    const handleCalculate = (operation: (a: number, b: number) => number) => {
        calculate(Number(first), Number(second), operation);
    };

    return (
        <MainCalculatorDiv>
            <CalculatorP>
            <h2>Calculator</h2>
            <label>Give me a number: </label>
            <input
                type="number"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
            />
            <br /><br />
            <label>Give me another number: </label>
            <input
                type="number"
                value={second}
                onChange={(e) => setSecond(e.target.value)}
            />
            <br /><br />
            <button onClick={() => handleCalculate((a, b) => a + b)}>+</button>
            <button onClick={() => handleCalculate((a, b) => a - b)}>-</button>
            <button onClick={() => handleCalculate((a, b) => a * b)}>x</button>
            <button onClick={() => handleCalculate((a, b) => a / b)}>&divide;</button>
            <button onClick={() => handleCalculate((a, b) => Math.pow(a, b))}>pow</button>
            <button onClick={clear}>clear</button>

            {result !== null && (
                <div style={{ color }}>
                    <h3>{result}</h3>
                </div>
            )}
            </CalculatorP>
        </MainCalculatorDiv>
    );
}