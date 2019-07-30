import React from 'react';
import ShowGreeting from '../ShowGreeting/ShowGreeting.react';
import store, { birth, valen } from '../store';
import {connect} from 'react-redux';
import './Greeter.css';

class Greeter extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         message: "Hello"
    //     }
    // }
    birthday = () => {
        //this.setState({message: "Happy Birthday Dear"}) for react without redux
        store.dispatch(birth);
    }

    valentinesDay = () => {
        //this.setState({message: "Happy Valentine's Day Love"});
        store.dispatch(valen);
    }

    render() {
        return (
            <div className='greeter_wrapper'>
                <ShowGreeting action={this.props.bday} label = "Birthday"></ShowGreeting>
                <ShowGreeting action={this.props.vday} label = "Valentine's Day"></ShowGreeting>
                <h3>{this.props.message}</h3>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        bday : () => {
            dispatch(birth);
        },
        vday : ()=>{
            dispatch(valen);
        }
    }
}

// const mapStateToProps = (state) => {
//     return {
//         message: state.message
//     }
// }

export default connect(mapDispatchToProps)(Greeter)
//export default Greeter;