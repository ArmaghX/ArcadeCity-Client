import React, { Component } from 'react';

class FilterBtn extends Component {
    render(props) {
        return (
            <button onClick={this.props.onClick} style={{backgroundColor: "white", padding: 6, borderRadius: 6}}>
                <span>Search</span>
            </button>
        )
    }
}

export default FilterBtn;
