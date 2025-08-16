import { useState } from "react";
import Header from "./components/Header";
import ImageUploader from "./components/ImageUploader";
import LoadingSpinner from "./components/LoadingSpinner";
import CaptionResult from "./components/CaptionResult";
import History from "./components/History";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [caption, setCaption] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [history, setHistory] = useState([]);

  const handleImageSelect = async (file) => {
    if (!file) return;
    setLoading(true);
    setImageSrc(URL.createObjectURL(file));

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/nlpconnect/vit-gpt2-image-captioning",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/octet-stream",
          },
          body: file,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      const text = result[0]?.generated_text || "No caption found";
      setCaption(text);
      setHistory((prev) => [
        ...prev,
        { image: URL.createObjectURL(file), caption: text },
      ]);
    } catch (err) {
      console.error("Error:", err);
      setCaption("Failed to generate caption");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <Header />
      <div className="grid md:grid-cols-2 gap-6">
        <ImageUploader onImageSelect={handleImageSelect} />
        {loading ? <LoadingSpinner /> : null}
      </div>
      <CaptionResult imageSrc={imageSrc} caption={caption} />
      <History items={history} />
    </div>
  );
}
