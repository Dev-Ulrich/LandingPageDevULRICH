import { projects, github } from '../data'
import ProjectCarousel from './ProjectCarousel'

export default function Projects() {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Trabalho na prática</div>
            <h2>Projetos selecionados</h2>
          </div>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <ProjectCarousel
                title={project.title}
                gallery={project.gallery}
              />
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver repositório <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <a
          className="all-projects"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explorar todos os repositórios no GitHub ↗
        </a>
      </div>
    </section>
  )
}
