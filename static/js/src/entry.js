import React from 'react';
import data from './data.js';
import CommentBox from './commentBox.js';

// React.render() instantiates the root component, starts the framework, and injects
// the markup into a raw DOM element, provided as the second argument.
React.render(
    <CommentBox url="/js/src/comments.json" pollInterval={2000} />,
    document.getElementById('example')
);