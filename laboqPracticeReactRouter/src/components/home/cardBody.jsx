function CardBody({ image }) {
  return (
    <div className="relative overflow-hidden">
      <img src={image} className="w-full object-contain  hover:scale-125 transition-all duration-300" />
      <div className="absolute bottom-0 right-0 bg-black opacity-90 p-2 rounded-md">
        <p className="text-white">Logo</p>
      </div>
    </div>
  );
}

export default CardBody;
