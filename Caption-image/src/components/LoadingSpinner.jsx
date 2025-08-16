export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded w-48">
      <div className="w-8 h-8 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-sm mt-2">Loading Spinner ...</p>
    </div>
  );
}
