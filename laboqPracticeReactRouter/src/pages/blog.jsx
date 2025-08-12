import { faUser, faHeart, faCalendar, faComment } from '@fortawesome/free-solid-svg-icons';
import Card from '../components/blog/card';
import {Button} from '../components/blog/button';
import { Outlet } from 'react-router-dom';
function Blog() {
  const blogs = [
    {
      image: "https://demoxml.com/html/laboq/layout1/upload/blog1.jpg",
      heading: "Making the Envato Marketplaces Responsive",
      paragraph:
        "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent",
      meta: [
        { icon: faUser, text: "premiumlayers" },
        { icon: faHeart, text: "138 likes" },
        { icon: faCalendar, text: "14 February, 2014" },
        { icon: faComment, text: "4 Comments" },
      ],
    },
    {
      image: "https://demoxml.com/html/laboq/layout1/upload/blog2.jpg",
      heading: "Making the Envato Marketplaces Responsive",
      paragraph:
        "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent",
      meta: [
        { icon: faUser, text: "premiumlayers" },
        { icon: faHeart, text: "138 likes" },
        { icon: faCalendar, text: "14 February, 2014" },
        { icon: faComment, text: "8 Comments" },
      ],
    },
    {
      image: "https://demoxml.com/html/laboq/layout1/upload/blog3.jpg",
      heading: "Coming Soon: Visual Refresh",
      paragraph:
        "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent",
      meta: [
        { icon: faUser, text: "premiumlayers" },
        { icon: faHeart, text: "89 likes" },
        { icon: faCalendar, text: "22 June, 2020" },
        { icon: faComment, text: "3 Comments" },
      ],
    },
    {
      image: "https://demoxml.com/html/laboq/layout1/upload/blog4.jpg",
      heading: "Dev Team Tech Demo",
      paragraph:
        "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent",
      meta: [
        { icon: faUser, text: "premiumlayers" },
        { icon: faHeart, text: "138 likes" },
        { icon: faCalendar, text: "18 November, 2021" },
        { icon: faComment, text: "10 Comments" },
      ],
    },
  ];

  return (
  <div className="flex flex-col items-center">
    <div className="w-full max-w-6xl flex flex-col gap-6">
      {blogs.map((blog, index) => (
        <Card key={index} data={blog} postPath={`/blog/post${index + 1}`}/>
      ))}

      <div className=" flex justify-start">
        <Button />
      </div>
    </div>
    <Outlet /> 
  </div>
);

}

export default Blog;
