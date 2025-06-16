import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allBooks, setAllBooks]= useState([])

    useEffect(()=>{
        fetch("booksData.json")
        // or, fetch("raw link on json file")
        .then(res =>res.json())
        .then(data =>{
            // console.log(data);
            setAllBooks(data)
        })


    },[])
    return (
        <div>
            <h1>hello this is books</h1>
        </div>
    );
};

export default Books;