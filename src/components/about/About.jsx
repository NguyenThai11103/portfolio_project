import { FiCheckCircle, FiLayers, FiShield, FiZap } from "react-icons/fi";
import { useLocale } from "../../context/LocaleContext";
import "./About.css";

const focusIcons = [<FiLayers />, <FiZap />, <FiShield />];

const About = () => {
  const { content } = useLocale();
  const copy = content.about;

  return (
    <section className="section about section--tinted" id="about">
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

        <div className="about-layout">
          <article className="about-statement" data-reveal="left" data-reveal-delay="80">
            <span className="about-statement__number">02+</span>
            <div>
              <span className="mono-label">{copy.years}</span>
              <h3>{copy.statementTitle}</h3>
              <p>{copy.statement}</p>
              <ul className="about-checklist">
                {copy.checklist.map((item) => <li key={item}><FiCheckCircle /> {item}</li>)}
              </ul>
            </div>
          </article>

          <div className="about-focus-list">
            {copy.focus.map(([title, text], index) => (
              <article className="about-focus" key={title} data-reveal="right" data-reveal-delay={120 + index * 90}>
                <span className="about-focus__index">0{index + 1}</span>
                <div className="about-focus__icon">{focusIcons[index]}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
