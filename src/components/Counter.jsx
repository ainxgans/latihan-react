import { useState } from 'react';
import Button from './Button';
export default function Counter({ initialValue }) {
    const [count, setCount] = useState(initialValue);
    function handleClick() {
        setCount((count) => count + 1);
    }
    return (
        <div>
            <div className='text-5xl text-white'>{count}</div>
            <div className='flex items-center gap-2 mt-4'>
                <Button onClick={handleClick}>+</Button>
                <Button
                    onClick={() => {
                        handleClick();
                        handleClick();
                        handleClick();
                    }}
                >
                    +++
                </Button>
            </div>
        </div>
    );
}
