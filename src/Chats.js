import React from 'react'
import "./Chats.css"
import ChatRow from "./ChatRow"

function Chats() {
    return (
        <div className="chats">
            <ChatRow
            name="Sareh"
            message="Hey How are "
            timestamp="40 seconds ago"
            profilePic="https://www.mirchi9.com/wp-content/uploads/2022/01/Keerthy-Sureshs-Bad-Run-Needs-To-End.jpg"
             />
            <ChatRow
            name="Ellon"
            message="Yo whats up!"
            timestamp="55 mintes ago"
            profilePic="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-04/220421-elon-musk-al-1017-a6eece.jpg"
             />
            <ChatRow
            name="Sandra"
            message="Ola!"
            timestamp="3 days ago"
            profilePic="https://image.shutterstock.com/image-photo/london-united-kingdom-june-13-260nw-1704465349.jpg"
             />
            <ChatRow
            name="Natasha"
            message="Oops there is there is..."
            timestamp="7 days ago"
            profilePic="https://i.zoomtventertainment.com/story/natasha-dalal-wedding-lehenga-options.jpg"
             />
        </div>
    )
}

export default Chats
