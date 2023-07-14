const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Murat" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
