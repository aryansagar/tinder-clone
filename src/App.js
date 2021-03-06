import './App.css';
import Chats from "./Chats"
import Header from "./Header"
import TinderCards from './TinderCards';
import SwipeButtons from "./SwipeButtons";
import { BrowserRouter as Router , Switch, Route , Link} from "react-router-dom"
import ChatScreen from "./ChatScreen"

function App() {
  return (
    <div className="app">
      
        <Router>
          
             <Switch>
             <Route path="/chat/:person">
                    <Header backButton="/chat"/>
                    <ChatScreen />
                   
               </Route>

               <Route path="/chat">
                    <Header backButton="/"/>
                    <Chats />
                   
               </Route>

               <Route path="/">
                  <Header />
                 <TinderCards />
                 <SwipeButtons />
               </Route>
           </Switch>
         </Router>


    </div>
  );
}

export default App;



         {/* Header */}
         {/* Tinder Cards */}
          {/* Button below tinder cards */}

          {/* Chats screen */}
          {/* Individual chat screen */}

          
