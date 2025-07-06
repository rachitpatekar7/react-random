import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
}
// ListGroup is a functional component that renders a list of items

function ListGroup({items, heading}: ListGroupProps) {
  //default value for selected index, -1 means no item is selected
  //Hook is a special function that lets you use state and other React features in functional components
  //useState is a Hook that lets you add state to functional components
   //useState returns an array with two elements: the current state and a function to update it
  const [selectedIndex, setSelectedIndex] = useState(3); //useState is used to manage the state of the selected index
  //variable selectedIndex is the current state, and setSelectedIndex is the function to update it
  //props are used to pass data from a parent component to a child component
  //props are read-only, meaning you cannot modify them directly in the child component


  //const handleItemClick = (item: string) => console.log(item);//alternative way to handle click events
  return (
    <>
      <h1>NAH NAH NAH</h1>
      {items.length === 0 ? <p>No items found</p>:null}
      {/* OR {items.length === 0 && <p>No items found</p>} */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item}           
          className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
          onClick={() => setSelectedIndex(index)}>{item}</li>
        ))}
        </ul>
    </>
  );
}
export default ListGroup;
