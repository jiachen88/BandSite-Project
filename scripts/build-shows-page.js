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
    //clearing the container
    showsContainer.innerText = '';
    //creating for loop for showTimes array
    for (let i = 0; i < showTimes.length; i++) {
        console.log(showTimes[i]);
        //creating elements
        let dateContainer = document.createElement('div')
        let dateTitle = document.createElement('h2')
        let venueContainer = document.createElement('div')
        let venueTitle = document.createElement('h2')
        let venueContent = document.createElement('p')
        let locationContainer = document.createElement('div')
        let locationTitle = document.createElement('h2')
        let locationContent = document.createElement('p')
        let buyButton = document.createElement('button')
        //inserting content
        venueTitle.innerText = "VENUE"
        venueContent.innerText = showTimes[i].place;
        locationTitle.innerText = "LOCATION"
        locationContent.innerText = showTimes[i].location;
        buyButton.innerText = "BUY TICKETS"
        //adding classes and styling to created elements
        venueContainer.classList.add('shows-main__container')
        venueTitle.classList.add('shows-main__title')
        venueContent.classList.add('shows-main__venue')
        locationContainer.classList.add('shows-main__container')
        locationTitle.classList.add('shows-main__title')
        locationContent.classList.add('shows-main__location')
        buyButton.classList.add('shows-main__button')

        //appending childs and inserting content into right spots
        showsContainer.appendChild(venueContainer);
        venueContainer.appendChild(venueTitle);
        venueContainer.appendChild(venueContent);
        showsContainer.appendChild(locationContainer);
        locationContainer.appendChild(locationTitle);
        locationContainer.appendChild(locationContent);
        showsContainer.appendChild(buyButton);


    }


})





/*             <div class="shows-main__container">
                    <h2 class="shows-main__title">DATE</h2>
                    <p class="shows-main__date">Mon Sept 06 2021</p>
                </div>
                <div class="shows-main__container">
                    <h2 class="shows-main__title">VENUE</h2>
                    <p class="shows-main__venue">Ronald Lane</p>
                </div>
                <div class="show-main__container">
                    <h2 class="shows-main__title">LOCATION</h2>
                    <p class="shows-main__location">San Francisco, CA</p>
                </div>
                <button class="shows-main__button">BUY TICKETS</button> */
