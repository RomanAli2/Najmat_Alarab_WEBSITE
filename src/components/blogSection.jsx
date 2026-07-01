import React from "react"
function BlogSection(){
    const ArrayForPoster=[
        "/posters/1.jpeg",
        "/posters/2.jpeg",
        "/posters/3.jpeg",
        "/posters/5.jpeg",
        "/posters/6.jpeg",
        "/posters/4.jpeg",

       

    ]
    const ArrayForCards = [
  {
    icon: "fa-solid fa-thumbs-up",
    heading: "5+",
    para: "Years of Experience"
  },

    {
    icon: "fa-solid fa-globe",
    heading: "20+",
    para: "Countries Served"
  },
    {
    icon: "fa-solid fa-users",
    heading: "100%",
    para: "Customer Satisfaction"
  },
]
    return(
        <section className="" id="Blog">
       <div className="bg-blue-900 text-white flex justify-around ">
       {ArrayForCards.map((card,index)=>(
        <div key={index} className="flex  flex-col items-center  gap-4 py-6">
            <div className="flex justify-center items-center h-14 w-14 rounded-full bg-yellow-600">
                <i className={`${card.icon} text-2xl text-white`}></i>
            </div>
            <div className="text-center">   
                <h2 className="text-lg font-semibold">{card.heading}</h2>
                <p>{card.para}</p>
            </div>
        </div>
       ))}</div>
       <br/>
<marquee direction="left" scrollAmount="6">
  <div className="flex items-center gap-4">
    {[...ArrayForPoster, ...ArrayForPoster].map((poster, index) => (
      <img
        key={index}
        src={poster}
        onClick={() => window.open(poster, "_blank")}
        alt={`Poster ${index + 1}`}
        className="w-64 h-auto rounded-sm shadow-lg"
      />
    ))}
  </div>
</marquee>
        </section>
    )
}






export default BlogSection