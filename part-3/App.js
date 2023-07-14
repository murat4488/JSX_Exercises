const App = () => {
  return (
    <div>
      <Person name="MuratGuney" age={40} />
      <Person name="Melis" age={15} />
      <Hobbies hobbies={["exercise", "yoga", "make food", "watch movie"]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
