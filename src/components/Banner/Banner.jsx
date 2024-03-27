const Banner = () => {
  return (
    <div className="">
        <div className="hero mt-10 mb-20 bg-[#1313130D]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="/banner-book.svg"
              className="max-w-sm rounded-lg"
            />
            <div>
              <h1 className="text-6xl font-bold playfair">Books to freshen up<br></br>your bookshelf</h1>
              <button className="btn btn-success text-white mt-20 sans">View The List</button>
            </div>
          </div>
        </div>  
    </div>
  );
};

export default Banner;
