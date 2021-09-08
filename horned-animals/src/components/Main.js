import React, { Component } from 'react';
import HornedBeast from './HornedBeast';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            horned: [],
        }
    }

   



    render() {
        
        return (
            <div className='row'>
                 {
                    
                
                    
                   this.state.horned= this.props.data.filter(filtered =>this.props.filterHorns==filtered.horns),

                    this.state.horned.map(item => {
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
