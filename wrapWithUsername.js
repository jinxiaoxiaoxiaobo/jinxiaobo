import React, {Component} from 'react'

export default (WrappedComponent,n) => {
   return class NewComponent extends Component {
     constructor() {
            super();
            this.state = {
                username: ''
            }
        }

        componentWillMount() {
            let username = "jnb";
            this.setState({
                username: username
            })
        }

        render() {
            return (
            	<div>
            	     <WrappedComponent username={this.state.username}/>
            	     <span>{n}</span>
                </div> 	
            )
        }
    }

    
    
}