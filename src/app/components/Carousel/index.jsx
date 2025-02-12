"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import "./style.css";



const Carousel = ({ images }) => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.clientWidth * 0.6,
        behavior: "smooth",
      });
    }
  }, [index]);

  const handleMouseDown = (e) => {
    stopAutoSlide();
    isDragging.current = true;
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !sliderRef.current) return;
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const walk = (x - startX.current) * 2; // Adjust sensitivity
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
    velocity.current = walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (sliderRef.current) {
      const direction = velocity.current > 0 ? -1 : 1;
      setIndex((prev) =>
        Math.max(0, Math.min(images.length - 1, prev + direction))
      );
    }
    startAutoSlide();
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden perspective-1000">
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className={clsx(
              "w-full min-w-[60%] flex justify-center   items-center h-96 snap-center transition-transform duration-500 relative select-none",
              {
                "opacity-100 scale-100 rotate-y-0 shadow-2xl ": i === index,
                "opacity-70 scale-95 -rotate-y-10 translate-x-4   ":
                  i === (index + 1) % images.length,
                "opacity-70 scale-95 rotate-y-10 -translate-x-4  ":
                  i === (index - 1 + images.length) % images.length,
                "opacity-40 scale-90 -rotate-y-15 translate-x-6 z-0 ":
                  i === (index + 2) % images.length,
                "opacity-40 scale-90 rotate-y-15 -translate-x-6 z-0 ":
                  i === (index - 2 + images.length) % images.length,
              }
            )}
          >
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              width={800}
              height={400}
              className=" h-96 object-fill select-none pointer-events-none cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
