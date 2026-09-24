import { useState } from 'react'
import {
  aluraCertificateUrl,
  certifications,
  education,
  fiapValidationUrl,
} from '../data'

export default function Education() {
  const [copyStatus, setCopyStatus] = useState<Record<string, string>>({})

  async function copyCode(code: string) {
    try {
      await navigator.clipboard.writeText(code)
      setCopyStatus((previous) => ({ ...previous, [code]: 'Código copiado' }))
    } catch {
      setCopyStatus((previous) => ({
        ...previous,
        [code]: 'Selecione o código abaixo para copiar.',
      }))
    }
  }

  return (
    <section
      className="wrap education"
      id="certificacoes"
      aria-labelledby="education-title"
    >
      <div className="education-heading">
        <div>
          <div className="eyebrow">Aprendizado na prática</div>
          <h3 id="education-title">Formação & certificações</h3>
        </div>
        <span className="education-total">
          <strong>280h</strong> em cursos FIAP
        </span>
      </div>
      <div className="credentials-layout">
        <div className="academic-column">
          <h4 className="credential-label">Formação acadêmica</h4>
          <div className="academic-timeline">
            {education.map((item) => (
              <article className="academic-item" key={item.title}>
                <span className="institution-name">{item.institution}</span>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <span className="education-status">{item.status}</span>
                {item.diploma && (
                  <div className="diploma-credential">
                    <a
                      className="diploma-link"
                      href={item.diploma.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="diploma-icon" aria-hidden="true">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                          <path d="M14 3v6h6M8 13h8M8 17h5" />
                        </svg>
                      </span>
                      <span>
                        Ver diploma de conclusão
                        <small>PDF oficial · FIEB</small>
                      </span>
                      <span aria-hidden="true">↗</span>
                    </a>
                    <details className="certificate-details">
                      <summary>Validar diploma</summary>
                      <div className="certificate-validation">
                        <p>Use este código no site da FIEB:</p>
                        <code>{item.diploma.code}</code>
                        <div className="credential-actions">
                          <button
                            type="button"
                            onClick={() => copyCode(item.diploma.code)}
                            aria-label="Copiar código do diploma FIEB"
                          >
                            Copiar código
                          </button>
                          <a
                            href={item.diploma.validationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Validar na FIEB ↗
                          </a>
                        </div>
                        <span className="copy-status" role="status">
                          {copyStatus[item.diploma.code]}
                        </span>
                      </div>
                    </details>
                  </div>
                )}
              </article>
            ))}
          </div>
          <a
            className="alura-card"
            href={aluraCertificateUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="alura-card-top">
              <span className="institution-name">Alura</span>
              <span aria-hidden="true">↗</span>
            </div>
            <h4>Design e desenvolvimento</h4>
            <p>Figma · Java · C#</p>
            <span className="credential-link">
              Ver certificado completo <span aria-hidden="true">→</span>
            </span>
          </a>
        </div>
        <div>
          <h4 className="credential-label">FIAP · Nano Courses</h4>
          <div className="certification-grid">
            {certifications.map((certificate) => (
              <article className="certification-card" key={certificate.code}>
                <div className="certificate-top">
                  <span className="certificate-symbol" aria-hidden="true">
                    {certificate.symbol}
                  </span>
                  <span className="certificate-hours">
                    {certificate.hours} horas
                  </span>
                </div>
                <h5>{certificate.title}</h5>
                <p className="certificate-date">
                  Concluído em {certificate.date}
                </p>
                <details className="certificate-details">
                  <summary>Consultar credencial</summary>
                  <div className="certificate-validation">
                    <p>Use este código no site da FIAP:</p>
                    <code>{certificate.code}</code>
                    <div className="credential-actions">
                      <button
                        type="button"
                        onClick={() => copyCode(certificate.code)}
                        aria-label={`Copiar código de ${certificate.title}`}
                      >
                        Copiar código
                      </button>
                      <a
                        href={fiapValidationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Validar certificado de ${certificate.title} na FIAP`}
                      >
                        Validar na FIAP ↗
                      </a>
                    </div>
                    <span className="copy-status" role="status">
                      {copyStatus[certificate.code]}
                    </span>
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
