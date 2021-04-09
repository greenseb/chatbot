//timestamp function

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    dates = today.getDate();
    month = today.getMonth();
    year = today.getFullYear();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes + " " + dates + "/" + month + "/" + year;
    time = time.fontsize(1);
    return time;
}



// intro and first message

const userName = prompt("Hi there! What should I call you?");

function firstBotMessage() {
    let firstMessage = `Hello, ${userName}. Nice to meet you!` + " " + getTime();

    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
}

firstBotMessage();



// bot response

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + " " + getTime() + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}



// processes user input

$("#textInput").keydown(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

function getResponse() {
    let userText = $("#textInput").val();

    let userHtml = '<p class="userText"><span>' + userText + " " + getTime() + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}

function sendButton(){
    getResponse();
}


// Handles sending text via button clicks

function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}



// bot responses

function getBotResponse(input) {

    input = input.toLowerCase().replace(/[?']/g, '');

    let helloResponse = ["hello", "hi", "hiya", "hey"];
    let goodbyeResponse = ["cya", "goodbye", "bye", "see ya", "talk later"];
    let howAreResponse = ["how are you", "whats up", "how are you doing", "you"];
    let whatName = ["what is your name", "whats your name", "what are you called"];
    let tellJoke = ["tell me a joke", "joke", "tell me a joke please", "can you tell me a joke"];

    if (helloResponse.includes(input)) {
        return "Hello there!";
    } else if (goodbyeResponse.includes(input)) {
        return "Take care, goodbye!";
    } else if (howAreResponse.includes(input)) {
        return "I think, therefore I am!";
    } else if (whatName.includes(input)) {
        return "My creator did not name me...";
    } else if (tellJoke.includes(input)) {
        return "!false (...it's funny because it's true)";
    } else if (input === " " || input === "") {
        return "Are you giving me the silent treatment?";
    } else {
        return `Sorry, ${userName}. I didn't understand that.`;
    }
}
