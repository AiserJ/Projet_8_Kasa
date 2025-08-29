import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Banniere from '../component/banniere.jsx'

describe('Banniere', () => {
  const IMG1 = '/img/banner.jpg'
  const IMG2 = '/img/other.jpg'
  const TITLE = 'Chez vous, partout et ailleurs'

  it('affiche un h1 avec le titre', () => {
    render(<Banniere image={IMG1} titre={TITLE} />)
    const heading = screen.getByRole('heading', { level: 1, name: TITLE })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveClass('titre')
  })

  it("applique l'image de fond sur la section", () => {
    render(<Banniere image={IMG1} titre={TITLE} />)
    const heading = screen.getByRole('heading', { level: 1, name: TITLE })
    const section = heading.closest('section')
    expect(section).toBeInTheDocument()
    expect(section.style.backgroundImage).toContain(IMG1)
    expect(section).toHaveClass('banniere')
  })

  it('contient la div.overlay', () => {
    render(<Banniere image={IMG1} titre={TITLE} />)
    const heading = screen.getByRole('heading', { level: 1, name: TITLE })
    const section = heading.closest('section')
    const overlay = section?.querySelector('.overlay')
    expect(overlay).toBeInTheDocument()
  })

  it("met à jour l'image de fond quand la prop `image` change (rerender)", () => {
    const { rerender } = render(<Banniere image={IMG1} titre={TITLE} />)
    const heading = screen.getByRole('heading', { level: 1, name: TITLE })
    const section = heading.closest('section')
    expect(section.style.backgroundImage).toContain(IMG1)

    rerender(<Banniere image={IMG2} titre={TITLE} />)
    expect(section.style.backgroundImage).toContain(IMG2)
  })
})