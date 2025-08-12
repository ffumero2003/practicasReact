function CardTitle({ title, subheading }) {
  return (
    <div className="flex flex-col p-2">
      <h3 className="font-bold text-md">{title}</h3>
      <hr className="w-4 h-2" />
      <p className="text-sm">{subheading}</p>
    </div>
  );
}

export default CardTitle;
