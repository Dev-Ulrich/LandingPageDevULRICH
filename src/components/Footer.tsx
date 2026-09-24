import { github, whatsappUrl } from '../data'
import { SocialIcon } from './AboutProcessContact'

type FooterProps = { nav: { label: string; href: string }[] }

export default function Footer({ nav }: FooterProps) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#inicio" aria-label="DevUlrich, voltar ao início">
              <img
                src="/images/logo-devulrich.webp"
                alt="DevUlrich"
                width="112"
                height="112"
              />
            </a>
            <p>
              Desenvolvimento web e suporte de TI para quem quer soluções
              simples, úteis e bem executadas.
            </p>
          </div>
          <div className="footer-column">
            <h2>NAVEGAÇÃO</h2>
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="footer-column">
            <h2>CONTATO</h2>
            <div className="footer-socials">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <SocialIcon type="github" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <SocialIcon type="whatsapp" />
              </a>
            </div>
            <a
              className="footer-phone"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: +55 11 97082-0009
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} DevUlrich. Todos os direitos
            reservados.
          </span>
          <span>Feito com ❤️ e muito ☕</span>
        </div>
      </div>
    </footer>
  )
}
