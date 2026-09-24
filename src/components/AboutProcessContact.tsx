import { linkedin, whatsappUrl } from '../data'
import Education from './Education'

type IconProps = { type: 'github' | 'whatsapp' }

export function About() {
  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid">
        <div>
          <div className="eyebrow">Por trás do código</div>
          <h2>Sou Victor Ulrich.</h2>
          <div className="about-copy">
            <p>
              Desenvolvedor, estudante de <strong>ADS na FIAP</strong> e
              estagiário na <strong>Accenture</strong>.
            </p>
            <p>
              Crio sites e soluções de TI para pessoas e pequenos negócios, com
              comunicação direta em cada etapa.
            </p>
          </div>
          <a
            className="text-link"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conhecer meu perfil no LinkedIn ↗
          </a>
        </div>
        <div className="about-side">
          <img
            src="/images/victor-ulrich.webp"
            srcSet="/images/victor-ulrich-small.webp 360w, /images/victor-ulrich.webp 720w"
            sizes="(max-width: 420px) calc(100vw - 34px), 360px"
            alt="Victor Ulrich, desenvolvedor e estudante de Análise e Desenvolvimento de Sistemas na FIAP"
            width="360"
            height="540"
            loading="lazy"
          />
          <div className="about-facts">
            <div>
              <span>Estudos</span>
              <strong>ADS · FIAP</strong>
            </div>
            <div>
              <span>Experiência</span>
              <strong>Estagiário · Accenture</strong>
            </div>
            <div>
              <span>Foco</span>
              <strong>React · TypeScript · Java</strong>
            </div>
          </div>
        </div>
      </div>
      <Education />
    </section>
  )
}

export function Process() {
  return (
    <section className="section process" id="como-funciona">
      <div className="wrap">
        <div className="eyebrow">Como funciona</div>
        <h2>Do primeiro contato à entrega</h2>
        <div className="process-grid">
          <div>
            <span>01 / Conversa</span>
            <h3>Você conta o objetivo</h3>
            <p>Você me conta o que precisa.</p>
          </div>
          <div>
            <span>02 / Proposta</span>
            <h3>Definimos o escopo</h3>
            <p>Alinhamos entregas, prazo e valor.</p>
          </div>
          <div>
            <span>03 / Execução</span>
            <h3>Você acompanha</h3>
            <p>Você acompanha o desenvolvimento.</p>
          </div>
          <div>
            <span>04 / Entrega e suporte</span>
            <h3>Revisamos o resultado</h3>
            <p>Revisamos juntos e finalizamos os ajustes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="wrap">
        <div className="contact-box">
          <div className="eyebrow">Vamos conversar</div>
          <h2>Tem um projeto em mente?</h2>
          <p>Conte sua ideia. Vamos definir o próximo passo.</p>
          <div className="contact-grid">
            <div>
              <strong>Atendimento</strong>
              <span>Remoto em todo o Brasil</span>
              <span>Presencial em São Paulo</span>
            </div>
            <div>
              <strong>Pagamento</strong>
              <span>Pix</span>
              <span>Projetos maiores com divisão por etapas</span>
            </div>
          </div>
          <a
            className="btn btn-primary"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar comigo no WhatsApp ↗
          </a>
        </div>
      </div>
    </section>
  )
}

export function SocialIcon({ type }: IconProps) {
  if (type === 'github')
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    )
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}
