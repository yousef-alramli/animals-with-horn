import React, { Component } from 'react';
import {
    Col
} from "react-bootstrap"
import HornedBeast from './HornedBeast';

class Main extends Component {
    


    render() {
        
        
        return (
            <div className = 'row'>
            
            
                {
                    this.props.data.map(item => {
                        return <HornedBeast keyword={item.keyword}
                            image_url={item.image_url}
                            title={item.title}
                            description={item.description}
                            horns={item.horns} 
                            handleOpen={this.props.handleOpen}
                            />
                    })
                }
            </div>
        )
    };
}

export default Main;
