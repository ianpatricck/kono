const { io } = require('socket.io-client')
const socket = io.connect("http://localhost:4000")

var messages = []

/*
 * Listening the messages that be received from server
 * and create a list of messages
 *
 */

socket.on("receive_message", (data) => {
    messages.push(data)

    let userSection = document.createElement("div")
    userSection.className += "room_chat_user-section"

    let username = document.createElement("span")
    let time = document.createElement("small")

    let messageContent = document.createElement("p")
    messageContent.className += "room_chat_message-content"

    messages.map(content => {

        document.querySelector(".room_chat_message-container").appendChild(userSection)

        userSection.appendChild(username)
        userSection.appendChild(time)

        document.querySelector(".room_chat_message-container").appendChild(messageContent)

        username.innerText = content.from
        time.innerText = content.time
        messageContent.innerText = content.message
    })
})


