import React, { useState } from 'react';
import './UnfoldYourPath.css';

const UnfoldYourPath = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = [
    {
      id: 1,
      title: "CULTURAL",
      color: "#FF6B35",
      gradient: "linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)",
      bgImage: "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800')",
      description: "Experience vibrant cultural events, music, and dance"
    },
    {
      id: 2,
      title: "EVENTS",
      color: "#C41E3A",
      gradient: "linear-gradient(135deg, #C41E3A 0%, #E84A5F 100%)",
      bgImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800')",
      description: "Exciting competitions and interactive sessions"
    },
    {
      id: 3,
      title: "GAMES",
      color: "#9B59B6",
      gradient: "linear-gradient(135deg, #9B59B6 0%, #C39BD3 100%)",
      bgImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800')",
      description: "Fun gaming tournaments and challenges"
    },
    {
      id: 4,
      title: "HACKATHON",
      color: "#2C3E50",
      gradient: "linear-gradient(135deg, #2C3E50 0%, #4A5F7F 100%)",
      bgImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800')",
      description: "Code, innovate, and build amazing projects"
    },
    {
      id: 5,
      title: "PROSHOW",
      color: "#D4A574",
      gradient: "linear-gradient(135deg, #D4A574 0%, #E8C4A0 100%)",
      bgImage: "url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800')",
      description: "Grand performances and celebrity appearances"
    }
  ];

  return (
    <section className="unfold-your-path">
      <div className="section-container">
        <h2 className="path-title">UNFOLD YOUR PATH</h2>

        <div className="carousel-container">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`path-card ${hoveredIndex === index ? 'expanded' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'collapsed' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                backgroundImage: category.bgImage,
              }}
            >
              <div className="card-overlay" style={{ background: category.gradient }}></div>

              <div className="card-content">
                <h3 className="category-title">{category.title}</h3>
                <div className="category-description">
                  <p>{category.description}</p>
                  <button className="explore-btn">Explore</button>
                </div>
              </div>

              <div className="golden-border"></div>

              <div className="particle-system">
                <span className="path-particle path-particle-1"></span>
                <span className="path-particle path-particle-2"></span>
                <span className="path-particle path-particle-3"></span>
                <span className="path-particle path-particle-4"></span>
                <span className="path-particle path-particle-5"></span>
              </div>

              <div className="corner-sparkle corner-sparkle-tl"></div>
              <div className="corner-sparkle corner-sparkle-tr"></div>
              <div className="corner-sparkle corner-sparkle-bl"></div>
              <div className="corner-sparkle corner-sparkle-br"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnfoldYourPath;
