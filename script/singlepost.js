function singlePost() {
   let postLayout = document.getElementById('single-post') 
   let posthtml = ""
   let postId = location.search;
   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
   .then (response => response.json())
   .then (data => {
       data.forEach(e => {
           posthtml += `
           <div class="card border-dark">
            <div class="card-body">
                <p class="text-end">${e.id}</p>
                <h3 class="card-title text-dark">${e.title}</h3>
                <p class="card-text text-dark">${e.body}</p>
            </div>   
            </div>
           `
           postLayout.innerHTML = posthtml
       });
   }) 
}
singlePost();