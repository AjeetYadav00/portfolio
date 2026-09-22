import { useEffect, useState } from 'react'
import {
  ArrowUp,
  BriefcaseBusiness,
  Code2,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react'
import './App.css'
import { aboutFeatures, navItems, projects, skills, socialLinks } from './data/siteData'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        threshold: [0.35, 0.55, 0.8],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const handleNavClick = () => setIsMenuOpen(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    setIsSubmitted(false)
  }

  const validateForm = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.'
    } else if (formData.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters long.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setIsSubmitted(false)
      return
    }

    setErrors({})
    setIsSubmitted(true)
    setFormData(initialForm)
  }

  return (
    <div className="portfolio-shell">
      <header className="topbar">
        <div className="container nav-wrapper">
          <a href="#home" className="brand" aria-label="Ajeet Yadav home">
            <span className="brand-text">Ajeet</span>
            <span className="brand-accent">Yadav</span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href.replace('#', '') ? 'nav-link active' : 'nav-link'}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              aria-label="Toggle theme"
              onClick={handleThemeToggle}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button
              type="button"
              className="menu-toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav-panel">
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={activeSection === item.href.replace('#', '') ? 'mobile-link active' : 'mobile-link'}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="section hero-section">
          <div className="container hero-content reveal">
            <div className="hero-copy">
              <p className="eyebrow">HI, I'M</p>
              <h1>
                <span className="gradient-text">Ajeet Yadav</span>
              </h1>
              <p className="hero-subtitle">
                Frontend Developer &amp; Full Stack Developer — Building modern, responsive and scalable web applications.
              </p>
              <div className="cta-row">
                <a href="#projects" className="primary-btn">
                  View Projects
                </a>
                <a
                  href="/Ajeet_Yadav_Resume.pdf"
                  className="secondary-btn"
                  target="_blank"
                  rel="noreferrer"
                  download="Ajeet_Yadav_Resume.pdf"
                >
                  Download Resume
                </a>
              </div>
            </div>

          </div>
        </section>

        <section id="about" className="section">
          <div className="container reveal">
            <h2 className="timeline-title">About Me</h2>

            <div className="about-card">
              <p>I'm a Computer Science Engineering student and aspiring Frontend / Full Stack Developer who enjoys building modern, responsive and user-friendly web applications.</p>
              <p>I have experience working with frontend technologies such as HTML, CSS, JavaScript, React.js and Tailwind CSS, along with backend technologies including Node.js, Express.js and MongoDB.</p>
              <p>I enjoy learning new technologies, solving problems and turning ideas into practical web applications.</p>
            </div>
          </div>
        </section>

        <section id="timeline" className="section timeline-section">
          <div className="container reveal">
            <h2 className="timeline-title">My Timeline</h2>

            <div className="timeline-card">
              <div className="timeline-rail">
                <span className="timeline-dot" />
              </div>

              <div className="timeline-content">
                <div className="timeline-badge">Education</div>

                <div className="timeline-row">
                  <div className="timeline-main">
                    <h3>Bachelor of Technology in Computer Science and Engineering</h3>
                    <p>
                      Rajarshi Rananjaya Sinh Institute of Management and Technology (RRSIMT), Amethi
                    </p>
                    <p>
                      2022 - 2026 (Completed) • Munshiganj, Amethi • Affiliated to Dr. A.P.J. Abdul Kalam Technical University - AKTU
                    </p>
                  </div>
                </div>

                <div className="timeline-list">
                  <ul>
                    <li>
                      Completed B.Tech in Computer Science and Engineering with a strong foundation in core software development, algorithms, and system design.
                    </li>
                    <li>
                      Gained hands-on technical expertise in full-stack web development (MERN stack), data structures, and object-oriented programming.
                    </li>
                    <li>
                      Successfully built and deployed multiple real-world applications including AI-driven systems and scalable web platforms as part of academic and practical projects.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container reveal">
            <p className="section-label center">EXPERTISE</p>
            <h2 className="section-title center">Technical Skills</h2>
            <div className="skill-grid">
              {skills.map(({ title, items, icon: Icon }, index) => (
                <article key={title} className="skill-card">
                  <div className="skill-header">
                    <span className={`icon-badge badge-${index + 1}`}>
                      <Icon size={18} />
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <div className="tag-list">
                    {items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container reveal">
            <p className="section-label center">PROJECTS</p>
            <h2 className="section-title center">Things I Have Built</h2>

            <div className="project-grid">
              {projects.map(({ title, description, features, techStack, liveUrl, githubUrl, accent }, index) => (
                <article key={title} className="project-card">
                  <div className={`project-visual ${accent}`} aria-label={`${title} project preview`}>
                    <div className="project-overlay">
                      <span>Project {index + 1}</span>
                      <h3>{title}</h3>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3>{title}</h3>
                    <p>{description}</p>

                    {features.length > 0 && (
                      <ul className="project-features">
                        {features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    )}

                    <div className="tag-list project-tags">
                      {techStack.map((tech) => (
                        <span key={tech} className="tag subtle-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <a href={liveUrl} className="primary-btn small-btn" target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                      <a href={githubUrl} className="secondary-btn small-btn" target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-grid reveal">
            <div className="contact-copy">
              <p className="section-label">CONTACT</p>
              <h2>Let&apos;s Work Together</h2>
              <p className="contact-subtitle">
                Have a project in mind or want to discuss an opportunity? Feel free to get in touch.
              </p>

              <form className="contact-form" noValidate onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? 'invalid' : ''}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'invalid' : ''}
                    placeholder="Your email"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={errors.message ? 'invalid' : ''}
                    placeholder="Tell me about your project"
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button type="submit" className="primary-btn form-btn">
                  Send Message
                </button>

                {isSubmitted && (
                  <p className="success-message" role="status">
                    Your message has been sent successfully.
                  </p>
                )}
              </form>
            </div>

            <aside className="contact-panel">
              <div className="info-card">
                <div className="contact-item">
                  <Mail size={18} />
                  <a href="mailto:ajeetyadav50647@gmail.com">ajeetyadav50647@gmail.com</a>
                </div>
                <div className="contact-item">
                  <Code2 size={18} />
                  <a href="tel:+916388779074">6388779074</a>
                </div>
                <div className="contact-item">
                  <Mail size={18} />
                  <span>India</span>
                </div>
              </div>

              <div className="social-list">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} className="social-link" target="_blank" rel="noreferrer" aria-label={label}>
                    <Icon size={18} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Ajeet Yadav. All rights reserved.</p>
          <div className="footer-links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer">
                {label}
              </a>
            ))}
          </div>
        </div>
        <a href="#home" className="back-to-top" aria-label="Back to top">
          <ArrowUp size={18} />
        </a>
      </footer>
    </div>
  )
}

export default App
