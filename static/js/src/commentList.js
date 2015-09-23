import React from 'react';
import Comment from './comment.js';

export default class CommentList extends React.Component {
    render() {
        var commentNodes = this.props.data.map(function (comment, index) {
            return (
                <Comment key={index} author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });

        return (
            <div className="commentList">
                Hello, world! I am a commentList.
                <Comment author="Greger">Nice site.</Comment>
                <Comment author="Bertil">Awesome site.</Comment>
                <Comment author="Olof">I love your site.</Comment>
                { commentNodes }
            </div>
        );
    }
}
