import React, { Component } from 'react';

import apiService from './../../lib/api-service';

class ArcadeDetails extends Component {
    state = {
        arcadeToDisplay: {}
    }

    componentDidMount(){

        let {id} = this.props.match.params;
        console.log(id)
        apiService.getOneArcade(id)
            .then((arcade) => {
                this.setState({arcadeToDisplay: arcade})
            })
            .catch((err) => console.log(err));
            
    }

    render() {
        return (
            <div>
                {this.state.arcadeToDisplay.game}
            </div>
        )
    }
}

export default ArcadeDetails;