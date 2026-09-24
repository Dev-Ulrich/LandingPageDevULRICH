import { useCallback, useRef, useState } from 'react'
import type { Project } from '../data'
import ImageLightbox from './ImageLightbox'

type ProjectCarouselProps = Pick<Project, 'title' | 'gallery'>

export default function ProjectCarousel({
  title,
  gallery,
}: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const touchStart = useRef<number | null>(null)

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + gallery.length) % gallery.length)
    },
    [gallery.length],
  )
  const closeLightbox = useCallback(() => setLightboxOpen(false), [])

  return (
    <>
      <div
        className="project-carousel"
        role="region"
        aria-roledescription="carrossel"
        aria-label={`Imagens do projeto ${title}`}
        tabIndex={0}
        onTouchStart={(event) => {
          touchStart.current = event.touches[0]?.clientX ?? null
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return
          const distance = event.changedTouches[0]?.clientX - touchStart.current
          if (Math.abs(distance) > 40) goTo(current + (distance < 0 ? 1 : -1))
          touchStart.current = null
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') goTo(current - 1)
          if (event.key === 'ArrowRight') goTo(current + 1)
        }}
      >
        <button
          className="carousel-image-button"
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label={`Ampliar imagem ${current + 1} de ${gallery.length} do projeto ${title}`}
        >
          <img
            src={gallery[current].replace('.webp', '-preview.webp')}
            srcSet={`${gallery[current].replace('.webp', '-preview.webp')} 800w, ${gallery[current]} 1920w`}
            sizes="(max-width: 760px) calc(100vw - 34px), (max-width: 1208px) calc((100vw - 66px) / 2), 571px"
            alt={`${title} captura ${current + 1} de ${gallery.length}`}
            width="1000"
            height="600"
            loading="lazy"
            draggable="false"
          />
        </button>
        <button
          className="carousel-control carousel-control-prev"
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label={`Imagem anterior de ${title}`}
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          className="carousel-control carousel-control-next"
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label={`Próxima imagem de ${title}`}
        >
          <span aria-hidden="true">→</span>
        </button>
        <div className="carousel-status" aria-live="polite">
          {current + 1} / {gallery.length}
        </div>
      </div>
      <ImageLightbox
        title={title}
        gallery={gallery}
        current={current}
        open={lightboxOpen}
        onClose={closeLightbox}
        onChange={goTo}
      />
    </>
  )
}
