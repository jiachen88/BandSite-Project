const biographyComments = document.getElementById('biographyComments')
const biographyCommentsEntries = document.getElementById('biographyCommentsEntry')
const biographyCommentsContainer = [];
const imageHolder = document.getElementById('commentsImage')
function renderComments() {
    biographyCommentsEntries.innerText = '';
    for (let i = 0; i < biographyCommentsContainer.length; i++) {
        console.log(biographyCommentsContainer);
        const biographyListArticle = document.createElement('li');
        const biographyListName = document.createElement('h2');
        const biographyListComment = document.createElement('p');
        const biographyListImage = document.createElement('img')
        biographyListImage.src = '../assets/Images/Mohan-muruge.jpg'
        biographyListArticle.classList.add('biography-comments__item')
        biographyListName.classList.add('biography-comments__commenter');
        biographyListComment.classList.add('biography-comments__content');
        biographyListImage.classList.add('biography-comments__images');
        biographyListName.innerText = biographyCommentsContainer[i].newCommentName;
        biographyListComment.innerText = biographyCommentsContainer[i].newCommentContent;
        imageHolder.appendChild(biographyListImage);
        biographyCommentsEntries.appendChild(biographyListArticle);
        biographyListArticle.appendChild(biographyListName);
        biographyListArticle.appendChild(biographyListComment);

    }
    console.log(biographyCommentsContainer)
}
biographyComments.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('comment posted');
    const newCommentName = event.target.name.value;
    const newCommentContent = event.target.comment.value;
    biographyCommentsContainer.unshift({
        newCommentName: newCommentName,
        newCommentContent: newCommentContent
    });
    renderComments();
})