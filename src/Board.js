import { useState } from "react";
import Dice from "./Dice";
import './index.css';

function Board({ name, color, gameHistory }) {
    const num = gameHistory[gameHistory.length - 1] || 1; // 1 - 1은 0인데 0이라는 배열(!~6)은 없으니 || 1 이 됨 그래서 주사위 1부터 나옴
    const sum = gameHistory.reduce((a, b) => a + b, 0); //0은 초기값 a,b를 받아와서 총점 +
    
    return (
        <div className="Board App-board">
            <h2>{name}</h2>
            <Dice color={color} num={num} />
            <h2>총점</h2>
            <p>{sum}</p>
            <h2>기록</h2>
            <p>{gameHistory.join(', ')}</p>
        </div>
    );
}

export default Board;