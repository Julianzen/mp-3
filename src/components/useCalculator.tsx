import { useState } from "react";

export default function useCalculator() {
    const [result, setResult] = useState<number | null>(null);
    const [color, setColor] = useState("black");

    const calculate = (first: number, second: number, operation: (a: number, b: number) => number) => {
        const output = operation(first, second);
        setResult(output);
        if (output < 0) {
            setColor("red");
        }
        else {
            setColor("black");
        }

    };

    const clear = () => {
        setResult(null);
        setColor("black");
    };

    return { result, color, calculate, clear };
}