import React, {useEffect, useState} from 'react';
import useTodoList from "../hooks/useTodoList";
import PageList from "./PageList";

const TodoList2 = () => {


    const [page, setPage, pageResult, getPage] = useTodoList()

    useEffect(() => {
        getPage(page)
    },[page])

    const list = pageResult.dtoList.map(todo => <li key={todo.tno}>{todo.tno} -- {todo.title}</li>)

    return (
        <div>
            <ul>
            {list}
            </ul>

            <PageList {...pageResult} movePage={(num) => setPage(num)}></PageList>

        </div>
    );
};

export default TodoList2;