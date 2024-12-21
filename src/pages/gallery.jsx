import React, { useContext, useState } from "react";
import { ContextProvide } from "../Context_API/contextProvider";
import Gallerydata from "../DataStore/Gallerydata";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const { gallery } = useContext(ContextProvide);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  // Open Lightbox
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
  };

  // Close Lightbox
  const closeLightbox = () => {
    setCurrentImageIndex(null);
  };

  // Navigate to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="pt-24">
        <div className="container">
          <div className="text-center py-5">
            <h1 className="headingText">Our Exclusive Gallery</h1>
            <p className="contentText py-2">
              Welcome to the vibrant world of Saraswathy Kala Kendra, where
              every moment is a celebration of art, culture, and dedication. Our
              gallery captures the essence of our journey, showcasing:
            </p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {gallery.map(({ id, url }, index) => (
              <div
                key={id}
                className="w-full overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  loading="lazy"
                  className="w-full h-auto rounded-lg object-contain"
                  src={url}
                  alt={`Gallery ${id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Gallerydata />

      {currentImageIndex !== null && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={closeLightbox}
            >
              &times;
            </button>
            {/* Image Viewer with Zoom Effect */}
            <motion.div
              className="relative flex justify-center items-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <img
                className="max-w-3xl max-h-[90vh] object-contain rounded-lg"
                src={gallery[currentImageIndex].url}
                alt="Selected"
              />
            </motion.div>
            <button
              className="absolute left-0 text-white active:text-white/80 text-4xl px-4"
              onClick={prevImage}
            >
              &#8592;
            </button>
            <button
              className="absolute right-0 text-white active:text-white/80 text-4xl px-4"
              onClick={nextImage}
            >
              &#8594;
            </button>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Gallery;
