import React from "react";
import './styles/Game.css';
import Board from "./Board";
// probably keeps track of score and if someone wins, has access to the board

function Game() {
    
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
        </div>
    )
}

export default Game;