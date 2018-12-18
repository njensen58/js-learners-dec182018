    // Two objects created by default:   document  &  window
        // console.dir(document) => the HTML document this file is linked to
        // console.dir(window)   => the browser window the user is viewing your website through

    // Global Variables
    const postsContainer = document.getElementById('posts-container')
    const addPostForm = document.addPostForm


    // Data / State
    let posts = [
        {
            title: "My first post",
            imgUrl: "https://images.unsplash.com/photo-1544913776-90c1223073a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            id: Math.random()
        },
        {
            title: "My second post",
            imgUrl: "https://images.unsplash.com/photo-1544910694-1bfc230e62fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            id: Math.random()
        },
        {
            title: "My third post",
            imgUrl: "https://images.unsplash.com/photo-1544913079-3a9ce6f7bd44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            id: Math.random()
        }
    ]

    // Form 'submit' event listener for adding a new Post
    addPostForm.addEventListener("submit", function(event){
        event.preventDefault();
        console.log(posts)
        // Get inputs & the input values
        const title = addPostForm.title
        const imgUrl = addPostForm.imgUrl
        // Create new post object
        const newPost = {
            title: title.value,
            imgUrl: imgUrl.value,
            id: Math.random()
        }
        // Add newPost to posts array
        posts.push(newPost)
        // Clear the postsContainer div to be empty
        postsContainer.innerHTML = ""
        // Clear user inputs
        title.value = ""
        imgUrl.value = ""
        // Re-list out posts to HTML page
        listPosts(posts)
    })


    // Function for listing out posts data to the HTML page
    function listPosts(){
        // For-Loop: Do the following process for as many post objects there are in the posts array
        for(let i = 0; i < posts.length; i++){
            // Create HTML elements
            const postContainer = document.createElement('div')
            const myH1 = document.createElement('h1')
            const myImg = document.createElement('img')
            const deleteBtn = document.createElement('button')

            // Add classes to elements for styling //
            postContainer.classList.add('post-container')

            // Add content to elements //
            myH1.textContent = posts[i].title
            myImg.setAttribute("src", posts[i].imgUrl)
            myImg.setAttribute("alt", posts[i].title)
            deleteBtn.textContent = "Delete"
            
            // Add id of current post to the container in case we need a reference to it later
            postContainer.postID = posts[i].id

            // Add click event to Delete button to delete a Post //
            deleteBtn.addEventListener('click', function(event){
                // Grab the id of the post by checking the postID of the button's parent <div></div>
                const postID = this.parentNode.postID
                // Use .filter() to loop over our array of posts and return us an array that doesn't include the deleted post
                const updatedPosts = posts.filter(post => post.id !== postID)
                // Update our posts array to reflect the new array
                posts = updatedPosts
                // Clear the page to prepare for listing out the posts
                postsContainer.innerHTML = ""
                // List out posts to page for user
                listPosts(posts)
            })

            // Add elements to postContainer //
            postContainer.appendChild(myH1)
            postContainer.appendChild(myImg)
            postContainer.appendChild(deleteBtn)

            // Add post object to posts-container on the HTML page //
            postsContainer.appendChild(postContainer)
        }
    }

    // Call listPosts on page loade so posts load by default when you first visit the site
    listPosts()
    
