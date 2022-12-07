import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./news.css";
import courses from "../../courses.json";
import News from "./News/News";

function NewsContainer() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className="news-container">
      <h3>Novidades</h3>
      <p>Cursos novos com alta qualidade!</p>
      <div className="news-container-grid">
        <motion.div
          ref={carousel}
          className="news-map"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="news-items"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {courses.Courses.map((course, key) => {
              return (
                <motion.div className="news" key={course.CourseId}>
                  <News
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

export default NewsContainer;
