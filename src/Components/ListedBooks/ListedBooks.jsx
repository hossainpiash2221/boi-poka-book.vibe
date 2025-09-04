import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../Utility/addToDb";
import Book from "../Books/Book";

const ListedBooks = () => {
    const [readlist, setReadlist] = useState([]);
    const allbooks = useLoaderData();
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadList, storedReadListInt, allbooks);
        const readBookList = allbooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadlist(readBookList);

    }, [])

    return (
        <div>
            <h2>Listed Books</h2>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read List" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <h2>Books I read: {readlist.length}</h2>
                    {
                        readlist.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wish List" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">My wish list</div>

                {/* <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 3" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div> */}
            </div>
        </div>
    );
};

export default ListedBooks;