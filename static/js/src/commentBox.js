import React from 'react';
import $ from 'jquery';
import Greeting from './greeting.js';
import Button from './button.js';
import CommentForm from './commentForm.js';
import CommentList from './commentList.js';

export default React.createClass({
    name: 'CommentBox',

    getInitialState: function() {
        console.log(this.name + '.getInitialState');
        return {
            data: []
        };
    },

    loadCommentsFromServer: function() {
        console.log('loadCommentsFromServer');
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                // The key to dynamic updates is the call to this.setState(). We replace the old array of
                // comments with the new one from the server and the UI automatically updates itself.
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleCommentSubmit: function(comment) {
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        /*
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
        */
    },

    // componentDidMount is a method called automatically by React when a component is rendered.
    componentDidMount: function() {
        console.log(this.name + '.componentDidMount');
        console.log('fetching: ' + this.props.url);

        this.loadCommentsFromServer();
        // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },

    render: function() {
        console.log(this.name + '.render');
        console.log('123 render: this.state.data', this.state.data);

        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
                <Greeting />
                <Button />

                <CommentList data={this.state.data}/>
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});