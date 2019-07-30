import React from 'react';
import {connect} from 'react-redux';
import store, {logout} from '../store'

class Menu extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    log = ()=>{
        store.dispatch(logout);
    }
    render() {
        if(this.props.logged){
            return (
                <div >
                    <h3>Menu</h3>
                    <button onClick={this.log}>{this.props.message}</button>
                </div>
            );
        }
        else{
            return(
                <div>
                    <h3>Menu</h3>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.message,
        logged: state.status
    }
}

//export default Menu;
export default connect(mapStateToProps)(Menu);