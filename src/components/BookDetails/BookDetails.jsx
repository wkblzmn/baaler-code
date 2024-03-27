import { useParams, useEffect, useState } from "react-router-dom";

const BookDetails = () => {
  // const books = useLoaderData();
  const { bookId } = useParams();
  const [books, setBooks] = useState([]);
  const bookIdInt = parseInt(bookId);
  const book = books?.find((book) => book.bookId == bookIdInt);
  console.log(bookIdInt);
  console.log(books);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/wkblzmn/book-review-json/main/Books.json"
    )
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="grid grid-cols-7 gap-8 p-20">
      <div className="col-span-3 justify-center">
        <img className="max-h-[710px]" src={book.image} alt="" />
      </div>
      <div className="col-span-4 text-left">
        <h1 className="playfair font-bold text-4xl">{book.bookName}</h1>
        <p className="sans font-medium text-xl">By: {book.author}</p>
        <p className="border-t-2 border-b-2 p-4 sans font-medium text-xl pl-0">
          {book.category}
        </p>
        <p className="sans text-base mt-5">
          <span className="font-bold">Review : </span>
          <span className="text-[#131313B3]">{book.review}</span>
        </p>
        <div className="flex gap-5 mt-5 border-b-2 pb-5">
          <div>
            <p className="font-bold">Tag</p>
          </div>
          <div className="flex flex-wrap gap-1">
            {book.tags.map((tag, index) => (
              <span
                key={index}
                className="tag text-[#23BE0A] bg-[#F4FCF3] rounded-xl p-1 sans font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 mt-5">
          <div className="col-span-2">
            <p>Number of Pages: </p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div>
            <p className="font-semibold sans">{book.totalPages}</p>
            <p className="font-semibold sans">{book.publisher}</p>
            <p className="font-semibold sans">{book.yearOfPublishing}</p>
            <p className="font-semibold sans">{book.rating}</p>
          </div>
        </div>
        <div className="flex gap-3.5 mt-10">
          <button className="btn btn-ghost border-black text-xl">Read</button>
          <button className="btn bg-[#50B1C9] text-white text-xl">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
