//declaring API key
let apiKey = ("api_key=de986b5f-41ca-426b-b1b5-bcad86d9fbe7")
//declaring API url
const showsApi = ("https://project-1-api.herokuapp.com/showdates?api_key=de986b5f-41ca-426b-b1b5-bcad86d9fbe7")
//axios getting JSON and turning it into Javascript Object 
// then declaring showTimes as response data array
axios.get(showsApi).then(response => {
    const showTimes = response.data;
    //Putting shows container in a variable
    let showsContainer = document.getElementById('showsContainer');
    // const sortedResponse = obj.data.DoctorsList.sort(function(a, b) { return parseInt(a.id) - parseInt(b.id});



    //creating for loop for showTimes array
    for (let i = 0; i < showTimes.length; i++) {
        console.log(showTimes[i]);
        //creating elements
        let dateContainer = document.createElement('div')
        let dateTitle = document.createElement('h2')
        let dateContent = document.createElement('p')
        let venueContainer = document.createElement('div')
        let venueTitle = document.createElement('h2')
        let venueContent = document.createElement('p')
        let locationContainer = document.createElement('div')
        let locationTitle = document.createElement('h2')
        let locationContent = document.createElement('p')
        let buyButton = document.createElement('button')
        let individualContainer = document.createElement('div')

        //inserting content
        dateTitle.innerText = "DATE"
        dateContent.innerText = new Date(showTimes[i].date).toDateString();
        venueTitle.innerText = "VENUE"
        venueContent.innerText = showTimes[i].place;
        locationTitle.innerText = "LOCATION"
        locationContent.innerText = showTimes[i].location;
        buyButton.innerText = "BUY TICKETS"
        //adding classes and styling to created elements
        dateContainer.classList.add('shows-main__container-date')
        dateTitle.classList.add('shows-main__title')
        dateContent.classList.add('shows-main__date')
        venueContainer.classList.add('shows-main__container-venue')
        venueTitle.classList.add('shows-main__title')
        venueContent.classList.add('shows-main__venue')
        locationContainer.classList.add('shows-main__container-location')
        locationTitle.classList.add('shows-main__title')
        locationContent.classList.add('shows-main__location')
        buyButton.classList.add('shows-main__button')
        individualContainer.classList.add('shows-main__container-individual')

        //appending childs and inserting content into right spots

        dateContainer.appendChild(dateTitle);
        dateContainer.appendChild(dateContent);
        venueContainer.appendChild(venueTitle);
        venueContainer.appendChild(venueContent);
        locationContainer.appendChild(locationTitle);
        locationContainer.appendChild(locationContent);
        individualContainer.appendChild(dateContainer);
        individualContainer.appendChild(venueContainer);
        individualContainer.appendChild(locationContainer);
        individualContainer.appendChild(buyButton)
        showsContainer.appendChild(individualContainer);
    }
    const showCards = document.querySelectorAll()
})


