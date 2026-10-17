import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiGitlab, FiMail, FiMapPin } from "react-icons/fi";
import avatar from "../../assets/images/ava.jpg";
import { profile } from "../../data/portfolioData";
import { useLocale } from "../../context/LocaleContext";
import "./Home.css";

const Home = () => {
  const { content } = useLocale();
  const copy = content.hero;

  return (
    <section className="hero" id="home">
      <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="hero-status-dot" />
            {profile.title} · {profile.specialty}
          </div>

          <h1>
            {copy.titleLead}
            <span>{copy.titleAccent}</span>
          </h1>

          <p className="hero-lead">
            {copy.leadBefore} <strong>{profile.displayName}</strong>. {copy.leadAfter}
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="#portfolio">
              {copy.projectsCta} <FiArrowDownRight />
            </a>
            <a className="button button--outline" href={`mailto:${profile.email}`}>
              {copy.contactCta} <FiMail />
            </a>
          </div>

          <div className="hero-meta">
            <span><FiMapPin /> {profile.location}</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <FiGithub /> GitHub <FiArrowUpRight />
            </a>
            <a href={profile.gitlab} target="_blank" rel="noreferrer">
              <FiGitlab /> GitLab <FiArrowUpRight />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-portrait-frame">
            <div className="hero-portrait-accent" aria-hidden="true" />
            <img src={avatar} alt={copy.portraitAlt} />
            <div className="hero-code-card" aria-hidden="true">
              <span>01 / ARCHITECT</span>
              <strong>Web × Blockchain</strong>
              <small>from API to on-chain proof</small>
            </div>
          </div>
          <div className="hero-signature" aria-hidden="true">Duy Thai</div>
        </div>
      </div>

      <div className="container hero-metrics" aria-label={copy.metricsLabel}>
        {copy.metrics.map(([value, label]) => (
          <div className="hero-metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
