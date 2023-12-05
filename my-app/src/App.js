import React, { useState } from 'react';

function CounterButton() {
    // Initialize the counter state to 0
    const [counter, setCounter] = useState(0);

    // Function to increment the counter
    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    );
}

export default CounterButton;
