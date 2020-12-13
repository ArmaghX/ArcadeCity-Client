import React, { Component } from 'react';

class FilterBtn extends Component {
    render(props) {
        return (
            <button onClick={this.props.onClick} style={{backgroundColor: "white", padding: 8, borderRadius: 6}}>
                <span>Filter Search</span>
            </button>
        )
    }
}

export default FilterBtn;
