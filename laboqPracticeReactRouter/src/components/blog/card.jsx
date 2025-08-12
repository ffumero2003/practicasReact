import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import  {ButtonCards}  from './button';

function Card({ data, postPath }) {
  const { image, heading, paragraph, meta } = data;

  const blogPostLinks = [
    {path: "/blog/post1"},
    {path: "/blog/post2"},
    {path: "/blog/post3"},
    {path: "/blog/post4"}
  ]

  return (
    <div className="max-w-6xl mx-auto border border-gray-200 mt-5">
     
      <img src={image} alt="Blog Cover" className="w-full object-cover" />

      
      <div className="flex flex-col md:flex-row w-full">
        
        <div className="border-r border-gray-300 w-full md:w-1/3">
          {meta.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-200 px-4 py-3 last:border-b-0"
            >
              <span className="text-sm text-gray-700">{item.text}</span>
              <div className="border border-gray-300 w-8 h-8 flex items-center justify-center">
                <FontAwesomeIcon icon={item.icon} className="text-gray-500 text-sm" />
              </div>
            </div>
          ))}
        </div>

        
        <div className="w-full md:w-2/3 p-6 flex flex-col gap-4">
          <h2 className="text-2xl font-light tracking-wide">{heading}</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{paragraph}</p>
            <Link to={postPath}>
              <ButtonCards />
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
