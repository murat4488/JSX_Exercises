const Hobbies = (props) => {
  return (
    <ul>
      Hobbies:
      {props.hobbies.map((hobby) => (
        <li>{hobby}</li>
      ))}
    </ul>
  )
}
