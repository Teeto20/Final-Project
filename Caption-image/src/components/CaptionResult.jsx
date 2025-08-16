export default function CaptionResult({ imageSrc, caption }) {
  if (!imageSrc || !caption) return null;
  return (
    <section className="mt-6">
      <h2 className="font-semibold mb-2">Caption Result</h2>
      <div className="bg-gray-200 p-4 rounded max-w-sm">
        <img src={imageSrc} alt="Result" className="mx-auto mb-2" />
        <p className="italic text-center">“{caption}”</p>
      </div>
    </section>
  );
}
