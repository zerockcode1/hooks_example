import React, {useState} from 'react';

const useDice = () => {

    const [ dice, setDice ] = useState(0)

    const rollDice = ( ) => {
        console.log("changeCurrent")
        setDice(Math.ceil(Math.random()* 6)+ 1)
    }

    return [dice, rollDice]
};

export default useDice;