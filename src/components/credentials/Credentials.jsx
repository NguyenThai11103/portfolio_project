import { FiAward, FiBookOpen, FiCheck } from "react-icons/fi";
import { certifications, education } from "../../data/portfolioData";
import { useLocale } from "../../context/LocaleContext";
import "./Credentials.css";

const Credentials = () => {
  const { content } = useLocale();
  const copy = content.credentials;

  return (
    <section className="section credentials section--tinted" id="credentials">
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

        <div className="credentials-grid">
          <div className="awards-panel" data-reveal="left" data-reveal-delay="80">
            <div className="credentials-panel-heading">
              <FiAward />
              <div>
                <span className="mono-label">{copy.awardsLabel}</span>
                <h3>{copy.awardsTitle}</h3>
              </div>
            </div>
            <div className="award-list">
              {copy.awards.map(([year, title, detail]) => (
                <article className="award-item" key={`${year}-${title}`}>
                  <span>{year}</span>
                  <div>
                    <h4>{title}</h4>
                    <p>{detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="certifications-panel" data-reveal="right" data-reveal-delay="140">
            <div className="credentials-panel-heading">
              <FiBookOpen />
              <div>
                <span className="mono-label">{copy.certificationsLabel}</span>
                <h3>{copy.certificationsTitle}</h3>
              </div>
            </div>

            <ul className="certification-list">
              {certifications.map((certification) => (
                <li key={certification}><FiCheck /> <span>{certification}</span></li>
              ))}
            </ul>

            <article className="education-card">
              <span className="education-card__year">{education.period}</span>
              <span>{copy.education}</span>
              <h4>{education.school}</h4>
              <p>{education.degree}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
