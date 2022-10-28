//declaring api key
let apiKey = ("api_key=de986b5f-41ca-426b-b1b5-bcad86d9fbe7")
//declaring APIs
const commentsApi = ("https://project-1-api.herokuapp.com/comments?api_key=de986b5f-41ca-426b-b1b5-bcad86d9fbe7")
axios.get(commentsApi).then(response => {
    const commentsArray = response.data;
    //Declaring Const for comments
    let commentsContainer = document.getElementById('largeContainer')
    //sorts comments by date
    const sortComments = commentsArray.sort(function (a, b) { return parseInt(b.timestamp) - parseInt(a.timestamp) })

    //for loop for comments
    function renderComments() {
        for (let i = 0; i < commentsArray.length; i++) {
            console.log(commentsArray[i].comment);
            //creating elements for comments to be inserted to
            let smallContainer = document.createElement('div')
            let imageContainer = document.createElement('div');
            let imageContent = document.createElement('img');
            let commenterContainer = document.createElement('div');
            let commenterName = document.createElement('h2');
            let commenterComment = document.createElement('p');
            let dateContainer = document.createElement('div');
            let dateContent = document.createElement('p');
            //inserting content
            imageContent.src = '../assets/images/Mohan-muruge.jpg';
            commenterName.innerText = commentsArray[i].name;
            commenterComment.innerText = commentsArray[i].comment;
            dateContent.innerText = new Date(commentsArray[i].timestamp).toLocaleDateString();
            //adding classes to elements
            smallContainer.classList.add('biography-comments__container-small')
            commenterContainer.classList.add('biography-comments__holder')
            commenterComment.classList.add('biography-comments__comment')
            imageContent.classList.add('biography-comments__images')
            dateContent.classList.add('biography-comments__date')
            //appending the elements to correct divs
            commentsContainer.appendChild(smallContainer);
            smallContainer.appendChild(imageContainer)
            imageContainer.appendChild(imageContent);
            smallContainer.appendChild(commenterContainer);
            commenterContainer.appendChild(commenterName);
            commenterContainer.appendChild(commenterComment);
            smallContainer.appendChild(dateContainer);
            dateContainer.appendChild(dateContent);
        }
    }
    renderComments();
    //submit button event listener
    biographyComments.addEventListener('submit', function (event) {
        event.preventDefault();
        axios.post("https://project-1-api.herokuapp.com/comments?api_key=de986b5f-41ca-426b-b1b5-bcad86d9fbe7",
            {
                name: event.target.name.value,
                comment: event.target.comment.value
            }
        );
        renderComments()
    });
})

