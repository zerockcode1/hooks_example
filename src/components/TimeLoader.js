import React, {useEffect, useState} from 'react';
import axios from "axios";

const TimeLoader = () => {

    const [count, setCount] = useState(0)
    const [timeValue, setTimeValue] = useState('')

    useEffect(() => {
        axios.get("http://localhost:8080/todo/now")
            .then(res => {
                console.log(res.data)
                setTimeValue(res.data)
            })
    }, [count])

    return (
        <div>
            <h1 onClick={() => { setCount(count +1)  } } >Time Loader</h1>
            <h2>{timeValue}</h2>
        </div>
    );
};

export default TimeLoader;