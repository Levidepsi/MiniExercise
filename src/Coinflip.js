import React, { Component } from "react";
import { choice } from "./helpers";
import Coin from "./Coin";
class CoinFlip extends Component {

    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: 'https://th.bing.com/th/id/OIP.CKPpzkhmtFkPeLTBJVhbDgHaHh?w=196&h=198&c=7&r=0&o=5&pid=1.7 '},
            { side: "tails", imgSrc: 'https://th.bing.com/th/id/OIP.6fkCCLjvKEGIuzCh6zEOzQHaHo?w=168&h=180&c=7&r=0&o=5&pid=1.7 '}
        ]
    }
 
    constructor(props){
        super(props)
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    flipCoin(){
        const newCoin = choice(this.props.coins)
        this.setState(st => {
            // 
            // if(newCoin.side === 'heads') {
            //     newState.nHeads += 1
            // } else {
            //     newState.nTails += 1
            // }

            return   {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === 'heads' ? + 1 : 0),
                nTails: st.nTails + (newCoin.side === 'tails' ? + 1 : 0)
            }
               
        })
    }

    handleClick(e){
        this.flipCoin()
    }

    render(){
        return(
            <div className="CoinContainer">
            <h2>Let's Flip a Coin</h2>
            {this.state.currCoin && <Coin info={this.state.currCoin} />}
            <button onClick={this.handleClick} >Let's Flip</button>
            <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{''} heads and {this.state.nTails} tails  </p>    
            </div>
        )
    }

}

export default CoinFlip