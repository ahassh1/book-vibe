import React from 'react';
import { useParams } from 'react-router';

const BookDetails = () => {
    const id = useParams();
    console.log(id);
    return (
        <div>
            <h3>hello details</h3>
        </div>
    );
};

export default BookDetails;