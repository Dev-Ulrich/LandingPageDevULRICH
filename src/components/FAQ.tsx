import { useState } from 'react'
import { faqItems } from '../data'

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <section className="section faq" id="faq">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Perguntas frequentes</div>
            <h2>FAQ</h2>
          </div>
        </div>
        <div
          className="faq-list"
          aria-label="Perguntas frequentes sobre serviços e atendimento"
        >
          {faqItems.map((item, index) => {
            const isOpen = openFaq === index
            return (
              <div
                className={`faq-item ${isOpen ? 'open' : ''}`}
                key={item.question}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className="faq-answer"
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
