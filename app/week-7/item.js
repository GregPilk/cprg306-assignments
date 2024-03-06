export default function Item({ id, name, quantity, category, onSelect }) {
  return (
    <div
      className="p-2 m-4 bg-slate-800 max-w-sm border-2 border-slate-800 hover:border-orange-400 hover:border-2"
      onClick={() => onSelect(id)}
    >
      <input type="checkbox" className="float-left" />
      <li className="list-none m-4">
        <h2 className="text-2xl capitalize">{name}</h2>
        <p>Quantity: {quantity}</p>
        <p className="capitalize">Category: {category}</p>
      </li>
    </div>
  );
}
