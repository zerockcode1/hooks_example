import React, {useRef} from 'react';

const RefEx = () => {

    const h1 = useRef()

    const changeValue = () => {

        console.log(h1.current)

        h1.current.innerHTML = "AAA"
    }

    return (
        <div>
            <h1 ref={h1}>0</h1>
            <button onClick={() => changeValue()}>CLICK</button>

        </div>
    );
};

export default RefEx;