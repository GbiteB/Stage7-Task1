function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
        let postLayout = document.getElementById('post-layout')
        let html = "";
        data.forEach(e => {
            html += `
            <div class="col-md-4 mb-3">
                <div class="card border-dark h-100 position-relative">
                    <div class="card-body">
                    <p class="text-end">${e.id}</p>
                    <a class="text-decoration-none pb-5 " href="single-post.html?id=${e.id}">
                        <h3 class="card-title text-dark">${e.title}</h3>
                        <p class="card-text text-dark">${e.body}</p>
                        <div class="absolute"><a href="single-post.html?id=${e.id}" class="btn btn-danger">view more</a></div>
                    </a>
                    </div>
                </div>
            </div>
            `
            postLayout.innerHTML = html
        });
    })
}
getPosts();