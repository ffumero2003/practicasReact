import Card from "../components/home/card";

function Home(){

  const arr = [
    {image: "https://demoxml.com/html/laboq/layout1/upload/1.jpg",title: "Creative Brand Design", subheading: "logo design for lorem company"},
    {image: "https://demoxml.com/html/laboq/layout1/upload/2.jpg",title: "Creative Brand Design", subheading: "logo design for lorem company"},
    {image: "https://demoxml.com/html/laboq/layout1/upload/3.jpg",title: "Creative Brand Design", subheading: "logo design for lorem company"},
    {image: "https://demoxml.com/html/laboq/layout1/upload/4.jpg",title: "Creative Brand Design", subheading: "logo design for lorem company"},
    {image: "https://demoxml.com/html/laboq/layout1/upload/5.jpg",title: "Creative Brand Design", subheading: "logo design for lorem company"},
    {image: "https://demoxml.com/html/laboq/layout1/upload/6.jpg",title: "Creative Brand Design", subheading: "logo design for lorem company"},
    {image: "https://demoxml.com/html/laboq/layout1/upload/7.jpg",title: "Creative Brand Design", subheading: "logo design for lorem company"},
    {image: "https://demoxml.com/html/laboq/layout1/upload/8.jpg",title: "Creative Brand Design", subheading: "logo design for lorem company"},
    {image: "https://demoxml.com/html/laboq/layout1/upload/9.jpg",title: "Creative Brand Design", subheading: "logo design for lorem company"},
    {image: "https://demoxml.com/html/laboq/layout1/upload/10.jpg",title: "Creative Brand Design", subheading: "logo design for lorem company"},
    {image: "https://demoxml.com/html/laboq/layout1/upload/11.jpg",title: "Creative Brand Design", subheading: "logo design for lorem company"},
    {image: "https://demoxml.com/html/laboq/layout1/upload/12.jpg",title: "Creative Brand Design", subheading: "logo design for lorem company"},
    {image: "https://demoxml.com/html/laboq/layout1/upload/13.jpg",title: "Creative Brand Design", subheading: "logo design for lorem company"},
    {image: "https://demoxml.com/html/laboq/layout1/upload/14.jpg",title: "Creative Brand Design", subheading: "logo design for lorem company"},
    {image: "https://demoxml.com/html/laboq/layout1/upload/1.jpg",title: "Creative Brand Design", subheading: "logo design for lorem company"},
  
  ]

  return(
    <div className="grid grid-cols-5">
      {arr.map(item =>(
        <Card image={item.image} title={item.title} subheading={item.subheading} />
      ))}
    </div>
  )
}



export default Home;