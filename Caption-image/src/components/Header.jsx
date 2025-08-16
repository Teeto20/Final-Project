export default function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-lg md:text-xl font-bold bg-gray-200 px-4 py-2 rounded">
        Smart Image Captioning App
      </h1>
      <nav className="flex gap-4">
        <a href="#" className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">Home</a>
        <a href="#" className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">History</a>
      </nav>
    </header>
  );
}
