// Define a function to handle user input and generate responses
function chatBot(input) {
  // Convert input to lowercase for easier processing
  input = input.toLowerCase();
  
  // Define a list of possible user inputs and corresponding responses
  const responses = {
    "hi": "Hello there!",
    "how are you": "I'm doing well, thanks for asking. How about you?",
    "goodbye": "Goodbye!",
    "help": "I'm a simple chat bot. You can say 'hi', 'how are you', or 'goodbye' to me."
  };
  
  // If the user input matches one of the keys in the responses object, return the corresponding value as the bot's response
  if (responses.hasOwnProperty(input)) {
    return responses[input];
  }
  
  // If the user input doesn't match any of the keys in the responses object, apologize and ask the user to try again
  else {
    return "I'm sorry, I didn't understand. Can you please try again?";
  }
}

// Define a function to handle user input from a web form and display the bot's response
function handleSubmit(event) {
  // Prevent the form from refreshing the page
  event.preventDefault();
  
  // Get the user input from the form
  const userInput = document.getElementById("user-input").value;
  
  // Clear the form input field
  document.getElementById("user-input").value = "";
  
  // Call the chatBot function to generate a response
  const botResponse = chatBot(userInput);
  
  // Display the bot's response on the web page
  const chatLog = document.getElementById("chat-log");
  chatLog.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
  chatLog.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
}

// Add an event listener to the form submit button to trigger the handleSubmit function
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", handleSubmit);
