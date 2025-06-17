import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
  const {id} = useParams();
  const bookId = parseInt(id)
  const data = useLoaderData();
  const singleBook = data.find(book => book.bookId === bookId)
  const {image , bookName}= singleBook || {};
    return (
        <div className='w-2/3 mx-auto'>

            <img className='w-48' src={image} alt="" />
            <h3>{bookName}</h3>

            <button className='btn btn-accent m-3'> Read More</button>
            <button className='btn btn-info'> WithList </button>
        </div>
    );
};

export default BookDetails;