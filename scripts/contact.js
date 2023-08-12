// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.getElementById("submit-button").addEventListener("click", function() {
    var mainSection = document.querySelector(".contact-page");
    
    // Create the <p> element
    var thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Thank you for your message";
    thankYouMessage.classList.add("large-text"); // Apply the desired styling
    
    // Clear the existing content of the main section
    mainSection.innerHTML = '';
    
    // Append the <p> element to the main section
    mainSection.appendChild(thankYouMessage);
});
