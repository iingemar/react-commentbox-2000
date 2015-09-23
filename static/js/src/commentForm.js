import React from 'react';

export default React.createClass({
    handleSubmit: function(e) {
        console.log('handleSubmit');
        // Call preventDefault() on the event to prevent the browser's default action of submitting the form.
        e.preventDefault();
        //  We can call React.findDOMNode(component) on a component to get the native browser DOM element.
        var author = React.findDOMNode(this.refs.author).value.trim();
        var text = React.findDOMNode(this.refs.text).value.trim();
        if (!text || !author) {
            console.log('!text || !author');
            return;
        }

        // call the callback from the CommentForm when the user submits the form
        this.props.onCommentSubmit({author: author, text: text});

        // We use the ref attribute to assign a name to a child component and this.refs to reference the component.
        React.findDOMNode(this.refs.author).value = '';
        React.findDOMNode(this.refs.text).value = '';
    },

    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your name" ref="author" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Say something..." ref="text" />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-default" value="Save" />
                </div>
            </form>
        );
    }
});