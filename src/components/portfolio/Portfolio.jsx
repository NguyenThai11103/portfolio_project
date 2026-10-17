import {
  FiActivity,
  FiArrowUpRight,
  FiBarChart2,
  FiCoffee,
  FiFilm,
  FiGithub,
  FiGitlab,
  FiMap,
  FiPackage,
  FiShoppingBag,
  FiTruck,
  FiUsers,
} from "react-icons/fi";
import { useLocale } from "../../context/LocaleContext";
import "./Portfolio.css";

const projectIcons = {
  activity: <FiActivity />,
  chart: <FiBarChart2 />,
  coffee: <FiCoffee />,
  film: <FiFilm />,
  map: <FiMap />,
  package: <FiPackage />,
  shopping: <FiShoppingBag />,
  truck: <FiTruck />,
  users: <FiUsers />,
};

const ProjectCard = ({ project, index, copy, language, compact = false }) => (
  <article
    className={`project-card${compact ? " project-card--compact" : ""}`}
    data-reveal="scale"
    data-reveal-delay={(index % 4) * 80}
  >
    <div className={`project-visual project-visual--${project.icon}`}>
      {project.image ? (
        <img src={project.image} alt={`${language === "vi" ? "Ảnh dự án" : "Project preview"} ${project.title}`} />
      ) : (
        <div className="project-symbol" aria-hidden="true">
          {projectIcons[project.icon]}
          <span>{String(index + 1).padStart(2, "0")}</span>
        </div>
      )}
      <span className="project-category">{project.category}</span>
    </div>

    <div className="project-content">
      <div className="project-heading">
        <div>
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
          <h3>{project.title}</h3>
        </div>
        <div className="project-links">
          <a href={project.source} target="_blank" rel="noreferrer" aria-label={`${project.backendSource ? copy.frontendSourceLabel : copy.sourceLabel}: ${project.title}`} title={project.backendSource ? copy.frontendSourceLabel : copy.sourceLabel}>
            {project.backendSource ? <span className="project-link-label">FE</span> : project.platform === "gitlab" ? <FiGitlab /> : <FiGithub />}
          </a>
          {project.backendSource && (
            <a href={project.backendSource} target="_blank" rel="noreferrer" aria-label={`${copy.backendSourceLabel}: ${project.title}`} title={copy.backendSourceLabel}>
              <span className="project-link-label">BE</span>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${copy.liveLabel}: ${project.title}`} title={copy.liveLabel}>
              <FiArrowUpRight />
            </a>
          )}
        </div>
      </div>

      <p className="project-subtitle">{project.subtitle}</p>
      <p className="project-description">{project.description}</p>

      <ul className="project-features">
        {project.features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>

      <ul className="project-stack" aria-label={`${language === "vi" ? "Công nghệ sử dụng trong" : "Technologies used in"} ${project.title}`}>
        {project.stack.slice(0, 5).map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
    </div>
  </article>
);

const Portfolio = () => {
  const { content, language } = useLocale();
  const copy = content.portfolio;

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <span className="section-kicker">{copy.kicker}</span>
            <h2 className="section-title">{copy.title}</h2>
          </div>
          <p className="section-copy">{copy.copy}</p>
        </div>

        <div className="project-group">
          <div className="project-group__heading" data-reveal>
            <h3>{copy.featuredLabel}</h3>
            <p>{copy.featuredCopy}</p>
          </div>
          <div className="project-grid">
            {copy.projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} copy={copy} language={language} />
            ))}
          </div>
        </div>

        <div className="project-group project-group--coursework">
          <div className="project-group__heading" data-reveal>
            <h3>{copy.courseLabel}</h3>
            <p>{copy.courseCopy}</p>
          </div>
          <div className="project-grid project-grid--compact">
            {copy.courseProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={copy.projects.length + index}
                copy={copy}
                language={language}
                compact
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
