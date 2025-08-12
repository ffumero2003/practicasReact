import CardBody from './cardBody';
import CardTitle from './cardTitle';

function Card({ image, title, subheading }) {
  return (
    <div className="border border-black m-4 rounded-md overflow-hidden">
      <CardBody image={image} />
      <CardTitle title={title} subheading={subheading} />
    </div>
  );
}

export default Card;
