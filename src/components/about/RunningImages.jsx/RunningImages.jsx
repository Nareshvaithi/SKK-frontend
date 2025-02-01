import { useContext } from "react";
import { ContextProvide } from "../../../Context_API/contextProvider";
import Aboutdata from "../../../DataStore/Aboutdata";

const RunningImages = () => {
  const { runningImage } = useContext(ContextProvide);

  if (!runningImage || runningImage.length === 0) {
    return <p className="text-center text-gray-600">No images available</p>;
  }

  // Ensure we have at least 3 images to split
  const chunkSize = Math.ceil(runningImage.length / 3);
  const row1 = runningImage.slice(0, chunkSize);
  const row2 = runningImage.slice(chunkSize, chunkSize * 2);
  const row3 = runningImage.slice(chunkSize * 2);

  return (
    <div className="bg-gray-100 py-6 space-y-6 overflow-hidden">
      {/* Row 1 - Right to Left */}
      <div className="flex space-x-4 animate-scroll-left w-max">
        {[...row1, ...row1].map((src, idx) => (
          <img key={`row1-${idx}`} src={src} className="rounded-xl object-cover" alt="scrolling" />
        ))}
      </div>

      {/* Row 2 - Left to Right */}
      <div className="flex space-x-4 animate-scroll-right w-max">
        {[...row2, ...row2].map((src, idx) => (
          <img key={`row2-${idx}`} src={src} className="rounded-xl object-cover" alt="scrolling" />
        ))}
      </div>

      {/* Row 3 - Right to Left */}
      <div className="flex space-x-4 animate-scroll-left w-max">
        {[...row3, ...row3].map((src, idx) => (
          <img key={`row3-${idx}`} src={src} className="rounded-xl object-cover" alt="scrolling" />
        ))}
      </div>

      <Aboutdata/>
    </div>
  );
};

export default RunningImages;
