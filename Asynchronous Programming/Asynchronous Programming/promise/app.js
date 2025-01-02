const output=document.querySelector(".output");
const outerdiv=document.querySelector(".outputdiv");
const button=document.querySelector(".button")




function fetchdata(){
    outerdiv.classList.add("outputdiv-after")
    outerdiv.classList.add("output-after")
    output.textContent="Waiting for the data";
    const promise=new Promise((resolve,reject)=>{
        fetch(`https://dummyjson.com/posts`)
        .then((response)=>{
            return response.json();
        }).then(
            (data)=>{
                resolve(data)
            }
        ).catch((error)=>{
            output.textContent=`Error while fetching the data ${error}`
        }) 
    })
    
    promise.then(
        function(result){
            const posts=result.posts;
            const titles=posts.map(post=>`${post.title}`).join("<br><br>");
            output.innerHTML=`<strong>Post titles are </strong> <br><br> ${titles}`
        }
    )
}

button.addEventListener("click",fetchdata)


