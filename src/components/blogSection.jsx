import React from "react"
function BlogSection(){
    return(
        <section className="">
        <br/>
<div className="grid grid-cols-1 items-center md:grid-cols-2 gap-3
 m-8">
<div className="">
    <h1 className="text-2xl">
        Take Off with Confidence Fly with<br/>
          <strong className="text-blue-500"> Najamat Alarab</strong>
    </h1><br/>
    <p className="leading-8">
        Planning your next trip? It is a lot easier now thanks to Najmat Alarab. In addition to our document clearing services, we also offer flight booking so that you can get to where you are going quickly. Your travel needs are taken care of from start to finish, whether you are traveling for business, vacation, or relocation. Booking your tickets today will make your journey easy.
    </p>
</div>
<div className="">

    <img className="" src='/blog.png' alt="Blog Image"/>

</div>

</div>
        </section>
    )
}






export default BlogSection