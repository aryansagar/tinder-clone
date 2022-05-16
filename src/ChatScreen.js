import React,{ useState } from 'react'
import { Avatar } from "@mui/material"
import "./ChatScreen.css"

function ChatScreen() {
    const [input, setInput] = useState('')

    const [messages, setMessages] = useState([
        {
        name: 'Ellen',
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Ellen_DeGeneres_2011.jpg",
        message: "whats up",
        },
        {
            name: 'Ellen',
            image: "https://media.vanityfair.com/photos/609d35ee8fee0e2d204a86e1/9:16/w_746,h_1327,c_limit/ellen-degeneres-gg-2020.jpg",
            message: "How it going",
        },
        {
            message : "what's going on"
        }
])

const handleSend = e =>{
    e.preventDefault()
    setMessages([...messages, {message: input}]);
    setInput('');
}
    return (
        <div className="chatScreen">
            <p className="chatScreen__timeStamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>

            {messages.map((message) =>(
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar 
                       className="chatScreen__image"
                       alt={message.name}
                       src={message.image} />

                       <p className="chatScreen__text">{message.message}</p>
                   </div>
                

   
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>

                )
            ))}
            
          
              <form className="chatScreen__input">
                <input 
                value={input}
                onChange={e =>setInput(e.target.value)}
                className="chatScreen__inputField"
                placeholder="type a message....."
                 type="text" />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
              </form>
          
           
        </div>
    )
}

export default ChatScreen
