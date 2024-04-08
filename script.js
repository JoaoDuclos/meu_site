// script.js

// Example: Toggle navigation menu for smaller screens
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// test
// navToggle.addEventListener('click', () => {
//     navMenu.classList.toggle('show');
// });

function changeLanguage() {
    const selectedLanguage = document.getElementById("language-select").value;

    // Hide all language-specific content
    const allContent = document.querySelectorAll("[id^='content-']");
    allContent.forEach(content => {
        content.style.display = "none";
    });

    // Show content for the selected language
    const selectedContent = document.getElementById("content-" + selectedLanguage);
    selectedContent.style.display = "block";
}

function redirectToResume() {
    // Get the current language of the page
    const currentLanguage = document.getElementById("language-select").value;

    // Define a map of language codes to resume URLs
    const resumeUrls = {
        'en': 'resume_en.pdf',
        'pt': 'resume_pt.pdf',
        'es': 'resume_es.pdf'
        // Add more language codes and resume URLs as needed
    };

    // Construct the URL for the corresponding resume based on the current language
    const resumeUrl = resumeUrls[currentLanguage];

    // Redirect the user to the resume URL
    window.location.href = resumeUrl;
}

function toggleAccordion() {
    const clickedButton = event.target; // Get the clicked button
    const clickedItem = clickedButton.parentElement; // Get the parent element of the clicked button (the accordion item)
    const accordionItems = document.querySelectorAll('.accordion-item'); // Select all accordion items

    // Loop through all accordion items
    accordionItems.forEach(item => {
        const content = item.querySelector('.accordion-content'); // Get the content of each accordion item

        // Toggle the visibility of the content
        if (item === clickedItem) {
            // If the current item is the clicked item, toggle its content
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        } else {
            // If the current item is not the clicked item, close its content
            content.style.display = 'none';
        }
    });
}

function displayMessage(message, type) {
    var chatMessages = document.getElementById("chat-messages");
    var messageDiv = document.createElement("div");
    messageDiv.classList.add("message", type);
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage(event) {
    event.preventDefault();
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();
    console.log(message)
    
    if (message !== "") {
        displayMessage(message, "sent");
        messageInput.value = "";
    }
}

// function sendMessage() {
//     var messageInput = document.getElementById("message-input");
//     var message = messageInput.value.trim();
    
//     if (message !== "") {
//         displayMessage(message, "sent");
        
//         // Send message to server
//         fetch('/chat', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ message: message }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             displayMessage(data.response, "received");
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
        
//         messageInput.value = "";
//     }
// }

