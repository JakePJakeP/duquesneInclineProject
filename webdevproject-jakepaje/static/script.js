document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].style.display = "none"; // Hide current slide
        currentIndex = (currentIndex + 1) % slides.length; // Loop to next slide
        slides[currentIndex].style.display = "block"; // Show next slide
    }

    setInterval(showNextSlide, 3000); // Automatically change slide every 3 seconds
});

document.addEventListener("DOMContentLoaded", function() {
    const heading = document.querySelector("h1");

    // Trigger class addition for smooth visibility transition
    setTimeout(() => {
        heading.classList.add("visible");
    }, 200); // 200ms delay for effect
});

$(document).ready(function () {
    let currentIndex = 0;
    const slides = $(".carousel-slide");
    const totalSlides = slides.length;

    $(slides[currentIndex]).show(); // Initially show the first slide

    function showNextSlide() {
        $(slides[currentIndex]).fadeOut(500); // Hide current slide
        currentIndex = (currentIndex + 1) % totalSlides; // Move to next slide
        $(slides[currentIndex]).fadeIn(500); // Show next slide
    }

    setInterval(showNextSlide, 3000); // Automatically change slide every 3 seconds
});

// Replace with your actual API key
const apiKey = 'YOUR_API_KEY';
const weatherDiv = document.getElementById('weather');

document.addEventListener("DOMContentLoaded", function () {
    const weatherContainer = document.getElementById("weather-container");

    const apiKey = "5344abbb8a1a8d4b3f8d42498c6279f5";  // Your API Key
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Pittsburgh&appid=${apiKey}&units=imperial`;

    // Fetch the weather data from OpenWeather API
    fetch(weatherUrl)
        .then(response => response.json())  // Parse response as JSON
        .then(data => {
            // Extract and display relevant weather data
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            const weatherHTML = `
                <p><strong>Temperature:</strong> ${temperature}°F</p>
                <p><strong>Conditions:</strong> ${weatherDescription}</p>
                <p><strong>Humidity:</strong> ${humidity}%</p>
                <p><strong>Wind Speed:</strong> ${windSpeed} mph</p>
            `;
            
            weatherContainer.innerHTML = weatherHTML; // Update the weather container
        })
        .catch(error => {
            console.error("Error fetching weather data: ", error);
            weatherContainer.innerHTML = "<p>Sorry, we couldn't fetch the weather data.</p>"; // Handle errors
        });
});

// Add an event listener for form submission to validate user input
document.getElementById("mailing-list-form").addEventListener("submit", function(event) {
    let form = event.target;
    let name = form.name.value;
    let email = form.email.value;
    let phone = form.phone.value;
    let zipcode = form.zipcode.value;
    let valid = true;

    // Validate name length
    if (name.length < 2) {
        alert("Name must be at least 2 characters.");
        valid = false;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    // Validate phone number if provided
    if (phone && !/^\d{10,15}$/.test(phone)) {
        alert("Please enter a valid phone number (only numbers, between 10 to 15 digits).");
        valid = false;
    }

    // Validate zip code if provided
    if (zipcode && !/^\d{5}$/.test(zipcode)) {
        alert("Zip code must be exactly 5 digits.");
        valid = false;
    }

    // Prevent form submission if any validation fails
    if (!valid) {
        event.preventDefault(); // Stop form submission
    }
});