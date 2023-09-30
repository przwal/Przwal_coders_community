function submitComment() {
        
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    const commentCount = document.querySelector('#num-of-cmt');
    const currentCount = parseInt(commentCount.innerText.match(/\d+/)[0]);
    const newCount = currentCount + 1;
    commentCount.innerText = `Comments(${newCount})`;
    
    const commentElement = document.createElement('div');
    commentElement.classList.add('comments');

    
    commentElement.innerHTML = `
        <div style="display: flex;">
            <div class="comment-image">
                <img style="margin-top: 17px;" src="author_logo.png" alt="">
            </div>
            <div>
                <h4>${name}</h4>
                <p>${message}</p>
            </div>
        </div>
        <hr>
    `;



    const commentsList = document.querySelector('#comments-list');
    commentsList.appendChild(commentElement);


    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#message').value = '';
    document.querySelector('#your-site').value = '';
}

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    submitComment();
});