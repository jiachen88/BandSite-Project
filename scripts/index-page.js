const biographyComments = document.getElementById(`biographyComments`)
const biographyCommentsEntries = document.getElementById(`biographyCommentsEntry`)
const biographyCommentsContainer = [];
function renderComments() {
    biographyCommentsEntries.innerText = '';
    for (let i = 0; i < biographyCommentsContainer; i++) {
        console.log(biographyCommentsContainer);
        const biographyListArticle = document.createElement(`li`);
        const biographyListName = document.createElement(`h2`);
        biographyListName.innerText = biographyCommentsContainer[i].name;
        const biographyListComment = document.createElement(`p`);
        biographyListComment.innerText = biographyCommentsContainer[i].comment;
        biographyCommentsEntries.appendChild(biographyListArticle);
        biographyListArticle.appendChild(biographyListName);
        biographyListArticle.appendChild(biographyListComment);
    }
    console.log(biographyCommentsContainer)
}
biographyComments.addEventListener(`submit`, function (event) {
    event.preventDefault();
    console.log(`comment posted`);
    const newCommentName = event.target.name.value;
    const newCommentContent = event.target.comment.value;
    biographyCommentsContainer.push({
        newCommentName,
        newCommentContent,
    });
    renderComments();
})