import React from 'react';


const clear = (msg) => {
        console.log("clear invoked");
    return()=>{
        console.log("Clear Clicked "+msg);
        
    }
}
const Search = () => {

    return (
        <div >
            <button className='fa fa-search'
                onClick={(event)=>{console.log(event)}}>Search</button>
            <button className='fa fa-crosshairs' 
                onClick={clear("Mjolnir")}>Clear</button>
        </div>
    );

}

export default Search;