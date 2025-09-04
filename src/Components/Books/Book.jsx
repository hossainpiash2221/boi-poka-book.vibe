import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-6 ">
                <figure className='bg-blue-300 p-5 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[166px]'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-4'>
                        {
                            tags.map((tag,indx) => <button 
                            key={indx}
                            className='btn btn-xs text-green-600 '>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="border-t-2 border-dashed opacity-50"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    );
};

export default Book;