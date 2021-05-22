import React, {useCallback, useRef} from 'react';

const TodoInput = () => {

    //좋은 방법은 아님 예제를 위한
    const titleInput = useRef()
    const contentInput = useRef()

    const add = useCallback((e) => {

        console.log("add")
        console.log(titleInput.current.value)
        console.log(contentInput.current.value)
        console.log("--------------------------")

    })

    return (
        <div>
            <label>Title</label>
            <input type={'text'} ref={titleInput}/>
            <label>Content</label>
            <input type={'text'} ref={contentInput}/>
            <button onClick={add}>SAVE</button>
        </div>
    );
};

export default TodoInput;