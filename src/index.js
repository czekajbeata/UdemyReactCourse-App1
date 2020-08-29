import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        authorAvatar={faker.image.avatar()}
        date="Today at 6:00PM"
        content="Nice blog post!"
      />
      <CommentDetail
        author="Alex"
        authorAvatar={faker.image.avatar()}
        date="Yesterday at 7:00AM"
        content="Nice post!"
      />
      <CommentDetail
        author="Jane"
        authorAvatar={faker.image.avatar()}
        date="Yesterday at 3:45PM"
        content="I like this writing."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
