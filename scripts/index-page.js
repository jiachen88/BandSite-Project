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
                let largeContainer = document.createElement('div')
                let imageContent = document.createElement('img')
                let mediumContainer = document.createElement('div')
                let commenterName = document.createElement('h2')
                let dateContainer = document.createElement('div')
                let dateContent = document.createElement('p')
                let smallContainer = document.createElement('div')
                let commenterComment = document.createElement('p')


                //inserting content
                imageContent.src = '../assets/images/Mohan-muruge.jpg';
                commenterName.innerText = commentsArray[i].name;
                commenterComment.innerText = commentsArray[i].comment;
                dateContent.innerText = new Date(commentsArray[i].timestamp).toLocaleDateString();
                //adding classes to elements

                //appending the elements to correct divs
                commentsContainer.appendChild(imageContent);
                mediumContainer.appendChild(commenterName);
                dateContainer.appendChild(dateContent);
                mediumContainer.appendChild(dateContainer);
                smallContainer.appendChild(mediumContainer);
                smallContainer.appendChild(commenterComment);
                commentsContainer.appendChild(smallContainer);
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


