//Declaring Const for comments
const biographyComments = document.getElementById('biographyComments')
const biographyCommentsEntries = document.getElementById('biographyCommentsEntry')
const biographyCommentsContainer = [];
const imageHolder = document.getElementById('commentsImage')
const dateHolder = document.getElementById('commentsDate')
const bigContainer = document.getElementById('largeContainer')
///gather date
const currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
const dateForm = (day + "/" + month + "/" + year);
//Renders new comments
function renderComments() {
    bigContainer.innerText = '';
    for (let i = 0; i < biographyCommentsContainer.length; i++) {
        console.log(biographyCommentsContainer);
        //Create elements
        const biographyListArticle = document.createElement('li');
        const biographyListName = document.createElement('h2');
        const biographyListComment = document.createElement('p');
        const biographyListImage = document.createElement('img')
        const biographyDate = document.createElement('p')
        const bigContainer = document.createElement('div')
        const unorderedList = document.createElement('ul')
        const commentHolder = document.createElement('div')
        const imageContainer = document.createElement('div')
        const biographyDateContainer = document.createElement('div')
        ///gather date
        const currentDate = new Date()
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        var year = currentDate.getFullYear()
        const dateForm = (day + "/" + month + "/" + year);

        //adding classes to elements
        bigContainer.classList.add('biography-comments__flex')
        commentHolder.classList.add('biography-comments__holder')
        biographyListArticle.classList.add('biography-comments__item')
        biographyListName.classList.add('biography-comments__commenter');
        biographyListComment.classList.add('biography-comments__content');
        biographyListImage.classList.add('biography-comments__images');
        biographyDate.classList.add('biography-comments__date')
        //image and text
        biographyListImage.src = '../assets/Images/Mohan-muruge.jpg'
        biographyListName.innerText = biographyCommentsContainer[i].newCommentName;
        biographyListComment.innerText = biographyCommentsContainer[i].newCommentContent;
        biographyDate.innerText = dateForm;

        //inserting elements into correct divs
        largeContainer.appendChild(bigContainer);
        bigContainer.appendChild(commentHolder);
        commentHolder.appendChild(imageContainer);
        imageContainer.appendChild(biographyListImage);
        commentHolder.appendChild(unorderedList);
        unorderedList.appendChild(biographyListArticle);
        biographyListArticle.appendChild(biographyListName);
        biographyListArticle.appendChild(biographyListComment);
        bigContainer.appendChild(biographyDateContainer)
        biographyDateContainer.appendChild(biographyDate)
    }
    console.log(biographyCommentsContainer)
}
//submit button event listener
biographyComments.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('comment posted');
    //targets the text in the form
    const newCommentName = event.target.name.value;
    const newCommentContent = event.target.comment.value;
    //puts the new comment at the top
    biographyCommentsContainer.unshift({
        newCommentName: newCommentName,
        newCommentContent: newCommentContent
    });
    //runs render comments function
    renderComments();
})

