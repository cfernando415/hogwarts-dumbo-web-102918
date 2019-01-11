import React, { Component } from 'react';


class Hog extends Component{
    constructor(props){
        super(props);
        this.state = {
            style: {display: 'none'}
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.setState({ style: { display: this.state.style.display === 'none' ? 'block' : 'none'} });
    }
    render(){
        return (
            <li>
                <b>{this.props.hog.name}</b><br/>
                <img onClick={this.clickHandler} src={require(`../hog-imgs/${this.props.hog.name.toLowerCase().replace(/\s/g, '_')}.jpg`)} alt="piggy" /> <br/>
                <p style={this.state.style}>Specialty: {this.props.hog.specialty}</p>
                <p style={this.state.style}>{this.props.hog.greased ? "Greasy" : "Not Greasy"}</p>
                <p style={this.state.style}>Wt. as ratio: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
                <p style={this.state.style}>Highest medal achieved: {this.props.hog['highest medal achieved']}</p>
                <br/>
            </li>
            
        )
    }
    
}

export default Hog;