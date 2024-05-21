function showCommentInput(button) {
    let commentInput = button.parentNode.querySelector('.commentInput');
    commentInput.classList.toggle('hidden');
}

function sendComment(button) {
    let commentInput = button.parentNode.querySelector('.commentField');
    let commentText = commentInput.value.trim();
    if (commentText !== '') {
        let post = button.closest('.post');
        let commentsSection = post.querySelector('.commentsSection');
        let comment = document.createElement('div');
        comment.classList.add('comment');
        comment.textContent = commentText;
        commentsSection.appendChild(comment);
        commentInput.value = '';
    }
}
let dataLikes = [123, 25, 0]; 
let dataTexts = ["Я крут!", "Привет моим подписчикам, всем хорошего дня!", "Блин, сегодня были сочи, мне не понравилось 😞"]; 
let dataImgs = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnAMaT-msqujrp2NRGtbBwruO0HDQBkEH-NrHH9HFhoQ&s", "https://wishpics.ru/site-images/wishpics_ru_7845.jpg", "https://vogazeta.ru/uploads/full_size_1630478177-9b8079ecd532114d24ebe879676eff47.jpg"]; 

let korobkaPostov = document.getElementById("postsBox"); 
let originalPost = document.getElementById("firstPost"); 

for (let i = 0; i < 100; i++) {
    let newPost = originalPost.cloneNode(true);

    let img = newPost.querySelector(".img");
    img.setAttribute("src", dataImgs[i % 3]);

    let numberOfLikes = newPost.querySelector(".numberOfLikes");
    numberOfLikes.textContent = dataLikes[i % 3];

    let postText = newPost.querySelector(".postText");
    postText.textContent = dataTexts[i % 3];

    let likeBtn = newPost.querySelector(".likeBtn");
    likeBtn.setAttribute("onclick", "like(event, " + i + ")");


    newPost.classList.remove("hidden"); 
    korobkaPostov.appendChild(newPost);
}
function like(event, postIndex) {
    let likeCountElement = event.target.closest('.post').querySelector(".numberOfLikes");
    let likeCount = parseInt(likeCountElement.textContent);
    likeCount++;

    likeCountElement.textContent = likeCount;
}
