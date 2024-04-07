const List = (props) => {
  return (
    <div className="mt-[10px]">
      {props.data.length === 0 ? (
        <p className="bg-blue-700">Tidak ada data</p>
      ) : (
        props.data.map((item, index) => (
          <div key={String(index)}>
            <p className="bg-blue-700 py-1 px-2 rounded-3xl mb-2 shadow-md shadow-black flex justify-between">
              {`${index + 1}. ${item}`}
              <button className="bg-red-700 rounded-md px-1 text-sm">
                Delete
              </button>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default List;
