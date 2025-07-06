import ListGroup from "./components/ListGroup"

function App()
{
  return <div>
    <ListGroup items={['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']} heading="Cities" />
    <ListGroup items={['Action', 'Adventure', 'Puzzle', 'RPG']} heading="Genres" />
    <ListGroup items={['PC', 'PlayStation', 'Xbox', 'Nintendo']} heading="Platforms" />
    <ListGroup items={[]} heading="Empty List" />
    <ListGroup items={['Apple', 'Banana', 'Cherry']} heading="Fruits" />
  </div>
}

export default App;
// The App component is the root component of the application