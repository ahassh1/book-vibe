import React from 'react';
import bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-around items-center w-full p-16'>
            <div>
                <h1>hi there this is me ahasan habib polash i am a rn dev or software engineer  and buildig scalable desing <br />recently i am working typescript next js redux and redux tolkit </h1>
                <button className='btn btn-primary mt-5'>test items</button>
            </div>
            <div>
                <img className='w-full' src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;