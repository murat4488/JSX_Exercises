const Tweet = ({
  username = "murat44",
  name = "murat",
  date = "07/14/23",
  messages,
}) => {
  return (
    <p>
      {messages.map((m) => (
        <p>
          {username} {name} {date}
          {m}
        </p>
      ))}
    </p>
  )
}
