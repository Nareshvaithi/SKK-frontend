import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";

const RunningImages = () => {
  const { gallery } = useContext(ContextProvide);

  if (!gallery || gallery.length === 0) {
    return <p className="text-center text-gray-600">No images available</p>;
  }

  const allImages = gallery.flatMap(item => item.images);

  const chunkSize = Math.ceil(allImages.length / 3);
  const row1 = allImages.slice(0, chunkSize);
  const row2 = allImages.slice(chunkSize, chunkSize * 2);
  const row3 = allImages.slice(chunkSize * 2);

  return (
    <div className="bg-gray-100 py-6 space-y-6 overflow-hidden">
      {/* Row 1 - Right to Left */}
      <div className="flex space-x-4 animate-scroll-left">
        {row1.map((src, idx) => (
          <img key={idx} src={src} className="w-40 h-40 rounded-md" alt="scrolling" />
        ))}
      </div>

      {/* Row 2 - Left to Right */}
      <div className="flex space-x-4 animate-scroll-right">
        {row2.map((src, idx) => (
          <img key={idx} src={src} className="w-40 h-40 rounded-md" alt="scrolling" />
        ))}
      </div>

      {/* Row 3 - Right to Left */}
      <div className="flex space-x-4 animate-scroll-left">
        {row3.map((src, idx) => (
          <img key={idx} src={src} className="w-40 h-40 rounded-md" alt="scrolling" />
        ))}
      </div>
    </div>
  );
};

export default RunningImages;
