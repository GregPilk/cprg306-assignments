import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-slate-950">
      <h1 className="text-4xl font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}
