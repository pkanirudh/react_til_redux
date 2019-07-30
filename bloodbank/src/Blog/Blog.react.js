import React from 'react';
import Feedback from '../Feedback/Feedback.react'


class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeCount:0,
            dislikeCount:0
        }
    }
    incrementLikes=()=>{
        console.log("Like key pressed increment called");
        this.setState({likeCount:this.state.likeCount+1});
    }
    decrementLikes=()=>{
        console.log("Dislike key pressed decrement called");
        this.setState({dislikeCount:this.state.dislikeCount+1});
    }

    render() {
        return (
            <div >
                <article>
                    <h1>Who can Donate Blood</h1>
                    <p>As long as the person is healthy and heavy enough to feed a vampire on a regular basis and do not mind the bite marks left on their necks and a possible transformation to a ghoul or a vampire.</p>
                    <p><span>Likes :</span>{this.state.likeCount}</p>
                    <p><span>Dislikes :</span>{this.state.dislikeCount}</p>
                </article>
                <Feedback actionUp={this.incrementLikes} actionDown={this.decrementLikes}/>
            </div>
        );
    }
}

export default Blog;