import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

class Hornsform extends Component {
    filterByHorns = (e) => {
        this.props.filterByHorns(e)



    }

    render() {
        return (
            <>

                <Form >
                    <Form.Label>Filter by horns number</Form.Label>
                    <select name="cars" id="cars" onChange={this.filterByHorns}>
                        <option value="0">choose number</option>
                        <option value="1">1 Horn</option>
                        <option value="2">2 Horns</option>
                        <option value="3">3 Horns</option>
                        <option value="100">100 Horns</option>
                    </select>


                </Form>

            </>
        )
    }
}

export default Hornsform