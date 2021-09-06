import React, { Component } from 'react'

class HornedBeast  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: 0,

        }
    }
    addVotes = () => {
        this.setState({
            votes: this.state.votes + 1,
        })
    }
    render() {
        const mystyle = {
            width: "400px",
            height: "400px",
            
          };
        return (
            <>
                <h2>{this.props.name}</h2>
                <img src={this.props.src} alt={this.props.name} title={this.props.title} style={mystyle} onClick={this.addVotes}/>
                <p>Horns: {this.props.horns}</p>
                <p>{this.props.description}</p>
                <p>Number of votes: {this.state.votes}</p>

            </>
        )
    }
}

export default HornedBeast ;
