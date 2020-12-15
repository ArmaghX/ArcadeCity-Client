import React, { Component } from 'react';
import { withAuth } from './../../context/auth-context';
import axios from 'axios';

// Import Assets
import avatar from './../../assets/avatar.png';

import ArcadeCard from './../../components/arcade-cards/ArcadeCard';

class PlayerProfile extends Component {
    state = {
        avatarImg: "",
        isEditing: false,
        arcade: []
    }

    componentDidMount() {

        if (this.props.user.listedArcades.length > 0 ) {
            const myArcadesArr = this.props.user.listedArcades;
            this.setState({arcade: myArcadesArr})
            
        }
    }

    editMyProfile = () => {
        this.setState({isEditing: true})
    }

    cancelEditProfile = () => {
        this.setState({isEditing: false})
    }

    handleFileUpload = (e) => {
        console.log("The file to be uploaded is: ", e.target.files);
        const file = e.target.files[0];
    
        const uploadData = new FormData();
        // image => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new project in '/api/projects' POST route
        uploadData.append("avatarImg", file);
    
        axios
          .post(`${process.env.REACT_APP_API_URL}/api/player/upload`, uploadData, {
            withCredentials: true,
          })
          .then((response) => {
            console.log("response is: ", response);
            // after the console.log we can see that response carries 'secure_url' which we can use to update the state
            this.setState({ avatarImg: response.data.secure_url });
          })
          .catch((err) => {
            console.log("Error while uploading the file: ", err);
          });
      };

    render() {
        return (
            
            <div style={{padding: 30}}>
                {!this.state.isEditing
                ?
                <>
                    <button style={{borderRadius: 6}} onClick={this.editMyProfile} > Edit </button>
                    <div style={{display: "flex", alignItems: "center", flexDirection: "column", height: "100vh"}}>
                        <h2>PROFILE</h2>
                        <img src={avatar} alt="" style={{height: "auto", width: 80, marginBottom: 20}} />
                        <div>
                            <h3 style={{textAlign: "center"}}>LISTED ARCADES</h3>
                            {this.state.arcade.length > 0 
                            ? this.state.arcade.map((element) => {
                                return <ArcadeCard key={element._id} arcade={element} style={{marginBottom: 40}}/>}
                            )
                            : <p>No results found for this City</p>
                            }
                        </div>
                    </div>
                </>
                : 
                <>
                    <button style={{borderRadius: 6}} onClick={this.cancelEditProfile} > Cancel Edit </button>
                    <div style={{display: "flex", alignItems: "center", flexDirection: "column", height: "100vh"}}>
                        <h2>PROFILE</h2>
                        <form>
                            <img src={avatar} alt="" style={{height: "auto", width: 80, marginBottom: 20}} />
                        </form>
                        <div>
                            <h3 style={{textAlign: "center"}}>MODIFY LISTED ARCADES</h3>
                            {this.state.arcade.length > 0 
                            ? this.state.arcade.map((element) => {
                                return <ArcadeCard key={element._id} arcade={element} style={{marginBottom: 40}} />}
                            )
                            : <p>No results found for this City</p>
                            }
                        </div>
                    </div>
                </>
                }
            </div>
        )
    }
}

export default withAuth(PlayerProfile);
