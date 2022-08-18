fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(results => {
    results.forEach(element =>{
        let html = document.createRange().createContextualFragment(/*html*/`
        <div class='row'>
        <div class='col'>
        <div class='list'>
        <h2>${element.title}</h2>
        <p>${element.body}</p>
        </div>
        </div>
        </div>
    `)

    document.body.append(html)
    })
    
})