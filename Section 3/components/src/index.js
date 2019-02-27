import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail/CommentDetail';
import ApprovalCard from './components/ApprovalCard/ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          src={faker.image.avatar()}
          commentText={faker.lorem.sentence()}
          timeAgo={faker.date.past()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          src={faker.image.avatar()}
          commentText={faker.lorem.sentence()}
          timeAgo={faker.date.past()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          src={faker.image.avatar()}
          commentText={faker.lorem.sentence()}
          timeAgo={faker.date.past()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
