const neil = {
    likes: 9,
    display: document.getElementById('neil')
}

const nichole = {
    likes: 12,
    display: document.getElementById('nichole')
}

const jim = {
    likes: 9,
    display: document.getElementById('jim')
}


function updateLikes(user) {
    user.likes++;
    user.display.textContent = user.likes;
}
