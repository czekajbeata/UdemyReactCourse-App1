import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          authorAvatar={faker.image.avatar()}
          date="Today at 6:00PM"
          content="Nice blog post."
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          authorAvatar={faker.image.avatar()}
          date="Yesterday at 7:00AM"
          content="My favourite subject!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          authorAvatar={faker.image.avatar()}
          date="Yesterday at 3:45PM"
          content="I like this writing."
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
