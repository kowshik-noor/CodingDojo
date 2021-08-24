const navLinks = document.querySelectorAll(".nav-links>*")
const temperature = document.getElementById('temperature')

const temperatures = {
    today: {
        fahrenheit: [75, 65],
        celsius: [24, 18],
        elements: document.querySelectorAll('#today span span')
    },
    tomorrow: {
        fahrenheit: [80, 66],
        celsius: [27, 19],
        elements: document.querySelectorAll('#tomorrow span span')
    },
    friday: {
        fahrenheit: [75, 65],
        celsius: [21, 16],
        elements: document.querySelectorAll('#friday span span')
    },
    saturday: {
        fahrenheit: [75, 65],
        celsius: [26, 21],
        elements: document.querySelectorAll('#saturday span span')
    }
}

navLinks.forEach((item) => {
    item.addEventListener('click', function () {
        alert("Loading weather report...")
    })
})

const days = Object.keys(temperatures);

let changeUnit = () => {
    days.forEach((day) => {
        if (temperature.value === "fahrenheit") {
            for (let i = 0; i < temperatures[day].elements.length; i++) {
                temperatures[day].elements[i].innerText = temperatures[day].fahrenheit[i];
            }
        } else if (temperature.value === "celsius"){
            for (let i = 0; i < temperatures[day].elements.length; i++) {
                temperatures[day].elements[i].innerText = temperatures[day].celsius[i];
            }
        }
    })
}

temperature.addEventListener('change',() => {
    changeUnit();
})