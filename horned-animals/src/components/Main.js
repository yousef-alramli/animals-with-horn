import React, { Component } from 'react';
import HornedBeast from './HornedBeast';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            horns: '',
        }
    }

    setSlecetedHorns = () => {

        let horns = this.props.filterHorns
        this.setState({
            horns: horns,
            
        });


    }

    render() {

        console.log(this.state.horns);

        return (
            <div className='row'>
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
