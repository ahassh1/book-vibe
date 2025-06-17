import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../utility/addToDB';

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
        <Tabs>
    <TabList>
      <Tab>Read Book List: {readList.length} </Tab>
      <Tab>My Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i read</h2>
    </TabPanel>
    <TabPanel>
      <h2>My Wish List</h2>
    </TabPanel>
  </Tabs>
    );
}

export default ReadList