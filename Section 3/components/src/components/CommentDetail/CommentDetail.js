import React from 'react';

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.src} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <p className="date">test</p>
        </div>
        <div className="text">{props.commentText}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
