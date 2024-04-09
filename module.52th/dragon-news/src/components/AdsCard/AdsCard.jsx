import "./AdsCard.css"

const AdsCard = () => {
  return (
    <div className="ads-bg px-5 flex flex-col justify-center">
      <h2 className="text-3xl text-center text-[#F7F7F7] font-extrabold">
        Create an <br /> Amazing <br /> Newspaper
      </h2>
      <p className="text-center text-[#F7F7F7] mt-3 mb-10">
        Discover thousands of options, easy to customize layouts, one-click to
        import demo and much more.
      </p>
      <div className="flex justify-center">
        <button
          type="button"
          className="btn btn-secondary rounded-none"
        >
          <span className="text-base font-normal">Learn More</span>
        </button>
      </div>
    </div>
  )
}

export default AdsCard
