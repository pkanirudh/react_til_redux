import React from 'react';
import {connect} from 'react-redux';
import {getListByThunk} from '../donorReducer'


const DisplayDonors = (props) => {

    return (
        <div >
            {props.list}
            <button onClick={props.getDonors}>Get Data</button>
        </div>
    );

}
const mapStateToProps = (state) => {
    return {
        list: state.payload
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDonors: () => {
            dispatch(getListByThunk())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DisplayDonors);
//export default DisplayDonors;