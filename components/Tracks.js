const Tracks = ({ images }) => {
  const neonGlowStyle = {
    transition: "transform 0.2s, filter 0.2s",
  };

  const handleHover = (event) => {
    event.target.style.transform = "scale(1.1)";
    event.target.style.filter = "brightness(1.3) drop-shadow(0 0 0.75rem lime)";
  };

  const handleMouseLeave = (event) => {
    event.target.style.transform = "scale(1)";
    event.target.style.filter = "brightness(1)";
  };

  return (
    <div className="my-20 font-roboto-mono font-bold">
      <h1 className="text-center text-5xl">Tracks</h1>
      <div className="flex flex-wrap justify-center max-md:mx-0 mx-16">
        {images.map((image, index) => (
          <div key={index} className="m-16 max-md:m-4 relative">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="h-[350px] w-[350px] p-2"
              style={{ ...neonGlowStyle, borderRadius: "8px" }}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
