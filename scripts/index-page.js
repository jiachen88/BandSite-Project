//declaring api key
let apiKey = ("api_key=de986b5f-41ca-426b-b1b5-bcad86d9fbe7")
//declaring APIs
const commentsApi = ("https://project-1-api.herokuapp.com/comments?api_key=de986b5f-41ca-426b-b1b5-bcad86d9fbe7")

let commentsContainer = document.getElementById('largeContainer')
//sorts comments by date

//for loop for comments
function renderComments() {
    axios.get(commentsApi)
        .then(response => {
            const commentsArray = response.data;
            commentsArray.sort(function (a, b) { return parseInt(b.timestamp) - parseInt(a.timestamp) })

            //Declaring Const for comments
            for (let i = 0; i < commentsArray.length; i++) {

                console.log(commentsArray[i].comment);
                //creating elements for comments to be inserted to
                let bigContainer = document.createElement('div')
                let smallContainer = document.createElement('div')
                let imageContainer = document.createElement('div');
                let imageContent = document.createElement('img');
                let commenterContainer = document.createElement('div');
                let commenterName = document.createElement('h2');
                let commenterComment = document.createElement('p');
                let dateContainer = document.createElement('div');
                let dateContent = document.createElement('p');
                let mediumContainer = document.createElement('div');

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
                bigContainer.classList.add('biography-comments__container-big')
                mediumContainer.classList.add('biography-comments__container-medium')
                //appending the elements to correct divs
                mediumContainer.appendChild(imageContainer);
                mediumContainer.appendChild(commenterName);
                bigContainer.appendChild(commenterContainer);
                smallContainer.appendChild(bigContainer)
                commentsContainer.appendChild(smallContainer);
                // smallContainer.appendChild(imageContainer)
                imageContainer.appendChild(imageContent);
                commenterContainer.appendChild(mediumContainer);
                // commenterContainer.appendChild(commenterComment);
                smallContainer.appendChild(commenterComment)
                // smallContainer.appendChild(commenterContainer);
                dateContainer.appendChild(dateContent);
                commenterContainer.appendChild(dateContainer)
            }
        }
        )
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
    ).then(() => {
        commentsContainer.innerText = '';
        renderComments();
        document.getElementById('biographyComments').reset();
    })
});


