import React from 'react';
import DataGrid from '../DataGrid/DataGrid.react'
import PropTypes from 'prop-types'


let donorList = [
    {donorName: 'Ramesh', phone: 9273729193, bloodGroup: 'bpos'},
    {donorName: 'Preethi', phone: 9273729193, bloodGroup: 'apos'},
    {donorName: 'Kannu', phone: 9273723323, bloodGroup: 'opos'}
];
const ShowDonor = (props) => {

    return (
        <div >
            <h3 className='text-center'>{/*props.title*/}</h3>
            <DataGrid donorList = {donorList}>
            <thead>
                <tr>
                    <th>Donor Name</th>
                    <th>Phone Number</th>
                    <th>Blood Group</th>
                </tr>
            </thead>
            </DataGrid>
            
        </div>
    );
}
// ShowDonor.propTypes = {
//     title: PropTypes.string.isRequired
// };

export default ShowDonor;