import React, { Component } from 'react'

class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: 0,
            hearts: '',
        }
    }
    addVotes = () => {
        this.setState({
            votes: this.state.votes + 1,
            hearts: <p>&#10084;	</p>
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
                    <img src={this.props.src} alt={this.props.name} title={this.props.title} style={mystyle} onClick={this.addVotes} />
                    <div>{this.state.hearts}</div>
                    <p>Horns: {this.props.horns}</p>
                    <p>{this.props.description}</p>
                    <p>Number of votes: {this.state.votes}</p>
                    

                </>
                )
    }
}

                export default HornedBeast ;
