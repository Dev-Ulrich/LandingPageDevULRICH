import { useEffect, useState } from 'react'
import { whatsappUrl } from './data'
import Projects from './components/Projects'
import Services from './components/Services'
import {
  About,
  Contact,
  Process,
  SocialIcon,
} from './components/AboutProcessContact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

type Theme = 'light' | 'dark'

const nav = [
  { label: 'Projetos', href: '#portfolio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre mim', href: '#sobre' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export default function App() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#f4f6fc' : '#080b16')
    try {
      localStorage.setItem('devulrich-theme', theme)
    } catch {
      // Storage can be unavailable in restricted browser contexts.
    }
  }, [theme])

  return (
    <>
      <header className="site-header">
        <div className="wrap nav">
          <a
            className="brand"
            href="#inicio"
            aria-label="DevUlrich, voltar ao início"
          >
            <img
              src="/images/logo-devulrich.webp"
              alt="Logo DevUlrich"
              width="84"
              height="84"
            />
          </a>
          <nav
            id="mobile-nav"
            className={menuOpen ? 'nav-links is-open' : 'nav-links'}
            aria-label="Navegação principal"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="theme"
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={
              theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'
            }
            title={
              theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'
            }
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
            <span className="theme-label">
              {theme === 'dark' ? 'Claro' : 'Escuro'}
            </span>
          </button>
          <button
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      <main id="inicio">
        <section className="hero-wrap">
          <div className="wrap hero">
            <div>
              <div className="eyebrow">Desenvolvimento web + suporte de TI</div>
              <h1>
                Seu negócio online,{' '}
                <span className="gradient">mais perto dos clientes.</span>
              </h1>
              <p className="lead">
                Sites e landing pages com atendimento direto, do orçamento à
                entrega.
              </p>
              <div className="actions">
                <a
                  className="btn btn-primary"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pedir orçamento <span aria-hidden="true">↗</span>
                </a>
                <a className="btn btn-secondary" href="#portfolio">
                  Ver projetos <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="micro">
                <span>//</span> Remoto no Brasil • Presencial em São Paulo
              </div>
            </div>
            <div
              className="terminal"
              aria-label="Resumo dos serviços DevUlrich"
            >
              <div className="term-top">
                <i className="dot" />
                <i className="dot" />
                <i className="dot" />
                <span className="term-title">devulrich / serviços</span>
              </div>
              <div className="term-body">
                <div>
                  <span className="prompt">victor@devulrich</span>{' '}
                  <span className="command">~ $ cat soluções.txt</span>
                </div>
                <div className="output">
                  <div>
                    <span className="key">01.</span>{' '}
                    <span className="value">Sites e landing pages</span>
                  </div>
                  <div>
                    <span className="key">02.</span>{' '}
                    <span className="value">Interfaces em React e APIs</span>
                  </div>
                  <div>
                    <span className="key">03.</span>{' '}
                    <span className="value">Suporte e configuração de TI</span>
                  </div>
                </div>
                <div>
                  <span className="prompt">victor@devulrich</span>{' '}
                  <span className="command">~ $ pronto_para_começar</span>
                </div>
                <div>
                  <span className="key">&gt;</span> Vamos conversar sobre seu
                  projeto <span className="cursor" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Services />
        <About />
        <Process />
        <FAQ />
        <Contact />
      </main>

      <Footer nav={nav} />
      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa por WhatsApp com Victor Ulrich"
      >
        <SocialIcon type="whatsapp" />
      </a>
    </>
  )
}
