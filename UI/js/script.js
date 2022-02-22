// Selectors
const title = document.querySelector('.title');
const newText = document.querySelector('.newText');
const meetupBtn = document.querySelector('.meetup-btn');
const pageContent = document.querySelector('.right-side');
// Event lIsteners


meetupBtn.addEventListener('click', addMeetup);
pageContent.addEventListener('click', deleteMeetup);
// Functions
function addMeetup(e) {
    // Preventing the default behaviour of the form
    e.preventDefault();
    // Creating a new div
    const meetUpDiv = document.createElement('div');
    meetUpDiv.classList.add(`wrapper`);
    // Creating a new list
    const newMeetUp = document.createElement('div');
    newMeetUp.classList.add('card');
    newMeetUp.innerHTML = `<h3 class="card-title">${ title.value }</h3>
    <p class="card-content">${ newText.value }</p><button class="card-btn">DELETE</button>`;
    meetUpDiv.appendChild(newMeetUp);


    pageContent.appendChild(meetUpDiv);
    // Clearing the input 
    title.value = '';
    newText.value = '';
}

function deleteMeetup(event) {
    if (event.target.classList.contains('card-btn')) {
        event.target.parentElement.remove();
    }
};