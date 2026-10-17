import { useLocale } from "../../context/LocaleContext";
import "./Skill.css";

const Skill = () => {
  const { content, language } = useLocale();
  const copy = content.expertise;

  return (
    <section className="section expertise section--tinted" id="expertise">
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

        <div className="expertise-list">
          {copy.groups.map(([title, description, skills], index) => (
            <article className="expertise-row" key={title} data-reveal data-reveal-delay={index * 75}>
              <span className="expertise-row__number">0{index + 1}</span>
              <div className="expertise-row__intro">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <ul className="expertise-tags" aria-label={`${language === "vi" ? "Công nghệ" : "Technologies"} ${title}`}>
                {skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
