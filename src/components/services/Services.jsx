import { FiArrowUpRight, FiBriefcase, FiMapPin } from "react-icons/fi";
import { profile } from "../../data/portfolioData";
import { useLocale } from "../../context/LocaleContext";
import "./Services.css";

const Services = () => {
  const { content } = useLocale();
  const copy = content.experience;

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <span className="section-kicker">{copy.kicker}</span>
            <h2 className="section-title">{copy.title}</h2>
          </div>
          <p className="section-copy">
            {copy.copy}
          </p>
        </div>

        <article className="experience-card" data-reveal="scale" data-reveal-delay="100">
          <div className="experience-card__meta">
            <span className="experience-card__icon"><FiBriefcase /></span>
            <div>
              <span className="mono-label">{copy.period}</span>
              <h3>DZFullStack JSC</h3>
              <p>{profile.title}</p>
            </div>
            <span className="experience-location"><FiMapPin /> {profile.location}</span>
          </div>

          <div className="experience-card__body">
            <div className="experience-card__summary">
              <span>{copy.currentRole}</span>
              <strong>{copy.summary}</strong>
              <FiArrowUpRight aria-hidden="true" />
            </div>
            <ol className="experience-list">
              {copy.achievements.map((achievement, index) => (
                <li key={achievement}>
                  <span>0{index + 1}</span>
                  <p>{achievement}</p>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
