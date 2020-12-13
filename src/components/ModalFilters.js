import React, { Component } from 'react';

class ModalFilters extends Component {
    render(props) {
        return (
            <div style={{position: "absolute", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(89, 89, 89, 0.50)"}}>
                <div style={{border: "2px solid black", height: "50%", width: "50%", backgroundColor: "white"}}>
                   <button onClick={this.props.onClick} style={{marginBottom: 40}}>
                     <span> Close </span>
                   </button>
                   <div style={{height: "70%", width: "100", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center"}}>
                   {/* <form className="" onSubmit={this.handleSubmit}> */}
                    <input type="text" name="game" value={this.props.game} onChange={this.props.handleChange} placeholder="Game" />
                    <label>Emulation</label>
                    <input type="checkbox" name="isEmulated" value={this.props.isEmulated} onChange={this.props.handleChange} />
                    <button type="submit"> SEARCH </button>
                    </div>
            {/* </form> */}
                </div>
            </div>
        )
    }
}

export default ModalFilters;