export default function ImageUploader({ onImageSelect }) {
  return (
    <section>
      <h2 className="font-semibold mb-2">Image Uploader</h2>
      <label className="block bg-gray-200 p-4 rounded cursor-pointer w-64 text-center">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => onImageSelect(e.target.files[0])}
        />
        Choose an image
      </label>
      <p className="text-sm mt-1 text-gray-500">No image selected</p>
    </section>
  );
}
