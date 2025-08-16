export default function History({ items }) {
  if (!items.length) return null;
  return (
    <section className="mt-6">
      <h2 className="font-semibold mb-2">History</h2>
      <div className="bg-gray-200 p-4 rounded grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div key={i} className="text-center">
            <img src={item.image} alt={`History ${i}`} className="mx-auto mb-1" />
            <p className="italic text-sm">“{item.caption}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
