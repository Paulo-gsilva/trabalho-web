import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Rating from "./Rating/Rating";
import "./rating.css";
import courses from "../../courses.json";

function RatingContainer({ title, description }) {
  const ratingCarousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(
      ratingCarousel.current?.scrollWidth - ratingCarousel.current?.offsetWidth
    );
  }, []);

  return (
    <div className="rating-container">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="rating-container-grid">
        <motion.div
          ref={ratingCarousel}
          className="rating-map"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="rating-items"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {courses.Courses.map((course) => {
              return (
                <motion.div className="news" key={course.CourseId}>
                  <Rating
                    title={course.CourseName}
                    rate={course.CouseRate}
                    teacher={course.CourseTeatcher}
                    img={course.CourseImage}
                    alt={course.CourseName + "  " + course.CourseTeatcher}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default RatingContainer;
