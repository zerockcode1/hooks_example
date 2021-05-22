import React from 'react';
import useDice from "../hooks/useDice";

const DiceTest = () => {

    const [dice, rollDice ] = useDice(0)

    return (
        <div>
            <h2>{dice}</h2>
            <button onClick={ event =>  rollDice() }>CLICK</button>
        </div>
    );
};

export default DiceTest;