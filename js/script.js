//card is the div on which all employee cards are put on
var card = document.getElementById('gallery');

/**
 * @param {string} url - takes url of api website
 * @return {promise} response from the fetch call is returned then checked and parsed to json
 * if error, message and error will be logged to the console
 */
function fetchData(url){
    return fetch(url)
            .then(checkStatus)
            .then(res => res.json())
            .catch(error => console.log('There has been a problem!', error));
}

/**
 * @param {promise} response takes fetch promise response to url and checks to see if response ok.
 * @return {promise} if response.ok, returns resolved promise. if not, returns rejected promise.
 */
function checkStatus(response){
    if(response.ok){
        return Promise.resolve(response);
    }else{
        return Promise.reject(new Error(response.statusText));
    }
}

/**
 * Promise.all is passed a promise of the parsed json of the fetch using the fetchData function. 
 * .then maps the returned data into a const called cards
 * cards is a string of innerHTML made for the employee cards
 * using the items info the card is given its HTML through the javascript.
 * createModals is called creating the 12 modals for each character.
 * each card shows their modal through the addEventListener for click
 */

Promise.all([
    fetchData('https://randomuser.me/api/?nat=US&results=12')
])
.then(data=>{
    console.log(data);
    const cards  = data[0].results.map( item =>{
        return `<div class="card" id = "card${data[0].results.indexOf(item)+1}">
            <div class="card-img-container">
                <img class="card-img" src="${item.picture.large}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name${data[0].results.indexOf(item)+1}" class="card-name cap">${item.name.first} ${item.name.last}</h3>
                <p class="card-text">${item.email}</p>
                <p class="card-text cap">${item.location.city}, ${item.location.state}</p>
            </div>
        </div>`;
    }).join('');
    const modals = data[0].results;
    createModals(modals);
    card.innerHTML = cards;
    for(let j = 1; j<=12; j++){
        let x = document.getElementsByClassName('card')[j-1];
        x.addEventListener('click', ()=>{
          document.getElementById(`modal${j}`).style.display = 'block';
        });
    }
})

//add search bar to the website
var searchContainer = document.getElementsByClassName('search-container')[0];
searchContainer.innerHTML = `<form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;
var searchBar = document.getElementById('search-input');

/**
 * search input given an event listener for keyup
 * when keyup, every one of the 12 employees is search insensitively by name
 */
searchBar.addEventListener('keyup', ()=>{
    let search =  searchBar.value;
    for(let i = 1; i<=12; i++){
        let newName = document.getElementById(`name${i}`).innerHTML.toLowerCase();
        let newS = search.toLowerCase();
        if(newName.indexOf(newS)==-1){
            document.getElementById(`card${i}`).style.display = 'none';
        }else{
            document.getElementById(`card${i}`).style.display = '';
        }
    }
});

/**
 * @param {array} array length-12 array of all the employees
 * no return
 * created 12 modals instantiated and IDed as modal1, modal2, ..., modal12 (all apended to the modalDiv)
 * in for loop, each modal is given the info of its employee along with three buttons(close, next, and previous)
 * close button closes the modal
 * previous and next buttons toggle to previous and next modals, respectively
 */

function createModals(array){
    var body = document.querySelector('body');
    var modalDiv = document.createElement('div');
    body.append(modalDiv);
    
    var modal1 = document.createElement('div');
    modal1.id = "modal1";
    modalDiv.append(modal1);

    var modal2 = document.createElement('div');
    modal2.id = "modal2";
    modalDiv.append(modal2);
    
    var modal3 = document.createElement('div');
    modal3.id = "modal3";
    modalDiv.append(modal3);

    var modal4 = document.createElement('div');
    modal4.id = "modal4";
    modalDiv.append(modal4);

    var modal5= document.createElement('div');
    modal5.id = "modal5";
    modalDiv.append(modal5);

    var modal6 = document.createElement('div');
    modal6.id = "modal6";
    modalDiv.append(modal6);

    var modal7 = document.createElement('div');
    modal7.id = "modal7";
    modalDiv.append(modal7);

    var modal8 = document.createElement('div');
    modal8.id = "modal8";
    modalDiv.append(modal8);

    var modal9 = document.createElement('div');
    modal9.id = "modal9";
    modalDiv.append(modal9);

    var modal10 = document.createElement('div');
    modal10.id = "modal10";
    modalDiv.append(modal10);

    var modal11 = document.createElement('div');
    modal11.id = "modal11";
    modalDiv.append(modal11);

    var modal12 = document.createElement('div');
    modal12.id = "modal12";
    modalDiv.append(modal12);
    


    for(let r = 1; r<=12; r++){
        let item = array[r-1];
        var addModal = document.getElementById(`modal${r}`);
        addModal.innerHTML +=` <div class = "modal"><button type="button" id="modal-close-btn${r}" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${item.picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${item.name.first} ${item.name.last}</h3>
                <p class="modal-text">${item.email}</p>
                <p class="modal-text cap">${item.location.city}</p>
                <hr>
                <p class="modal-text">${item.cell}</p>
                <p class="modal-text">${item.location.street.number} ${item.location.street.name}, ${item.location.city}, ${item.location.state} ${item.location.postcode}</p>
                <p class="modal-text">Birthday: ${item.dob.date.substring(0,10)}</p>
                </div>
            </div>
            <div class="modal-btn-container">
                <button type="button" id="modal-prev${r}" class="modal-prev btn">Prev</button>
                <button type="button" id="modal-next${r}" class="modal-next btn">Next</button>
            </div>`
        ;

        //dont show to start
        addModal.style.display = 'none';

        //give modal certain attributes through css
        addModal.className = 'modal-container';

        let closeModalButton = document.getElementById(`modal-close-btn${r}`);
        closeModalButton.addEventListener('click', ()=>{
            document.getElementById(`modal${r}`).style.display = 'none';
        });

        if(r!==1){
            let prevButton = document.getElementById(`modal-prev${r}`);
            prevButton.addEventListener('click', ()=>{
                document.getElementById(`modal${r}`).style.display = 'none';
                document.getElementById(`modal${r-1}`).style.display = 'block';
            });
        }

        if(r!==12){
            let nextButton = document.getElementById(`modal-next${r}`);
            nextButton.addEventListener('click', ()=>{
                document.getElementById(`modal${r}`).style.display = 'none';
                document.getElementById(`modal${r+1}`).style.display = 'block';
            });
        }
    };
    
};







