export default function Dog({ id, name, age, onDelete }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button
        type="button"
        onClick={() => onDelete(id)}
        className="border-1 rounded-sm border-gray-600 bg-gray-500 hover:bg-blue-400 p-1 m-2 w-20"
      >
        Delete
      </button>
    </div>
  );
}
