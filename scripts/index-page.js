//Declaring Const for comments
const biographyComments = document.getElementById('biographyComments')
const biographyCommentsEntries = document.getElementById('biographyCommentsEntry')
const biographyCommentsContainer = [];
const imageHolder = document.getElementById('commentsImage')
///gather date
const currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
const dateForm = (day + "/" + month + "/" + year);


//Renders new comments
function renderComments() {
    biographyCommentsEntries.innerText = '';
    for (let i = 0; i < biographyCommentsContainer.length; i++) {
        console.log(biographyCommentsContainer);
        //Create elements
        const biographyListArticle = document.createElement('li');
        const biographyListName = document.createElement('h2');
        const biographyListComment = document.createElement('p');
        const biographyListImage = document.createElement('img')
        const biographyDate = document.createElement('p')
        ///gather date
        const currentDate = new Date()
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        var year = currentDate.getFullYear()
        const dateForm = (day + "/" + month + "/" + year);

        //adding classes to elements
        biographyListArticle.classList.add('biography-comments__item')
        biographyListName.classList.add('biography-comments__commenter');
        biographyListComment.classList.add('biography-comments__content');
        biographyListImage.classList.add('biography-comments__images');
        //image and text
        biographyListImage.src = '../assets/Images/Mohan-muruge.jpg'
        biographyListName.innerText = biographyCommentsContainer[i].newCommentName;
        biographyListComment.innerText = biographyCommentsContainer[i].newCommentContent;
        biographyDate.innerText = dateForm;

        //inserting elements into correct divs
        imageHolder.appendChild(biographyListImage);
        biographyCommentsEntries.appendChild(biographyListArticle);
        biographyListArticle.appendChild(biographyListName);
        biographyListArticle.appendChild(biographyListComment);
        biographyListArticle.appendChild(biographyDate)
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
