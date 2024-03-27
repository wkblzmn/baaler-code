import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, bookName, author, category, rating, tags, bookId } = book;

  return (
    <div>
      <Link to={`book/${bookId}`}>
      <div className="card bg-base-100 shadow-xl h-[485px]">
        <figure className="bg-[#F3F3F3] p-5">
          <img src={image} alt="Books" className="max-h-[300px]" />
        </figure>
        <div className="card-body">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <span key={index} className="tag text-[#23BE0A] bg-[#F4FCF3] rounded-xl p-1 sans font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div>
            <h2 className="card-title">{bookName}</h2>
            <p className="">By: {author}</p>
          </div>
          <div className="flex border-t-2">
            <p className="mt-2">{category}</p>
            <div className="flex gap-1 mt-2">
              <p>{rating}</p>
              <img src="/star.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    bookName: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    bookId: PropTypes.string.isRequired
  }).isRequired
};

export default Book;
