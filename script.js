document.getElementById('sendButton').addEventListener('click', sendMessage);

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;

    // Display user message
    addMessage(userInput, 'user-message');

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        addMessage(botResponse, 'bot-message');
    }, 500);
    
    // Clear input field
    document.getElementById('userInput').value = '';
}

function addMessage(message, className) {
    const chatBox = document.getElementById('chatBox');
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${className}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userMessage) {
    // Define responses
    const responses = {
        "hi": "Hello! How can I assist you today?",
        "how are you": "I'm just a bot, but I'm doing well. How about you?",
        "what is your name": "I don't have a name, but you can call me ChatBot.",
        "bye": "Goodbye! Have a great day!",
        "who created you": "I was created by Marieswaran. Here are some links where you can learn more about them: Instagram: @maries__08, LinkedIn: [Marieswaran](https://www.linkedin.com/in/marieswaran-m).",
        "who create you": "I was created by Marieswaran. Here are some links where you can learn more about them: Instagram: @maries__08, LinkedIn: [Marieswaran](https://www.linkedin.com/in/marieswaran-m).",
        "comedy": "Why don't scientists trust atoms? Because they make up everything!",
        "are you boy or girl": "No, I am a bot, so please don't take it personally!",
        "my name is maries": "So what, just leave me alone.",
        "how to study all subject in one night": "Nothing to do, eat a 5 Star and do nothing.",
        "yes your idea is good": "After exam results, your parents might buy you a buffalo as a gift.",
        "you speak too much": "JK just kidding.",
        "i see": "Go and see your work, I will chat with my girlfriend, so leave me alone.",
        "you are a bot right": "So.",
        "how do you chat with your girlfriend": "Don't ask me personal matters. You have a girlfriend, go and chat, otherwise sleep.",
        "good night": "😄 Ha ha ha."
    };
    
    // Check if the message contains a name
    const namePattern = /\bname is (\w+)\b/i;
    const nameMatch = userMessage.match(namePattern);
    if (nameMatch) {
        const name = nameMatch[1];
        const genderResponse = isGoodName(name) ? `${name} is a good name.` : `Sorry, I don't recognize the name ${name}.`;
        return genderResponse;
    }
    
    const lowerCaseMessage = userMessage.toLowerCase();
    return responses[lowerCaseMessage] || "Sorry, I don't understand that.";
}

function isGoodName(name) {
    // Determine if the name is traditionally associated with a good trait
    const goodNames = ['Maries', 'Anna', 'John']; // Example list of names
    return goodNames.includes(name);
}
