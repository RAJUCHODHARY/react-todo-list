import React, { useState } from "react";

const Todo = () => {
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editedActivity, setEditedActivity] = useState("");

  

    const addActivity = () => {
        if (editIndex !== null) {
            const newListData = [...listData];
            newListData[editIndex] = editedActivity;
            setListData(newListData);
            setEditIndex(null);
            setEditedActivity("");
        } else if (activity.trim() !== "") { 
            setListData([...listData, activity]);
            setActivity("");
        }
    };

    const removeActivity = (index) => {
        const updatedList = listData.filter((_, i) => i !== index);
        setListData(updatedList);
    };

    const removeAll = () => {
        setListData([]);
    };

    const editTodo = (index) => {
        setEditIndex(index);
        setEditedActivity(listData[index]);
    };

    return (
        <div className="container">
            <div className="header">Todo List</div>
            <input 
                type="text" 
                placeholder="Add new todo" 
                value={editIndex !== null ? editedActivity : activity} 
                onChange={(e) => editIndex !== null ? setEditedActivity(e.target.value) : setActivity(e.target.value)} 
            />
            <button className="button" onClick={addActivity}>
                {editIndex !== null ? "Update" : "Add"}
            </button>
            <p className="list-heading">Here is your list</p>
            {listData.map((data, i) => (
                <p key={i}>
                    <div className="list-data">{data}</div>
                    <button className="button" onClick={() => editTodo(i)}>
                        Edit
                    </button>
                    <button className="button" onClick={() => removeActivity(i)}>
                        Remove
                    </button>
                </p>
            ))}
            {listData.length >= 1 && (
                <button className="button" onClick={removeAll}>
                    Remove All
                </button>
            )}
        </div>
    );
};

export default Todo;
