import React from 'react'

const ListItem = (props) => {
  const {key, title, body} = props;
  return (
    <li key={key}><h3>{title}</h3><p>{body}</p></li>
  )
}
export default ListItem
