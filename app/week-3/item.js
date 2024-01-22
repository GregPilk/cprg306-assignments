export default function Item ({name, quantity, category}) {
  return (
    <div className="flex align-middle bg-slate-900 max-w-sm">
        <input type="checkbox" className="float-left"/>
        <li className="list-none p-2 m-4">
        <h2 className="text-2xl capitalize">{name}</h2>
        <p>Quantity: {quantity}</p>
        <p className="capitalize">Category: {category}</p>
        </li>
    </div>

  )
}