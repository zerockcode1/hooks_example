import React, {useEffect, useState} from 'react';
import axios from "axios";
import PageList from "./PageList";

const TodoList = ({num}) => {

    const [page, setPage] = useState(num||1)

    const [pageResult, setPageResult] = useState({dtoList:[]})


    const getTodos = () => {

        axios.get("http://localhost:8080/todo/pages?page=" + page)
            .then(res => setPageResult(res.data))

    }

    useEffect(() => {
        getTodos()
    },[page])

    const movePage = (page) => {
        setPage(page)
    }

    const list = pageResult.dtoList.map(todo => <li key={todo.tno}>{todo.tno} -- {todo.title}</li>)


    return (
        <div>
            <ul>
                {list}
            </ul>
            <PageList {...pageResult} movePage = {movePage}></PageList>
        </div>
    );
};

export default TodoList;