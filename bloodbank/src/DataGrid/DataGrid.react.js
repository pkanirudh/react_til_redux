import React from 'react';
import PropTypes from 'prop-types';


const DataGrid = (props) => {

    return (
        <div >
            <table className='table table-striped'>
                {props.children}
                <tbody>
                    {
                        props.donorList.map((eachDonor, index)=>{
                            return <tr key={index}>
                                        <td>{eachDonor.donorName}</td>
                                        <td>{eachDonor.phone}</td>
                                        <td>{eachDonor.bloodGroup}</td>
                                    </tr>
                        })
                    }         
                </tbody>
            </table>
        </div>
    );

}

let Donor = PropTypes.shape({
    donorName: PropTypes.string.isRequired,
           phone: PropTypes.number.isRequired,
           bloodGroup: PropTypes.oneOf(['apos', 'bpos', 'opos', 'abpos']).isRequired,
});
DataGrid.propTypes = {
    donorList: PropTypes.arrayOf(Donor).isRequired
};

export default DataGrid;