import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy, FiGithub, FiGitlab, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { profile } from "../../data/portfolioData";
import { useLocale } from "../../context/LocaleContext";
import "./Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitState, setSubmitState] = useState("idle");
  const [referenceCode, setReferenceCode] = useState("");
  const { content, language } = useLocale();
  const copy = content.contact;
  const isSending = submitState === "sending";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const sender = data.get("email");
    const topic = data.get("topic");
    const message = data.get("message");
    const submissionReference = `PORT-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;

    setSubmitState("sending");
    setReferenceCode("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email: sender,
          topic,
          message,
          reference: submissionReference,
          _replyto: sender,
          _subject: `[${topic}] ${language === "vi" ? "Trao đổi từ" : "Inquiry from"} ${name}`,
          _template: "table",
          _honey: data.get("_honey") || "",
          _url: `${window.location.origin}${window.location.pathname}`,
        }),
      });
      const result = await response.json().catch(() => ({}));
      const resultMessage = String(result.message || "");
      const requiresActivation = /activat|confirm|verify/i.test(resultMessage);

      if (requiresActivation) {
        setSubmitState("activation");
        form.reset();
        return;
      }

      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error(resultMessage || "Form submission failed");
      }

      setSubmitState("success");
      setReferenceCode(submissionReference);
      form.reset();
    } catch {
      setSubmitState("error");
    }
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
              <input name="name" type="text" placeholder={copy.namePlaceholder} autoComplete="name" minLength="2" maxLength="80" disabled={isSending} required />
            </label>

            <label>
              <span>Email</span>
              <input name="email" type="email" placeholder="you@company.com" autoComplete="email" maxLength="120" disabled={isSending} required />
            </label>

            <label>
              <span>{copy.topic}</span>
              <select name="topic" defaultValue={copy.topics[0]} disabled={isSending} required>
                {copy.topics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
              </select>
            </label>

            <label>
              <span>{copy.message}</span>
              <textarea name="message" rows="5" placeholder={copy.messagePlaceholder} minLength="10" maxLength="1800" disabled={isSending} required />
            </label>

            <input className="contact-honeypot" name="_honey" type="text" tabIndex="-1" autoComplete="off" aria-hidden="true" />

            <button className="button button--primary contact-submit" type="submit" disabled={isSending}>
              {isSending ? copy.sending : copy.submit} <FiSend />
            </button>
            {submitState !== "idle" && submitState !== "sending" && (
              <p
                className={`contact-form__status contact-form__status--${submitState}`}
                role={submitState === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                {submitState === "success" && <><FiCheck /> <span>{copy.success}<strong className="contact-form__reference">{copy.reference}: {referenceCode}</strong></span></>}
                {submitState === "activation" && <><FiMail /> {copy.activation}</>}
                {submitState === "error" && copy.error}
              </p>
            )}
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
