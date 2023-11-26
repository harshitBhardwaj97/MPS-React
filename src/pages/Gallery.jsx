import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    {
      url: "/g_1.jpg",
      alt: "image_1",
    },
    {
      url: "/g_2.jpg",
      alt: "image_2",
    },
    {
      url: "/g_3.jpg",
      alt: "image_3",
    },
    {
      url: "/g_4.jpg",
      alt: "image_4",
    },
    {
      url: "/g_5.jpg",
      alt: "image_5",
    },
    {
      url: "/g_6.jpg",
      alt: "image_6",
    },
    {
      url: "/g_7.jpg",
      alt: "image_7",
    },
    {
      url: "/g_8.jpg",
      alt: "image_8",
    },
    {
      url: "/g_9.jpg",
      alt: "image_9",
    },
  ];

  return (
    <motion.div
      className="gallerypage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div className="grid max-w-6xl grid-cols-1 gap-3 p-3 mx-auto md:grid-cols-3 galleryContent">
        {images.map((image) => (
          <div
            key={image.url}
            className="duration-150 mx-auto ease-linear cursor-pointer galleryImage hover:scale-105 hover:rotate-2 shadow-lg hover:border-red-500 hover:border-1[px]"
          >
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
