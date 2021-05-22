import React, {useState} from 'react';
import axios from "axios";

const useTodoList = () => {

    const [page, setPage] = useState(1)
    const [pageResult, setPageResult] = useState({dtoList:[]})

    const getPage = (page) => {

        axios.get("http://localhost:8080/todo/pages?page="+ page||1 )
            .then(res => {
                console.log(res.data)
                setPageResult(res.data)
                setPage(res.data.page)
            })
    }

    return [page, setPage, pageResult, getPage];
};

export default useTodoList;