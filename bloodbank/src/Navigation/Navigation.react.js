import React from 'react';
import './Navigation.css';
import FetchDonors from '../FetchDonors/FetchDonors.react';
import AddDonor from '../AddDonor/AddDonor.react';
import Blog from '../Blog/Blog.react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom'
import Content from '../Content/Content.react'
import LifeCycle from '../LifeCycle/LifeCycle.react';
import Search from '../Search/Search.react';
import ShowDonor from '../ShowDonor/ShowDonor.react';

const Navigation = () => {

    return (
        <div className='navigation_wrapper'>
            <main>
                <Switch>
                    <Route exact path='/' component={Content}></Route>
                    <Route path='/fetch' component={FetchDonors}></Route>
                    <Route path='/add' component={AddDonor}></Route>
                    <Route path='/blog' component={Blog}></Route>
                    <Route path='/lifecycle' component={LifeCycle}></Route>
                    <Route path='/search' component={Search}></Route>
                    <Route path='/show' component={ShowDonor}></Route>
                </Switch>
            </main>
        </div>
    );

}

export default Navigation;