import { useEffect, useRef, useState } from "react";
import {
  FiActivity,
  FiArrowUpRight,
  FiBarChart2,
  FiBookOpen,
  FiCoffee,
  FiFilm,
  FiGithub,
  FiGitlab,
  FiMap,
  FiPackage,
  FiShoppingBag,
  FiTruck,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { useLocale } from "../../context/LocaleContext";
import "./Portfolio.css";

const projectIcons = {
  activity: <FiActivity />,
  book: <FiBookOpen />,
  chart: <FiBarChart2 />,
  coffee: <FiCoffee />,
  film: <FiFilm />,
  map: <FiMap />,
  package: <FiPackage />,
  shopping: <FiShoppingBag />,
  truck: <FiTruck />,
  users: <FiUsers />,
};

const formatRepositoryUrl = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const RepositoryLink = ({ href, label, title }) => {
  const isGitLab = href.includes("gitlab.com");

  return (
    <a
      className="project-repository-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label}: ${title}`}
    >
      <span className="project-repository-icon" aria-hidden="true">
        {isGitLab ? <FiGitlab /> : <FiGithub />}
      </span>
      <span className="project-repository-copy">
        <strong>{label}</strong>
        <span>{formatRepositoryUrl(href)}</span>
      </span>
      <FiArrowUpRight aria-hidden="true" />
    </a>
  );
};

const ProjectCard = ({ project, index, copy, language, compact = false, onDetails }) => (
  <article
    className={`project-card${compact ? " project-card--compact" : ""}`}
    data-reveal="scale"
    data-reveal-delay={(index % 4) * 80}
  >
    <div className={`project-visual project-visual--${project.icon}`}>
      {project.image ? (
        <img
          className="project-preview-image"
          src={project.image}
          alt={`${language === "vi" ? "Ảnh dự án" : "Project preview"} ${project.title}`}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="project-symbol" aria-hidden="true">
          {projectIcons[project.icon]}
          <span>{String(index + 1).padStart(2, "0")}</span>
        </div>
      )}
      {project.repoImage && (
        <img
          className="project-repo-image"
          src={project.repoImage}
          alt={`${language === "vi" ? "Logo gốc" : "Original logo"} ${project.title}`}
          loading="lazy"
          decoding="async"
        />
      )}
      <span className="project-category">{project.category}</span>
    </div>

    <div className="project-content">
      <div className="project-heading">
        <div>
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
          <h3>{project.title}</h3>
        </div>
        {!compact && (
          <div className="project-links">
            <a href={project.source} target="_blank" rel="noreferrer" aria-label={`${project.backendSource ? copy.frontendSourceLabel : copy.sourceLabel}: ${project.title}`} title={project.backendSource ? copy.frontendSourceLabel : copy.sourceLabel}>
              {project.backendSource ? <span className="project-link-label">FE</span> : project.platform === "gitlab" ? <FiGitlab /> : <FiGithub />}
            </a>
            {project.backendSource && (
              <a href={project.backendSource} target="_blank" rel="noreferrer" aria-label={`${copy.backendSourceLabel}: ${project.title}`} title={copy.backendSourceLabel}>
                <span className="project-link-label">BE</span>
              </a>
            )}
            {project.docs && (
              <a href={project.docs} target="_blank" rel="noreferrer" aria-label={`${copy.docsLabel}: ${project.title}`} title={copy.docsLabel}>
                <FiBookOpen />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${copy.liveLabel}: ${project.title}`} title={copy.liveLabel}>
                <FiArrowUpRight />
              </a>
            )}
          </div>
        )}
      </div>

      <p className="project-subtitle">{project.subtitle}</p>
      <p className="project-description">{project.description}</p>

      <ul className="project-features">
        {project.features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>

      <ul className="project-stack" aria-label={`${language === "vi" ? "Công nghệ sử dụng trong" : "Technologies used in"} ${project.title}`}>
        {project.stack.slice(0, 5).map((technology) => <li key={technology}>{technology}</li>)}
      </ul>

      {compact && (
        <div className="project-repositories">
          <RepositoryLink
            href={project.source}
            label={project.backendSource ? copy.frontendSourceLabel : copy.sourceLabel}
            title={project.title}
          />
          {project.backendSource && (
            <RepositoryLink href={project.backendSource} label={copy.backendSourceLabel} title={project.title} />
          )}
        </div>
      )}

      {project.caseStudy && (
        <button className="project-details" type="button" onClick={() => onDetails(project)} aria-label={`${copy.detailsLabel}: ${project.title}`}>
          <FiBookOpen /> {copy.detailsLabel} <FiArrowUpRight />
        </button>
      )}
    </div>
  </article>
);

const CaseStudyModal = ({ project, copy, onClose }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="case-study-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <article className="case-study" role="dialog" aria-modal="true" aria-labelledby="case-study-title">
        <button ref={closeButtonRef} className="case-study__close" type="button" onClick={onClose} aria-label={copy.closeLabel}>
          <FiX />
        </button>

        <div className="case-study__hero">
          <span className="mono-label">{project.category}</span>
          <h3 id="case-study-title">{project.title}</h3>
          <p>{project.subtitle}</p>
        </div>

        <div className="case-study__grid">
          <section>
            <span>01</span>
            <h4>{copy.caseStudyLabels.challenge}</h4>
            <p>{project.caseStudy.challenge}</p>
          </section>
          <section>
            <span>02</span>
            <h4>{copy.caseStudyLabels.approach}</h4>
            <p>{project.caseStudy.approach}</p>
          </section>
          <section className="case-study__wide">
            <span>03</span>
            <h4>{copy.caseStudyLabels.architecture}</h4>
            <p>{project.caseStudy.architecture}</p>
            <ul className="project-stack">
              {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </section>
          <section className="case-study__wide">
            <span>04</span>
            <h4>{copy.caseStudyLabels.highlights}</h4>
            <ul className="case-study__highlights">
              {project.caseStudy.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </section>
        </div>

        <div className="case-study__actions">
          <a className="button button--primary" href={project.source} target="_blank" rel="noreferrer">
            {copy.sourceLabel} {project.platform === "gitlab" ? <FiGitlab /> : <FiGithub />}
          </a>
          {project.docs && (
            <a className="button button--outline" href={project.docs} target="_blank" rel="noreferrer">
              {copy.docsLabel} <FiBookOpen />
            </a>
          )}
          {project.live && (
            <a className="button button--outline" href={project.live} target="_blank" rel="noreferrer">
              {copy.liveLabel} <FiArrowUpRight />
            </a>
          )}
        </div>
      </article>
    </div>
  );
};

const Portfolio = () => {
  const { content, language } = useLocale();
  const copy = content.portfolio;
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => setSelectedProject(null), [language]);

  const matchesFilter = (project) => activeFilter === "all" || project.filterTags.includes(activeFilter);
  const featuredProjects = copy.projects.filter(matchesFilter);
  const courseProjects = copy.courseProjects.filter(matchesFilter);
  const hasProjects = featuredProjects.length + courseProjects.length > 0;

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

        <div className="project-filters" role="group" aria-label={copy.filtersLabel} data-reveal>
          {copy.filters.map(([value, label]) => (
            <button
              key={value}
              type="button"
              className={activeFilter === value ? "is-active" : ""}
              aria-pressed={activeFilter === value}
              onClick={() => setActiveFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>

        {featuredProjects.length > 0 && (
          <div className="project-group">
            <div className="project-group__heading" data-reveal>
              <h3>{copy.featuredLabel}</h3>
              <p>{copy.featuredCopy}</p>
            </div>
            <div className="project-grid project-grid--featured">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} index={copy.projects.indexOf(project)} copy={copy} language={language} onDetails={setSelectedProject} />
              ))}
            </div>
          </div>
        )}

        {courseProjects.length > 0 && (
          <div className="project-group project-group--coursework">
            <div className="project-group__heading" data-reveal>
              <h3>{copy.courseLabel}</h3>
              <p>{copy.courseCopy}</p>
            </div>
            <div className="project-grid project-grid--compact">
              {courseProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={copy.projects.length + copy.courseProjects.indexOf(project)}
                  copy={copy}
                  language={language}
                  compact
                  onDetails={setSelectedProject}
                />
              ))}
            </div>
          </div>
        )}

        {!hasProjects && <p className="project-empty" role="status">{copy.emptyState}</p>}
      </div>

      {selectedProject && <CaseStudyModal project={selectedProject} copy={copy} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default Portfolio;
