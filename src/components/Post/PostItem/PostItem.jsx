import React from 'react'

const PostItem = (props) => {
  const { id, title, body } = props;
  return (
      <div key={id} className="post">
        <h2 className="post__title">{title}</h2>
        <p>{body}</p>
      </div>
  )
}
export default PostItem