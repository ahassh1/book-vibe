import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
  const {id} = useParams();
  const bookId = parseInt(id)
  const data = useLoaderData();
  const singleBook = data.find(book => book.bookId === bookId)
  const {image , bookName}= singleBook || {};

 const handleMarkAsRead = id => {
    // store with Id 
    // where to store 
    // arrry or collection
    // if book already exist the show a alert
    // if book not exist the push in the collection or arrry 
    addToStoredDB(id)
    
 }

    return (
        <div className='w-2/3 mx-auto'>

            <img className='w-48' src={image} alt="" />
            <h3>{bookName}</h3>

            <button onClick={ () => handleMarkAsRead(id)} className='btn btn-accent m-3'> Read More</button>
            <button className='btn btn-info'> WithList </button>
        </div>
    );
};

export default BookDetails;