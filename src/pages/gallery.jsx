import React, { useContext, useState, useEffect } from "react";
import { ContextProvide } from "../Context_API/contextProvider";
import { motion, AnimatePresence } from "framer-motion";
import Gallerydata from "../DataStore/Gallerydata";

const IMAGES_PER_PAGE = 30;

const Gallery = () => {
  const { gallery } = useContext(ContextProvide);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (gallery.length > 0) {
      setIsLoading(false);
    }
  }, [gallery]);

  const totalPages = Math.ceil(gallery.length / IMAGES_PER_PAGE);

  const currentGallery = gallery.slice(
    (currentPage - 1) * IMAGES_PER_PAGE,
    currentPage * IMAGES_PER_PAGE
  );

  const openLightbox = (index) => {
    setCurrentImageIndex(index + (currentPage - 1) * IMAGES_PER_PAGE);
  };

  const closeLightbox = () => {
    setCurrentImageIndex(null);
  };

  const prevImage = () => {
      window.scrollTo(0,0);
      setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
      window.scrollTo(0,0);
      setCurrentImageIndex((prevIndex) =>
      prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Gallerydata />
      <div className="pt-24 pb-10">
        <div className="container">
          {isLoading ? (
            <div className="text-center py-5">Loading...</div>
          ) : (
            <>
              <div className="text-center py-5">
                <h1 className="headingText">Our Exclusive Gallery</h1>
                <p className="contentText py-2">
                  Welcome to the vibrant world of Saraswathy Kala Kendra, where
                  every moment is a celebration of art, culture, and dedication.
                  Our gallery captures the essence of our journey, showcasing:
                </p>
              </div>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {currentGallery.map(({ id, url }, index) => (
                  <div
                    key={id}
                    className="w-full overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      loading="lazy"
                      className="w-full h-auto rounded-lg object-contain hover:scale-110 transition-transform duration-700 ease-linear"
                      src={url}
                      alt={`Gallery ${id}`}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-4 mt-6">
                <button
                  className="px-10 py-2 bg-themebrown text-white rounded-xl disabled:opacity-50"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span className="px-4 py-2">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="px-10 py-2 bg-themebrown text-white rounded-xl disabled:opacity-50"
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {currentImageIndex !== null && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={closeLightbox}
            >
              &times;
            </button>
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
      <Gallerydata/>
    </>
  );
};

export default Gallery;
