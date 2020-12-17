import React, { Component } from 'react';
import { withAuth } from './../../context/auth-context';
import apiService from './../../lib/api-service';

import ArcadeCard from './../../components/arcade-cards/ArcadeCard';

class Favourites extends Component {
    state = {
        favArcades: []
    }

    componentDidMount() {
        apiService.me()
        .then((me) => {
            const favArcadesArr = me.favourites;
            this.setState({favArcades: favArcadesArr})
        })
        .catch((err) => console.log(err));
    }

    showArcadeDetails = (id) => {
        this.props.history.push(`/arcade-details/${id}`)
    }

    render() {
        return (
            <div>
                {this.state.favArcades.length > 0 
                ? this.state.favArcades.map((element) => {
                    return <ArcadeCard key={element._id} arcade={element} style={{marginBottom: 40}} currentUser={this.props.user} showArcadeDetails={this.showArcadeDetails} isFavourite />}
                )
                : 
                <>
                    <div style={{marginTop: 100}}>
                        <h2 style={{textAlign: "center"}}> YOUR FAVOURITE ARCADES ARE OUT THERE </h2>
                    </div>
                </>

                }
            </div>
        )
    }
}

export default withAuth(Favourites);
