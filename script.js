document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postContent = document.getElementById('post-content');
    const postsContainer = document.getElementById('posts-container');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const content = postContent.value.trim();
        if (content) {
            addPost(content);
            postContent.value = '';
        }
    });

    function addPost(content) {
        const post = document.createElement('div');
        post.classList.add('post');
        const postText = document.createElement('p');
        postText.textContent = content;
        post.appendChild(postText);
        postsContainer.appendChild(post);
    }
});