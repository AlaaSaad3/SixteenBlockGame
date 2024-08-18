import React from "react";
import { GAME_STATE_PLAYING, GAME_STATE_WIN, GAME_STATE_DRAW } from "../Constants";
const Footer = ({ onClickEvent, onSuggestClick, gameState }) => {
    return (
        <div className="panel footer">
            {
                gameState === GAME_STATE_PLAYING &&
                <button onClick={onSuggestClick} > Suggest </button>
            }
            {
                gameState !== GAME_STATE_PLAYING &&
                <button onClick={onClickEvent}> New Game </button>
            }


        </div>
    );
};
export default Footer;