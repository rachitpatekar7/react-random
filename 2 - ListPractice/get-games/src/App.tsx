import ListGroup from "./components/ListGroup"

function App()
{
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return <div>
    <ListGroup items={['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']} heading="Cities" onSelectItem={handleSelectItem} />
    <ListGroup items={['Action', 'Adventure', 'Puzzle', 'RPG']} heading="Genres" onSelectItem={handleSelectItem} />
    <ListGroup items={['PC', 'PlayStation', 'Xbox', 'Nintendo']} heading="Platforms" onSelectItem={handleSelectItem} />
    <ListGroup items={[]} heading="Empty List" onSelectItem={handleSelectItem} />
    <ListGroup items={['Apple', 'Banana', 'Cherry']} heading="Fruits" onSelectItem={handleSelectItem} />
  </div>
}

export default App;
// The App component is the root component of the application