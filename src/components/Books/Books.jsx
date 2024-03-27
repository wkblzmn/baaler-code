import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/wkblzmn/book-review-json/main/Books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <div className="text-center">
            <h2 className="playfair font-bold text-4xl">Books: {books.length}</h2>     
        </div>
        <div className="grid grid-cols-3 gap-5">
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
        </div>
    );
};

export default Books;