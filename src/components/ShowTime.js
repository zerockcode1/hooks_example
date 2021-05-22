import React, {useState} from 'react';
import TimeLoader from "./TimeLoader";

const ShowTime = () => {

    const [refresh, setRefresh] = useState(false)

    return (
        <div>
            <TimeLoader></TimeLoader>
        </div>
    );
};

export default ShowTime;