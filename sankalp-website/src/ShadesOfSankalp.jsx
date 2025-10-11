import React from 'react';
import './ShadesOfSankalp.css';

const ShadesOfSankalp = () => {
  const events = [
    {
      id: 1,
      title: "Star Night",
      icon: "🎤",
      category: "Cultural",
      description: "Experience an electrifying evening of music, dance, and entertainment under the stars.",
      ribbonText: "STAR NIGHT",
      bgImage: "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800')"
    },
    {
      id: 2,
      title: "DJ Night",
      icon: "🎧",
      category: "Cultural",
      description: "Dance the night away with pulsating beats and vibrant energy at our DJ night.",
      ribbonText: "DJ NIGHT",
      bgImage: "url('https://images.unsplash.com/photo-1571266028243-d220c1e3f7db?w=800')"
    },
    {
      id: 3,
      title: "Code Sprint",
      icon: "💻",
      category: "Technical",
      description: "A 24-hour coding marathon testing algorithmic prowess and problem-solving skills.",
      ribbonText: "CODING",
      bgImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800')"
    },
    {
      id: 4,
      title: "Rhythm Nights",
      icon: "🎵",
      category: "Cultural",
      description: "Showcase your musical talent in a captivating evening of melodies and performances.",
      ribbonText: "MUSIC",
      bgImage: "url('https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800')"
    },
    {
      id: 5,
      title: "Tech Talk",
      icon: "⚡",
      category: "Technical",
      description: "Industry experts share insights on cutting-edge technologies and future trends.",
      ribbonText: "WORKSHOP",
      bgImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800')"
    },
    {
      id: 6,
      title: "Dance Fusion",
      icon: "💃",
      category: "Cultural",
      description: "Express yourself through contemporary, classical, or freestyle dance forms.",
      ribbonText: "DANCE",
      bgImage: "url('https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800')"
    }
  ];

  return (
    <section className="shades-of-sankalp">
      <div className="section-header">
        <h2 className="section-title">SHADES OF SANKALP</h2>
      </div>

      <div className="events-grid">
        {events.map((event, index) => (
          <div
            className="event-card"
            key={event.id}
            style={{
              animationDelay: `${index * 0.1}s`,
              backgroundImage: event.bgImage
            }}
          >
            <div className="event-label">{event.ribbonText}</div>

            <div className="corner-glow corner-glow-tl"></div>
            <div className="corner-glow corner-glow-tr"></div>
            <div className="corner-glow corner-glow-bl"></div>
            <div className="corner-glow corner-glow-br"></div>

            <div className="particle-container">
              <span className="particle particle-1"></span>
              <span className="particle particle-2"></span>
              <span className="particle particle-3"></span>
              <span className="particle particle-4"></span>
              <span className="particle particle-5"></span>
              <span className="particle particle-6"></span>
              <span className="particle particle-7"></span>
              <span className="particle particle-8"></span>
            </div>

            <div className="golden-border-animation">
              <span className="sparkle sparkle-1"></span>
              <span className="sparkle sparkle-2"></span>
              <span className="sparkle sparkle-3"></span>
              <span className="sparkle sparkle-4"></span>
              <span className="sparkle sparkle-5"></span>
            </div>

            <div className="energy-wave"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShadesOfSankalp;
