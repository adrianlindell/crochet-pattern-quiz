import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Browse from "./components/Browse";
import MyPatterns from "./components/MyPatterns";
import Quiz from "./components/Quiz";
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [googleObj, setGoogleObj] = useState();

  const RESULTS_DATA = [
    { imgsrc: "https://www.1dogwoof.com/wp-content/uploads/2018/11/amigurumi-seahorse-fb.jpg", photographer: "1dogwoof.com", result: "Seahorse", url:"https://www.1dogwoof.com/amigurumi-seahorse-crochet-pattern/" },
    { imgsrc: "https://i.ytimg.com/vi/6yFnIw--Hwg/maxresdefault.jpg", photographer: "HappyBerry Crochet via YouTube", result: "Snail", url: "https://www.happyberry.co.uk/free-crochet-pattern/Mini-Snail/5065/" },
    { imgsrc: "https://pinkmouseboutique.files.wordpress.com/2019/04/img_4060-1.jpg", photographer: "Knit and Crochet Daily", result: "Sea turtle", url: "https://www.dailycrochet.com/tiny-turtle-crochet-pattern/" },
    { imgsrc: "http://engsidrun.spire.ee/blogs/media/blogs/a/patterns/Frog/PT_IMGP0279.JPG", photographer: "Kristi Tullus", result: "Frog", url: "http://engsidrun.spire.ee/blogs/blog1.php/free-pattern-tree-frog" },
  ]

  return (
    <div className="App">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <Router>
        <Navigation googleObj={googleObj}/>
        <Switch>
          <Route path="/" exact component={() => <Quiz googleObj={googleObj} RESULTS_DATA={RESULTS_DATA} />} />
          <Route path="/browse" exact component={() => <Browse googleObj={googleObj} RESULTS_DATA={RESULTS_DATA} />} />
          <Route path="/mypatterns" exact component={() => <MyPatterns googleObj={googleObj} RESULTS_DATA={RESULTS_DATA} />} />
        </Switch>
      </Router>
      <div className="footer">
        <footer class="py-3 fixed-bottom" style={{backgroundColor: "#343a40", color: "white"}} >
          <div className="GoogleOAuth" >
            {googleObj ? 
            <div>
              {`Welcome ${googleObj.name}!`}
            </div>
            :null}
            {loggedIn ? 
            <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setGoogleObj={(obj) => setGoogleObj(obj)}/>
            :
            <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setGoogleObj={(obj) => setGoogleObj(obj)}/>}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
