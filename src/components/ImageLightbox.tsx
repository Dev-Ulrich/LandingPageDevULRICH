import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

type ImageLightboxProps = {
  title: string
  gallery: string[]
  current: number
  open: boolean
  onClose: () => void
  onChange: (index: number) => void
}

export default function ImageLightbox({
  title,
  gallery,
  current,
  open,
  onClose,
  onChange,
}: ImageLightboxProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const trigger =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null
    const root = document.getElementById('root')
    const previousInert = root?.inert ?? false
    if (root) root.inert = true
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      if (root) root.inert = previousInert
      trigger?.focus()
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault()
        onChange(current + (event.key === 'ArrowLeft' ? -1 : 1))
      }
      if (event.key === 'Tab') {
        const buttons =
          panelRef.current?.querySelectorAll<HTMLButtonElement>('button')
        if (!buttons?.length) return
        const first = buttons[0]
        const last = buttons[buttons.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [current, onChange, onClose, open])

  if (!open) return null

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${title}, imagem ampliada`}
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div ref={panelRef} className="lightbox-panel">
        <button
          ref={closeButtonRef}
          className="lightbox-close"
          type="button"
          onClick={onClose}
          aria-label="Fechar visualização ampliada"
        >
          ×
        </button>
        <img
          src={gallery[current]}
          alt={`${title} captura ampliada ${current + 1} de ${gallery.length}`}
          width="1600"
          height="960"
        />
        <button
          className="lightbox-control lightbox-prev"
          type="button"
          onClick={() => onChange(current - 1)}
          aria-label="Imagem anterior"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          className="lightbox-control lightbox-next"
          type="button"
          onClick={() => onChange(current + 1)}
          aria-label="Próxima imagem"
        >
          <span aria-hidden="true">→</span>
        </button>
        <div className="lightbox-status" aria-live="polite">
          {current + 1} / {gallery.length}
        </div>
      </div>
    </div>,
    document.body,
  )
}
