import React, { Component } from 'react'
import {
    Card,
    Col
} from "react-bootstrap"
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
            hearts: <p>&#10084;	</p>,

        })
    }
    getModalOpen = () => {
        let name = this.props.title;
        let image_url = this.props.image_url;
        let description = this.props.description;
        this.props.handleOpen(name, image_url, description);
        this.addVotes()
    }
    render() {
        const mystyle = {
            width: "400px",
            height: "400px",
        };
       
        return (
            <>
            
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img src={this.props.image_url}
                            alt={this.props.name}
                            title={this.props.title}
                            style={mystyle} onClick={this.getModalOpen} />
                        <Card.Body>
                            <Card.Title> <h2>{this.props.keyword}</h2></Card.Title>
                            <Card.Text>
                                <div>{this.state.hearts}</div>
                                <p>Horns: {this.props.horns}</p>
                                <p>{this.props.description}</p>
                                <p>Number of votes: {this.state.votes}</p>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
                



            </>
        )
    }
}

export default HornedBeast;
