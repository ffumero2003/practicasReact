import { Outlet } from "react-router-dom";
import NavBlogPosts from "./blogPostsNav";

export default function PostsShells(){
  return(
    <main className="flex gap-6 w-full max-w-6xl mx-auto py-8">
      <div className="w-1/3">
        <NavBlogPosts />
      </div>
      <div className="w-2/3">
        <Outlet />
      </div>
    </main>
  )
}