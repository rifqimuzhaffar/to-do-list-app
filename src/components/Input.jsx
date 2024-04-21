const Input = ({ onChange, value, onClick }) => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-white drop-shadow-md">
        To Do List
      </h2>
      <div className="flex items-center justify-center mt-[10px]">
        <input
          placeholder="Write here..."
          className="border border-black rounded-xl shadow-lg w-full px-2 py-1"
          onChange={(res) => {
            onChange(res.target.value);
          }}
          value={value}
        />

        <button
          className="bg-blue-600 rounded-md ml-[8px] text-sm py-[6px] px-3 font-semibold"
          onClick={onClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Input;
