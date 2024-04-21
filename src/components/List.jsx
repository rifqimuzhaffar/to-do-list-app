// List.jsx
import { useState, useEffect } from "react";

const List = (props) => {
  const [isOverflow, setIsOverflow] = useState(false); // State untuk menentukan apakah overflow diperlukan

  useEffect(() => {
    const listContainer = document.getElementById("list-container");
    // Periksa apakah konten List telah melewati batas container
    setIsOverflow(listContainer.scrollHeight > listContainer.clientHeight);
  }, [props.data]); // Memonitor perubahan data untuk menentukan overflow

  const handleToggle = (index) => {
    const newCheckedItems = [...props.checkedItems];
    if (newCheckedItems.includes(index)) {
      newCheckedItems.splice(newCheckedItems.indexOf(index), 1);
    } else {
      newCheckedItems.push(index);
    }
    props.setCheckedItems(newCheckedItems);
  };

  const handleDelete = (index) => {
    const updatedList = props.data.filter((_, idx) => idx !== index);
    props.onDelete(updatedList);
  };

  return (
    <div
      className={`mt-4 ${isOverflow ? "overflow-y-scroll" : ""} max-h-80`}
      id="list-container"
    >
      {props.data.length === 0 ? (
        <p className="bg-blue-700 py-1 px-2 rounded-3xl mb-2 shadow-md shadow-black">
          Empty Data
        </p>
      ) : (
        <>
          {props.data.map((item, index) => (
            <div key={String(index)} className="flex gap-2">
              <input
                type="checkbox"
                checked={props.checkedItems.includes(index)}
                onChange={() => handleToggle(index)}
              />
              <p className="bg-blue-700 py-1 px-2 w-full rounded-3xl mb-2 shadow-md shadow-black flex justify-between">
                {item}
                <button
                  className="bg-red-700 rounded-md px-1 text-sm"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default List;
