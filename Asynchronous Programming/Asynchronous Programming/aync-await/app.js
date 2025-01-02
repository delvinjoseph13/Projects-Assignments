const output=document.querySelector(".output");
const outerdiv=document.querySelector(".outputdiv");
const button=document.querySelector(".button")


async function fetchdata(){

    try {
        outerdiv.classList.add("outputdiv-after")
        outerdiv.classList.add("output-after")
        output.textContent="Waiting for the data";
        const response=await fetch('https://dummyjson.com/posts');
        if(!response.ok){
            throw new Error("Failed to fetch the api")
        }
    
        const data= await response.json();
        const posts=data.posts;
        const titles=posts.map(post=> `${post.title}`).join("<br><br>");
        output.innerHTML=`<strong>Post titles are</strong> <br><br> ${titles}`
        
    } catch (error) {
         output.innerHTML=`Error in the given api ${error}`
    }

}


button.addEventListener("click",fetchdata)