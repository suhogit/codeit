import { useState } from "react";
import Board from "./Board";
import Button from "./Button";

import logo from './assets/logo.png';

import './App.css';
import './index.css';


function random(n) {
    return Math.ceil(Math.random () * n);
}

function App() {
    const [myHistory, setMyHistory] = useState([]);
    const [otherHistory, setOtherHistory] = useState([]);
    const [flag, setFlag] = useState(true);

    const handleRollClick = () => {
        const nextMyNum = random(6);
        const nextOtherNum = random(6);
        setMyHistory([...myHistory, nextMyNum]);
        setOtherHistory([...otherHistory, nextOtherNum]);
    };

    const handleClearClick = () => {
        setMyHistory([]); //초기화
        setOtherHistory([]);
    };



    return(
        <div className="App">
            
            <img className="App-logo" src={logo} alt="주사위게임 로고" />
            <h1 className="App-title">던져라 던져 주사위게임</h1>
            <div>
                <Button className="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
                <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
            </div>
            <div>
                <Board name="나" color="blue" gameHistory={myHistory} />
                <Board name="콤퓨타" color="red" gameHistory={otherHistory}/>
            </div>
        </div>
    );
}

export default App;