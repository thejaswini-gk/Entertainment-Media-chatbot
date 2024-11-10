function getBotResponse(userInput) {
    userInput = userInput.toLowerCase();

    // Greeting responses
    if (userInput.includes("hi") || userInput.includes("hello")) {
        return "Hello! How can I assist you today in entertainment and media?";
    }

    if (userInput.includes("how are you")) {
        return "I'm just a bot, but I'm here to help you with anything related to movies, music, and entertainment!";
    }

    // Movie-related responses
    if (userInput.includes("movie") || userInput.includes("film")) {
        let movieSuggestions = ["Inception", "The Dark Knight", "Interstellar", "Parasite", "The Matrix"];
        return "I suggest you watch: " + movieSuggestions[Math.floor(Math.random() * movieSuggestions.length)];
    }

    // Music-related responses
    if (userInput.includes("music") || userInput.includes("song")) {
        let musicSuggestions = ["Blinding Lights - The Weeknd", "Levitating - Dua Lipa", "Save Your Tears - The Weeknd", "drivers license - Olivia Rodrigo"];
        return "How about listening to: " + musicSuggestions[Math.floor(Math.random() * musicSuggestions.length)];
    }

    // TV Show recommendations
    if (userInput.includes("tv show") || userInput.includes("series")) {
        let tvShowSuggestions = ["Breaking Bad", "Stranger Things", "Game of Thrones", "The Office", "The Crown"];
        return "You should check out: " + tvShowSuggestions[Math.floor(Math.random() * tvShowSuggestions.length)];
    }

    // Celebrity News
    if (userInput.includes("celebrity") || userInput.includes("celeb")) {
        return "Stay tuned for the latest celebrity gossip! (Consider integrating a real-time news API).";
    }

    // General entertainment-related responses
    if (userInput.includes("entertainment")) {
        return "Entertainment covers movies, music, TV shows, and celebrity news! Feel free to ask more specific questions.";
    }

    // If the input doesn't match any topic
    return "Sorry, I can help with movies, music, TV shows, or entertainment news. Please ask me anything related to that!";
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    
    if (userInput === "") return; // Prevent sending empty messages

    // Create user message element
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.innerText = userInput;

    // Append user message to chat box
    const chatBox = document.getElementById("chat-box");
    chatBox.appendChild(userMessage);

    // Get bot response
    const botResponse = getBotResponse(userInput);

    // Create bot message element
    const botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");
    botMessage.innerText = botResponse;

    // Append bot message to chat box
    chatBox.appendChild(botMessage);

    // Clear input field
    document.getElementById("user-input").value = "";

    // Scroll chat to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}