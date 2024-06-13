import React, { useState, useRef } from 'react';
import { ElectronicsData } from '../utils/data';

const products = ElectronicsData[0].data.products;

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const itemsPerRow = 4; // Number of products per row

  const nextSlide = () => {
    if (currentIndex < products.length - itemsPerRow) {
      setCurrentIndex((prevIndex) => prevIndex + itemsPerRow);
      carouselRef.current.scrollBy({ left: carouselRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - itemsPerRow);
      carouselRef.current.scrollBy({ left: -carouselRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full mx-auto p-4 bg-gradient-to-t">
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-500"
          ref={carouselRef}
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerRow)}%)` }}
        >
          {products.map((product) => (
            <div
              key={product.asin}
              className="min-w-[25%] flex-shrink-0 h-[300px] bg-gray-200 flex items-center justify-center p-2"
            >
              <img
                src={product.product_photo}
                alt={`Product ${product.asin}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};

export default ProductCarousel;
