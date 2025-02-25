import { useEffect, useRef } from "react";
import "../styles/WorkExperience.css";

export function WorkExperience() {
  const experiencesRef = useRef([]);

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

    experiencesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

  const experiences = [
    {
      title: "Virginia Tech, Master of Engineering in Computer Science (GPA: on progress)",
      company: "",
      year: "2025 - 05/2026",
      description: "<Intermediate Data Structures and Algorithm Analysis (JAVA)>,<Web Application Development>, <Blockchain Technology>",
    },
    {
      title: "Computer Science Credits Program (GPA: 4.0/4.0)",
      company: "",
      year: "2023 - 2024",
      description:
        "<Data Structures>, <Algorithms>, <Computer Organization>, <Operating System>, <Discrete Mathematics>.",
    },
    {
      title: "Software Engineer & Data Analyst",
      company: "Bank Sinopac",
      year: "2021 - 2023",
      summary:
        "",
      description:
        "<Real-time Decision Workflows>, <Text Classification Machine Learning Model>, <Data Pipeline Automation>\n\n• Developed loan recommendation workflows within a <distributed, multi-tiered architecture>, leveraging SAS ESP for data ingestion, an ML-based text classification model (FastAPI + Docker) for processing, SAS ID for decision logic, and MSSQL for logging and data storage, reducing manual evaluation time from 20 minutes to milliseconds\n\n• Engineered a company name classification <Machine Learning model> using Random Forest and string similarity algorithms (e.g., Jaro Distance, Qgram-Cosine), eliminating manual verification and achieving 92% real-world accuracy\n\n• Implemented a <real-time loan evaluation API> to assess interest rates and loan amounts for 20K+ branch customers based on customer risk, asset holdings, and historical transaction data\n\n• Built <20+ scalable Python-based data pipelines> to process 1M+ daily records from MSSQL, automatically generating daily reports and eliminating 5 hours of manual work through full automation",
    },
    {
      title: "Data Analyst",
      company: "Bank Sinopac",
      year: "2020 - 2021",
      summary:
        "",
      description:
        "<Revenue Growth>, <Problem Solving>, <Data-Driven Strategies>\n\n• Navigated ambiguity by analyzing mortgage market trends and consumer demographics, spearheading the development of a women-focused mortgage product that generated over $2 billion USD in home loan funding",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">About Me</h2>

      <div className="experiences-container">
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          <div className="timeline-dot"></div>
          <div className="timeline-glow"></div>
        </div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-item"
            ref={(el) => (experiencesRef.current[index] = el)}
          >
            <span className="experience-year">{exp.year}</span>
            <div className="experience-content">
              <h3 className="experience-role">{exp.title}</h3>
              {exp.company && (
                <p className="experience-company">{exp.company}</p>
              )}
              {exp.summary && (
                <p className="experience-summary">{exp.summary}</p>
              )}
              {exp.description && (
                <p className="experience-description">
                  {formatDescription(exp.description)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
