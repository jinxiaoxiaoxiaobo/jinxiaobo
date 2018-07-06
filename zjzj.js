import React, { Component } from 'react';
import wrapWithUsername from './wrapWithUsername.js';
class Second extends Component {
    render() {
        return(
            <div>
                <h2>Hi {this.props.username}</h2>
                
            </div>
        )
    }
}
 Second = wrapWithUsername(Second,"靳宁波");
 export default Second