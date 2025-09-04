import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utility/addToDb';

const BookDetails = () => {
    const {bookId} =useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id);
    console.log(book);

    const {bookId : currenBookId,image} = book;

    const handlemarkAsRead = (id) =>{
        addToStoredReadList(id);
    }
   
    return (
        <div>
            <h2>Book details{bookId}</h2>
            <img src={image} alt="" className="w-36" />
            <br />
            <button onClick={() => handlemarkAsRead(id)} className='btn btn-accent btn-outline mr-4'>Mark as Read</button>
            <button className='btn btn-accent btn-outline mr-4'>Add to wish read</button>

        </div>
    );
};

export default BookDetails;