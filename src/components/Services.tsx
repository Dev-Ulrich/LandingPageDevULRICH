import { useState } from 'react'
import { supportServices, webServices } from '../data'

export default function Services() {
  const [serviceTab, setServiceTab] = useState<'web' | 'support'>('web')
  const services = serviceTab === 'web' ? webServices : supportServices
  return (
    <>
      <section className="section services" id="servicos">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">O que posso fazer por você</div>
              <h2>Serviços e valores</h2>
            </div>
            <p>Valores iniciais. O orçamento depende do escopo.</p>
          </div>
          <div
            className="service-tabs"
            role="group"
            aria-label="Categorias de serviços"
          >
            <button
              type="button"
              className={serviceTab === 'web' ? 'selected' : ''}
              onClick={() => setServiceTab('web')}
              aria-pressed={serviceTab === 'web'}
            >
              Desenvolvimento web
            </button>
            <button
              type="button"
              className={serviceTab === 'support' ? 'selected' : ''}
              onClick={() => setServiceTab('support')}
              aria-pressed={serviceTab === 'support'}
            >
              Suporte de TI
            </button>
          </div>
          <div className="price-list">
            {services.map((service) => (
              <div className="price-row" key={service.name}>
                <div className="service-copy">
                  <h3>{service.name}</h3>
                  {service.description && <p>{service.description}</p>}
                </div>
                <strong>{service.price}</strong>
              </div>
            ))}
          </div>
          {serviceTab === 'web' && (
            <details className="service-scope">
              <summary>O que entra no orçamento?</summary>
              <p>
                Definimos páginas, integrações, revisões e prazo. Domínio,
                hospedagem e manutenção são combinados à parte na proposta.
              </p>
            </details>
          )}
        </div>
      </section>
    </>
  )
}
