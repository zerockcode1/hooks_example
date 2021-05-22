import React from 'react';

const PageList = ({pageList =[], prev,next,page,start, end, movePage}) => {


    const list = pageList.map(i => <button key={i} onClick={() => movePage(i)}> {i} </button>)


    return (
        <div>
            {prev? <button onClick={() => movePage(start -1)} >prev</button>: <></>}
            {list}
            {next? <button  onClick={() => movePage(end + 1)} >next</button>: <></>}
        </div>
    );

};

export default PageList;