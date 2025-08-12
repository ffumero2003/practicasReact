import About from "./pages/about"
import Blog from "./pages/blog"
import Contact from "./pages/contact"
import Layout from "./layout";
import NotFound from "./components/notFound";
import Home from "./pages/home";
import BlogPost1 from "./components/blog/BlogPosts/blogPost1";
import BlogPost2 from "./components/blog/BlogPosts/blogPost2";
import BlogPost3 from "./components/blog/BlogPosts/blogPost3";
import BlogPost4 from "./components/blog/BlogPosts/blogPost4";
import PostsShells from "./components/blog/BlogPosts/blogPostsLayout";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Este layout envuelve todas las rutas hijas
    errorElement: <NotFound />, // Renderiza si una ruta hija no se encuentra o hay un error
    children: [
      {
        index: true, // Esta es la ruta por defecto para el path '/'
        element: <Home />,
      },
      {
        path: 'about', // Ruta relativa a la ruta padre '/'
        element: <About />,
      },
      {
        path: 'blog',
        element: <Blog />,
        // children: [
        //   {index: true, element: <Blog />},
        //   {path: "post1", element: <BlogPost1 />},
        //   {path: "post2", element: <BlogPost2 />},
        //   {path: "post3", element: <BlogPost3 />},
        //   {path: "post4", element: <BlogPost4 />}
        // ]
      },
       {
        path: 'blog',
        element: <PostsShells />,
        children: [
          { path: 'post1', element: <BlogPost1 /> },
          { path: 'post2', element: <BlogPost2 /> },
          { path: 'post3', element: <BlogPost3 /> },
          { path: 'post4', element: <BlogPost4 /> },
        ],
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ],
  },
]);

export default router;
