import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../utility/addToDB';
import Book from '../pages/Book/Book';

const ReadList = () => {
    // worst case this is
    
    const [readList, setReadList] = useState([])
  const data = useLoaderData()
  console.log(data);

 useEffect(() =>{

    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map(id => parseInt(id))
    const myReadList = data.filter(book =>ConvertedStoredBooks.includes(book.bookId));
    setReadList(myReadList);
 },[]);
 
    return (

        <div>

        <details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>


        <Tabs>
    <TabList>
      <Tab>Read Book List </Tab>
      <Tab>My Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i read : {readList.length}</h2>
      {
        readList.map(b=> <Book key={b.bookId} singleBook={b}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>My Wish List</h2>
    </TabPanel>
  </Tabs>
  </div>
    );
};

export default ReadList