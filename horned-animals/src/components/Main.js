import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import HornsForm from './HornesForm'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            horned: this.props.data,
            
        }
    }
    filterByHorns = (e) => {
        let filterHorns =parseInt(e.target.value);
        
        let finalFilter = this.props.data
        if (filterHorns > 0) {
            finalFilter = this.props.data.filter(after => after.horns === filterHorns);
        }
         this.setState({
                horned:finalFilter
            })
    }
    render() {
        return (
            <>
                <HornsForm
                    filterByHorns={this.filterByHorns}
                />
                <div className='row'>
                    {
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
            </>
        )
    };
}

export default Main;
