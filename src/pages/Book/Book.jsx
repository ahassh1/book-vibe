import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";

const Book = ({singleBook}) => {
    // const data= use(bookPromise)
    // console.log(data);
    console.log(singleBook);
    const {image, author , bookName , category, publisher, rating  } = singleBook
    return (
       <div className="card bg-base-100 w-96 shadow-sm border bg-teal-100 p-2">
  <figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
    <img className='h-[170px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {bookName}
      <div className="badge badge-secondary">{author}</div>
    </h2>
    <p>{publisher}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
    </div>
  </div>
</div>
    );
};

export default Book;