// components/blog/BlogPosts/blogPost1.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";

export default function BlogPost3() {
  return (
    <article className="max-w-4xl mx-auto bg-white border border-gray-200">
      {/* Image */}
      <img
        src="https://demoxml.com/html/laboq/layout1/upload/blog3.jpg"
        alt="Making the Envato Marketplaces Responsive"
        className="w-full object-cover"
      />

      {/* Content row */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t">
        {/* Left: meta list */}
        <ul className="border-r border-gray-200 flex flex-col gap-2">
          {[
            { icon: faUser, text: "premiumlayers" },
            { icon: faHeart, text: "89 likes" },
            { icon: faCalendar, text: "22 june, 2020" },
            { icon: faComment, text: "3 Comments" },
          ].map(({ icon, text }, i) => (
            <li
              key={i}
              className="flex items-center justify-between px-4 py-3 border-b last:border-b-0"
            >
              <span className="text-sm text-gray-700">{text}</span>
              <span className="w-9 h-9 border border-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={icon} className="text-gray-600 text-sm" />
              </span>
            </li>
          ))}
        </ul>

        {/* Right: title + paragraph + button */}
        <div className="md:col-span-2 p-6">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">
           Coming Soon: Visual Refresh
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi
            
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 px-5 py-3 font-semibold">
            READ MORE
          </button>
        </div>
      </div>
    </article>
  );
}
