import React from 'react';
import ReactDOM from 'react-dom';
import ShowCity from '../ShowCity/ShowCity.react';


class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name: "The Comedian",
            city: "Ho Chi Minh"
        }
        //Create a stateless component showCity which takes a prop city and display
        //the same when the state property city changes observe showCity render is also called
        console.log("constructor() called");
    }

    componentDidMount(){
        console.log("componentDidMount() called");
        //const elementToAdd = '<h1>Added this shtuff</h1>';
        
        const element=ReactDOM.findDOMNode(this);
        //const child=element.firstChild
        //ReactDOM.render("Boop Boop", child);
        console.log(element);
    }
    
change = ()=>{
    console.log("Boom change laka");
    this.setState({name: this.state.name+" retired", city: "Manhattan"});
}

    render() {
        console.log("render() method called");
        return (
            <div >
                <ShowCity city={this.state.city}/>
                <h2>{this.state.name}</h2>
                <button onClick={this.change}>Update</button>
            </div>
        );
    }
}

export default LifeCycle;