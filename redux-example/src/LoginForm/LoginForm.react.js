import React from 'react';
import store, { login } from "../store";
import { connect } from 'react-redux';


class LoginForm extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    log = () => {
            store.dispatch(login);

    }

    

    render() {
        if(!this.props.logged){
            return (
                <div>
                    <h3>Login</h3>
                    <button onClick={this.log} name="loginButton">Click Me</button>
                </div>
            );  
        }
        else{
            return(
                <div></div>
            );
        }
        
    }
}

 const mapStateToProps = (state) => {
     return {
         logged: state.status,
    }
 }
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         log: () => {
//             if(!this.props.logged){
//                 dispatch(login);
//             }
//             else{
//                 dispatch(logout);
//             }
//         }
//     }
// }

export default connect(mapStateToProps)(LoginForm);