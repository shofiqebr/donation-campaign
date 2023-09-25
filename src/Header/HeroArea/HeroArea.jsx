const HeroArea = () => {
  return (
    <div>
      <div
        className="hero min-h-[90vh]"
        style={{
          backgroundImage: "url( https://i.ibb.co/DVs5XVp/Rectangle-4281.png)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-80 "></div>
        <div className=" hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-bold text-black">
              I Grow By Helping People In Need
            </h1>
            <div className="form-control ">
              <label className="label">
               
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Search here...."
                  className="w-80 input input-bordered"
                />
                <span className="font-semibold bg-red-600">Search</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
