let username = document.getElementById('username');
const connections = {
    number: 418,
    display: document.getElementById('connections')
}

const requests = {
    number: 2,
    display: document.getElementById('request-number')
}

function acceptRequest(element) {
    element.remove();
    requests.number--;
    requests.display.textContent = requests.number;
    connections.number++;
    connections.display.innerText = connections.number;
}

function declineRequest(element) {
    element.remove();
    requests.number--;
    requests.display.textContent = requests.number;
}

function changeUsername() {
    let newName = prompt("New name: ");
    if (newName) {
        username.innerText = newName;
    }   
}