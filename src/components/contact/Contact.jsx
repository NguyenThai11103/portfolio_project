import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy, FiGithub, FiGitlab, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { profile } from "../../data/portfolioData";
import { useLocale } from "../../context/LocaleContext";
import "./Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { content, language } = useLocale();
  const copy = content.contact;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const sender = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`${language === "vi" ? "Trao đổi dự án từ" : "Portfolio inquiry from"} ${name}`);
    const body = encodeURIComponent(`${message}\n\n${language === "vi" ? "Từ" : "From"}: ${name}\nEmail: ${sender}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-shell">
          <div className="contact-intro" data-reveal="left">
            <span className="section-kicker">{copy.kicker}</span>
            <h2>{copy.title}</h2>
            <p>{copy.copy}</p>

            <div className="contact-direct">
              <button type="button" onClick={copyEmail}>
                <span><FiMail /></span>
                <div><small>{copy.email}</small><strong>{profile.email}</strong></div>
                {copied ? <FiCheck /> : <FiCopy />}
              </button>
              <a href={`tel:${profile.phoneHref}`}>
                <span><FiPhone /></span>
                <div><small>{copy.phone}</small><strong>{profile.phone}</strong></div>
                <FiArrowUpRight />
              </a>
              <div className="contact-location">
                <span><FiMapPin /></span>
                <div><small>{copy.location}</small><strong>{profile.location}</strong></div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-reveal="right" data-reveal-delay="100">
            <div className="contact-form__heading">
              <span className="mono-label">{copy.inquiry}</span>
              <h3>{copy.formTitle}</h3>
            </div>

            <label>
              <span>{copy.name}</span>
              <input name="name" type="text" placeholder={copy.namePlaceholder} autoComplete="name" required />
            </label>

            <label>
              <span>Email</span>
              <input name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
            </label>

            <label>
              <span>{copy.message}</span>
              <textarea name="message" rows="5" placeholder={copy.messagePlaceholder} required />
            </label>

            <button className="button button--primary contact-submit" type="submit">
              {copy.submit} <FiSend />
            </button>
            <p className="contact-form__note">{copy.note}</p>
          </form>
        </div>

        <footer className="site-footer" data-reveal data-reveal-delay="120">
          <div>
            <strong>{profile.displayName}</strong>
            <span>{profile.title} · {profile.specialty}</span>
          </div>
          <p>© {new Date().getFullYear()} {copy.footer}</p>
          <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
          <a href={profile.gitlab} target="_blank" rel="noreferrer"><FiGitlab /> GitLab</a>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
