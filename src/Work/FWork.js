import React from "react";
import "./Works.css";

const FWork = () => {
  // Image categories
  const categories = [
    {
      title: "Interior Design",
      images: ["1.jpg", "2.webp", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
      path: "/inter/",
      grid: "md:grid-cols-4",
    },
    {
      title: "2D Design",
      images: ["1.jpg", "2.jpg", "3.webp", "4.webp", "5.webp", "6.webp"],
      path: "/2d/",
      grid: "md:grid-cols-2",
    },
    {
      title: "3D Design",
      images: ["1.jpg", "2.jpg", "3.jpg"],
      path: "/3D/",
      grid: "md:grid-cols-1",
    },
    {
      title: "Exterior Design",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.webp", "7.jpg", "8.jpg"],
      path: "/ext/",
      grid: "md:grid-cols-4",
    },
  ];

  // Reusable ImageGrid Component
  const ImageGrid = ({ images, path, gridClass }) => (
    <div className={`grid grid-cols-2 ${gridClass} gap-4`}>
      {images.map((image, index) => (
        <div key={index} className="w-full h-52 transform hover:scale-105 transition duration-300">
          <a href={`${path}${image}`} target="_blank" rel="noopener noreferrer">
            <img
              src={`${path}${image}`}
              alt={`Work ${image}`}
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-gray-50 py-16 hero-section3">
      <div className="max-w-7xl mx-auto px-6">
        {categories.map((category, index) => (
          <div key={index} className="mb-16">
            {/* Section Header */}
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-customBrown pl-4">
              {category.title}
            </h2>
            {/* Image Grid */}
            <ImageGrid images={category.images} path={category.path} gridClass={category.grid} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FWork;
