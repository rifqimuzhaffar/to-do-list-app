// App.js
import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";

const App = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]); // Menambahkan state untuk menyimpan data yang dipilih

  const handleDelete = (updatedList) => {
    setList(updatedList);
  };

  const handleDeleteAll = () => {
    setList([]);
    setCheckedItems([]); // Set checkedItems kembali ke array kosong saat menghapus semua data
  };

  const handleDeleteSelected = () => {
    const updatedList = list.filter(
      (_, index) => !checkedItems.includes(index)
    );
    setList(updatedList);
    setCheckedItems([]); // Set checkedItems kembali ke array kosong setelah menghapus data terpilih
  };

  return (
    <div className="p-8 bg-slate-700 flex justify-center h-screen">
      <div className="m-8 p-4 shadow-md shadow-black rounded-xl xl:w-1/2">
        {/* ini input */}
        <Input
          value={text}
          onChange={(res) => {
            setText(res);
          }}
          onClick={() => {
            setText("");
            setList([text, ...list]);
          }}
        />
        {/* ini list data */}
        <List
          data={list}
          onDelete={handleDelete}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />

        <div className="flex justify-between gap-2 mt-2">
          <button
            className="border-[2px] p-1 rounded-xl border-black mt-[10px]"
            onClick={handleDeleteAll}
          >
            Hapus Semua Data
          </button>
          <button
            className="border-[2px] p-1 rounded-xl border-black mt-[10px]"
            onClick={handleDeleteSelected}
          >
            Hapus Data Terpilih
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
