import React from 'react';



class ShowProfile extends React.Component {
    url="https://api.github.com/users/pkanirudh";
    constructor(props) {
        super(props);
        this.state={
            profile:{},
            loaded: false
        }
        
    }

    componentDidMount(){
        fetch(this.url).
        then(data => data.json()).
        then(profile => {
            this.setState({profile:profile,loaded:true});
        });
    }

    render() {
        if(!this.state.loaded){
            return (
            <div >
                <h2>Loading...</h2>
            </div>
        );
        }
        else{
            return(
                <div>
                    <p>{this.state.profile.login}</p>
                    <img src ={this.state.profile.avatar_url} alt="avatar"></img>
                    <p>Look up blutch</p>
                </div>
            );
        }
        
    }
}

export default ShowProfile;