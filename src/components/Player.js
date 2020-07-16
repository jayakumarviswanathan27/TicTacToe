
import React, { Component } from 'react';

class Player extends Component {

    hForm(e) {
        e.preventDefault();
        this.props.player(e.target.player.value)
    }
    render() {
        return (
            <form onSubmit={(e) => this.hForm(e)}>
                <label>
                    Player X
                <input type="radio" name="player" value="X" />
                </label>
                <label>
                    Player O
                <input type="radio" name="player" value="O" />
                </label>
                <input type="submit" value="Start" />
            </form>
        )
    }
}

export default Player;
