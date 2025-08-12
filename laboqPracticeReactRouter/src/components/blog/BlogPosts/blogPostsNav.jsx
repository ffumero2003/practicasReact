import { NavLink } from "react-router-dom";

function NavBlogPosts(){
  const links = [
    {to: "/blog/post1", label: "Blog Post 1"},
    {to: "/blog/post2", label: "Blog Post 2"},
    {to: "/blog/post3", label: "Blog Post 3"},
    {to: "/blog/post4", label: "Blog Post 4"},
  ]

  return(
    <div className="border border-black h-full ">
      <ul className="flex flex-col gap-3 justify-center items-center h-full">
        {links.map(({to, label}) => (
          <li key={to}>
            <NavLink
            to={to}
            className={({ isActive }) => 
              isActive
              ? "text-black border-b-2 border-black pb-1 mb-1 text-xl"
              : "text-black border-b-2 text-xl border-transparent hover:border-black hover:mb-1 hover:pb-1 transition-all duration-500"
            }>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div> 
  )
}

export default NavBlogPosts