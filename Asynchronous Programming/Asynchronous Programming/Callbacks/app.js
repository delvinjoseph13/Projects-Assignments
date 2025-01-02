function delayfunction(callback){
    setTimeout(callback,5000)
}



function fetchdata(){
    document.querySelector(".button").addEventListener("click",()=>{
        const outputdiv=document.querySelector(".output")
        outputdiv.textContent="Waiting for the data";
        outputdiv.classList.add("output-after")

        const outerdiv=document.querySelector(".outputdiv");
        outerdiv.classList.add("outputdiv-after")

        delayfunction(()=>{
            fetch(`https://dummyjson.com/posts`)
            .then((response)=>{
                return response.json();
            }
            ).then((data)=>{
                const posts=data.posts;
                const  titles=posts.map(post=> `${post.title}`).join("<br><br>");
                outputdiv.innerHTML=`<Strong>Post titles are :</Strong><br><br> ${titles}`

            }).catch((error)=>{
                outputdiv.innerHTML=`Error while fetching the data ${error}`
            })
        })
    })
}

fetchdata();