async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();

        document.getElementById("output").textContent = data.title;
    } catch (error) {
        console.log(error);
    }
}

async function createPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Ultra gangstuh post",
            body: "This is a test post",
            userId: 1
        })
    });
    const data = await response.json();

    document.getElementById("output").textContent =
        JSON.stringify(data, null, 2);
}

async function updatePost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: 1,
            title: "Updated Title",
            body: "Updated content",
            userId: 1
        })
    });
    const data = await response.json();

    document.getElementById("output").textContent =
        JSON.stringify(data, null, 2);
}

async function deletePost() {
    await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE"
    });

    document.getElementById("output").textContent =
        "Post deleted (fake API response)";
}

function updateID() {
    const postId = document.getElementById("postId").value;
    if (postId) {
        updateID(postId);
        deletePost(postId);
    } else {
        alert("Please enter a Post ID for PUT/DELETE operations.");
    }
}