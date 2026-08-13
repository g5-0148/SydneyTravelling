// Welcome Alert
let city = "Sydney";

setTimeout(function () {

    alert("Welcome to " + city + "!");

}, 1000);


// Dark Mode
const darkBtn = document.getElementById("darkBtn");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");
}

if (darkBtn) {

    darkBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");
        }
    });
}


// Click Counter
let count = 0;

const countBtn = document.getElementById("countBtn");
const countText = document.getElementById("countText");

if (countBtn) {

    countBtn.addEventListener("click", function () {

        count++;

        countText.innerHTML = "Clicks: " + count;
    });
}


// Places Array using Objects
const places = [

    {
        name: "Sydney Opera House",

        image:
        "https://i.pinimg.com/1200x/a2/14/7c/a2147ce2984dc2f937c992d32dab5ca8.jpg",

        description:
        "World famous building with unique architecture.",

        link: "opera-house.html"
    },

    {
        name: "Sydney Harbour Bridge",

        image:
        "https://i.pinimg.com/1200x/98/6a/e7/986ae71ff8da39a03f4de77513aeed8c.jpg",

        description:
        "Iconic bridge with beautiful harbour views.",

        link: "harbour-bridge.html"
    },

    {
        name: "Bondi Beach",

        image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",

        description:
        "Popular beach known for surfing and coastal walks.",

        link: "bondi-beach.html"
    }
];


// Display Places Dynamically
const placesContainer = document.getElementById("placesContainer");

function displayPlaces(data) {

    if (!placesContainer) {
        return;
    }

    placesContainer.innerHTML = "";

    data.forEach(function (place) {

        placesContainer.innerHTML += `

        <div class="place-card">

            <img src="${place.image}" alt="${place.name}">

            <h3>${place.name}</h3>

            <p>${place.description}</p>

            <a class="view-btn" href="${place.link}">
                Learn More
            </a>

        </div>
        `;
    });
}


// Initial Display
displayPlaces(places);


// Search Filter using filter()
const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("keyup", () => {

        let value = searchBox.value.toLowerCase();

        let filteredPlaces = places.filter((place) => {

            return place.name.toLowerCase().includes(value);
        });

        displayPlaces(filteredPlaces);
    });
}


// Form Validation
const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let username =
        document.getElementById("username").value;

        let email =
        document.getElementById("email").value;

        if (username === "" || email === "") {

            document.getElementById("error").innerHTML =
            "Please fill all fields";

        } else {

            document.getElementById("error").innerHTML =
            "Form Submitted Successfully!";
        }
    });
}


// JSON Handling
const user = {

    name: "Student",
    city: "Sydney"
};


// Convert object to JSON
let jsonData = JSON.stringify(user);

console.log(jsonData);


// Convert JSON back to object
let objectData = JSON.parse(jsonData);

console.log(objectData.name);


// Destructuring
const { name, city: placeCity } = user;

console.log(name);
console.log(placeCity);


// Loops
for (let place of places) {

    console.log(place.name);
}


// Recursive Function
function countdown(num) {

    if (num <= 0) {

        return;
    }

    console.log(num);

    countdown(num - 1);
}

countdown(5);