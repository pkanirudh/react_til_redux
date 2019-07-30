import React from 'react';
// import ShowDonor from '../ShowDonor/ShowDonor.react';
// import Search from '../Search/Search.react'
// import Blog from '../Blog/Blog.react'
// import FetchDonors from '../FetchDonors/FetchDonors.react';
// import AddDonor from '../AddDonor/AddDonor.react';
// import LifeCycle from '../LifeCycle/LifeCycle.react';
import abpos from '../abpos.png'
import ShowContent from '../ShowContent/ShowContent.react';

const request = {
    bloodGroup: 'abpos',
    requiredUnits: 12,
    location: 'Chennai',
    imageRef: abpos
  };

const Content = (props) => {

    return (
        <div >
            {/* 
            <ShowDonor title={'Transylvaniya Donors'}/>
            <AddDonor></AddDonor>
            <FetchDonors/>
            <Search/>
            <Blog/>*/}
            {/* <LifeCycle/>  */}
            <ShowContent request = {request}></ShowContent>
            
        </div>
    );

}

export default Content;