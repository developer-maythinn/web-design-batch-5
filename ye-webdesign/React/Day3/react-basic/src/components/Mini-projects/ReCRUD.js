import React, { useState } from "react";

function ReCRUD() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleClick = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };
  const updateItem = (index) => {
    const updateItems =
      items?.length > 0 &&
      items.map((item, i) => {
        console.log("i", i, "index", index);
        return i === index ? editText : item;
      });
    console.log("updateText", updateItems);
    setItems(updateItems);
    setEditIndex(null);
    setEditText("");
  };
  const deleteItem = (index) => {
    const filterItems = items.filter((item, i) => i !== index);
    setItems(filterItems);
  };
  return (
    <>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => handleClick()}>Add</button>
      <br />
      {items?.length > 0 &&
        items.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={() => updateItem(index)}>Update</button>
                </>
              ) : (
                <p>
                  {item}
                  <button onClick={() => setEditIndex(index)}>Edit</button>
                  <button onClick={() => deleteItem(index)}>Delete</button>
                </p>
              )}
            </React.Fragment>
          );
        })}
    </>
  );
}

export default ReCRUD;
