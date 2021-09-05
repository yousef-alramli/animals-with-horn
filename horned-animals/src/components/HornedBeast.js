import React, { Component } from 'react'

class HornedBeast  extends Component {
    render() {
        return (
            <>
                <h2>{this.props.name}</h2>
                <img src={this.props.src} alt={this.props.name} title={this.props.title} />
                <p>{this.props.description}</p>

            </>
        )
    }
}

export default HornedBeast 
