import React, { useContext, useState, useEffect } from "react";
import { ContextProvide } from "../Context_API/contextProvider";
import { motion, AnimatePresence } from "framer-motion";
import Gallerydata from "../DataStore/Gallerydata";
import Button from "../components/Button/Button";

const IMAGES_PER_LOAD = 20;

const Gallery = () => {
  const { gallery, galleryType } = useContext(ContextProvide);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [imagesToShow, setImagesToShow] = useState(IMAGES_PER_LOAD);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (gallery.length > 0) {
      setIsLoading(false);
    }
  }, [gallery]);

  const loadMoreImages = () => {
    setImagesToShow((prev) => Math.min(prev + IMAGES_PER_LOAD, allImages.length));
  };

  const openLightbox = (parentIndex, imageIndex) => {
    setCurrentImageIndex({ parentIndex, imageIndex });
  };

  const closeLightbox = () => {
    setCurrentImageIndex(null);
  };

  const prevImage = () => {
    setCurrentImageIndex(({ parentIndex, imageIndex }) => {
      if (imageIndex === 0) {
        const newParentIndex = parentIndex === 0 ? gallery.length - 1 : parentIndex - 1;
        return {
          parentIndex: newParentIndex,
          imageIndex: gallery[newParentIndex].images.length - 1,
        };
      }
      return { parentIndex, imageIndex: imageIndex - 1 };
    });
  };

  const nextImage = () => {
    setCurrentImageIndex(({ parentIndex, imageIndex }) => {
      const currentGalleryImages = gallery[parentIndex].images;
      if (imageIndex === currentGalleryImages.length - 1) {
        const newParentIndex = parentIndex === gallery.length - 1 ? 0 : parentIndex + 1;
        return { parentIndex: newParentIndex, imageIndex: 0 };
      }
      return { parentIndex, imageIndex: imageIndex + 1 };
    });
  };

  // Flatten images if galleryType is null
  const allImages =
    galleryType === null
      ? gallery.flatMap(({ id, images }, parentIndex) =>
          images.map((item, imageIndex) => ({
            id,
            item,
            parentIndex,
            imageIndex,
          }))
        )
      : [];

  return (
    <>
      <Gallerydata />
      <div className="pt-24 pb-10">
        <div className="container">
          {isLoading ? (
            <div className="text-center py-5 headingText">Loading...</div>
          ) : (
            <>
              <div className="text-center py-5">
                <h1 className="headingText">
                  {galleryType === null ? "Our Exclusive Gallery" : galleryType}
                </h1>
                <p className="contentText py-2">
                  Welcome to the vibrant world of Saraswathy Kala Kendra, where every moment is a celebration of art, culture, and dedication. Our gallery captures the essence of our journey, showcasing:
                </p>
              </div>

              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {galleryType === null
                  ? allImages.slice(0, imagesToShow).map(({ id, item, parentIndex, imageIndex }) => (
                      <div
                        key={`${parentIndex}-${imageIndex}`}
                        className="w-full overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => openLightbox(parentIndex, imageIndex)}
                      >
                        <img
                          loading="lazy"
                          className="w-full h-auto rounded-lg object-contain hover:scale-110 transition-transform duration-700 ease-linear"
                          src={item}
                          alt={`Gallery ${id}`}
                        />
                      </div>
                    ))
                  : gallery
                      .filter(({ type }) => type === galleryType)
                      .slice(0, imagesToShow)
                      .flatMap(({ id, images }, parentIndex) =>
                        images.map((item, imageIndex) => (
                          <div
                            key={`${parentIndex}-${imageIndex}`}
                            className="w-full overflow-hidden rounded-lg cursor-pointer"
                            onClick={() => openLightbox(parentIndex, imageIndex)}
                          >
                            <img
                              loading="lazy"
                              className="w-full h-auto rounded-lg object-contain hover:scale-110 transition-transform duration-700 ease-linear"
                              src={item}
                              alt={`Gallery ${id}`}
                            />
                          </div>
                        ))
                      )}
              </div>

              {imagesToShow < allImages.length && (
                <div onClick={loadMoreImages} className="flex justify-center mt-6">
                  <Button
                    text={"Load More"}
                    px={"px-5"}
                    py={"py-2"}
                    bg={"bg-themebrown"}
                    hoverbg={"bg-white"}
                    border={"border"}
                    borderColor={"border-themebrown"}
                    textcolor={"text-white"}
                    hovertextcolor={"group-hover:text-themebrown"}
                  />
                </div>
              )}
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
                src={
                  gallery[currentImageIndex.parentIndex].images[currentImageIndex.imageIndex]
                }
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
