const App = () => {
  const messages = ["Hello", "How are you?", "How is going?"]
  return (
    <div>
      <Tweet messages={messages} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
