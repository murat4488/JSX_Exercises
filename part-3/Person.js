const Person = (props) => {
  let display
  let name
  if (props.name.length > 8) {
    name = props.name.slice(0, 6)
  } else {
    name = props.name
  }

  if (props.age > 18) {
    display = name + " please go vote!"
  } else {
    display = name + " you must be 18"
  }

  return (
    <p>
      Learn some information about this person
      <h3>{display}</h3>
    </p>
  )
}
