import { useState, useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Projects.css";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="image-slider">
      <div
        className="slider-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Project screenshot ${index + 1}`}
            className="project-image"
          />
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button className="slider-button prev" onClick={prevSlide}>
            ←
          </button>
          <button className="slider-button next" onClick={nextSlide}>
            →
          </button>
          <div className="slider-dots">
            {images.map((_, index) => (
              <div
                key={index}
                className={`slider-dot ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function Projects() {
  const [currentSlides, setCurrentSlides] = useState({});
  const projectsRef = useRef([]);

  const formatDescription = (description) => {
    return description.split("\n").map((line, i) => {
      const formattedLine = line.replace(
        /<([^>]+)>/g,
        (_, text) => `<span class="highlight">${text}</span>`
      );
      return (
        <span
          key={i}
          dangerouslySetInnerHTML={{
            __html:
              formattedLine +
              (i < description.split("\n").length - 1 ? "<br/>" : ""),
          }}
        />
      );
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    projectsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "2025 Amazon Web Services Hackathon – Game Builder Challenge",
      prize: "🏆 Top 9 out of 3,800 teams, Honorable Mention Winner",
      images: [
        "/src/assets/images/project_hack_1.png",
        "/src/assets/images/project_hack_2.png",
        "/src/assets/images/project_hack_3.png",
      ],
      description:
        "Amazon Web Service, React.js, HTML, CSS, JavaScript, Pixi.js, SAT.js, GSAP, Google MediaPipe\n\n• Engineered a <cloud-native, React-based game incorporating an AI-powered> hand detection model, which enabled players to control a cat using voice pitch and hand gestures\n\n• Integrated real-time detection of low pitch (50-150 Hz) for ducking, high pitch (500-800 Hz) for jumping, and Google MediaPipe Hand Detection for gesture-based wall traversal\n\n• Deployed a <real-time cloud-based leaderboard> using AWS DynamoDB, API Gateway, Lambda, and IAM, ensuring fast and efficient score updates for players",
      links: [
        {
          text: "Project Showcase",
          url: "https://devpost.com/software/christmas-cat-game?_gl=1*vpne2r*_gcl_au*OTkyMDE5NDQxLjE3MzM0Njg5ODM.*_ga*MTgxMDQyODY2Ni4xNzMzNDY4OTgz*_ga_0YHJK3Y10M*MTc0MDQxMjg1Ni4zNS4xLjE3NDA0MTI4NjQuMC4wLjA.",
          icon: <FaExternalLinkAlt />,
        },
        {
          text: "Play Game",
          url: "https://d33rhx7ia9zwqa.cloudfront.net/",
          icon: <FaExternalLinkAlt />,
        },
        {
          text: "GitHub",
          url: "https://github.com/WeiJuLi/aws-game-builder-challenge",
          icon: <FaGithub />,
        },
      ],
    },
    {
      title: "Amazon Full-stack Clone Website",
      images: [
        "/src/assets/images/project_am_1.png",
        "/src/assets/images/project_am_2.png",
        "/src/assets/images/project_am_3.png",
        "/src/assets/images/project_am_4.png",
        "/src/assets/images/project_am_5.png",
      ],
      description:
        "HTML, CSS, React.js, JavaScript, Node.js, Express.js, Firebase, Stripe API\n\n• Built a <full-stack e-commerce website>, integrating user authentication, real-time shopping cart updates, and order history management using Firebase (Firestore, Authentication) to ensure responsive user interactions\n\n• Implemented <payment processing> with the <Stripe API>, enabling seamless checkout functionality",
      links: [
        {
          text: "GitHub",
          url: "https://github.com/WeiJuLi/amazon-clone",
          icon: <FaGithub />,
        },
        {
          text: "Live Demo",
          url: "https://github.com/WeiJuLi/amazon-clone",
          icon: <FaExternalLinkAlt />,
        },
      ],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Achievements & Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-item"
            ref={(el) => (projectsRef.current[index] = el)}
          >
            <div className="project-images">
              <ImageSlider images={project.images} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              {project.prize && (
                <a
                  href="https://awsdevchallenge.devpost.com/project-gallery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-prize"
                >
                  {project.prize}
                </a>
              )}
              <p className="project-description">
                {formatDescription(project.description)}
              </p>
              {project.links && (
                <div className="project-links">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {link.icon}
                      {link.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
