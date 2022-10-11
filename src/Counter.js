import {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Count: {count}</p>
            <br />
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br />
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter;