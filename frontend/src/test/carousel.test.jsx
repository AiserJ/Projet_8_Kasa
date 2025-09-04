import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Carousel from '../component/slidershow.jsx'

const pics = [
  '/img/one.jpg',
  '/img/two.jpg',
  '/img/three.jpg',
]

function getImg() {
  return screen.getByRole('img')
}

describe('Carousel', () => {
  beforeEach(() => {
  })

  it('affiche la première image au chargement', () => {
    render(<Carousel pictures={pics} title="Appartement cosy" />)
    expect(getImg()).toHaveAttribute('src', pics[0])
    expect(screen.getByText('1/3')).toBeInTheDocument()
  })

  it('bouton "Suivant" affiche l’image suivante et met à jour le compteur', async () => {
    const user = userEvent.setup()
    render(<Carousel pictures={pics} title="Appartement cosy" />)

    const nextBtn = screen.getByRole('button', { name: /suivant/i })
    await user.click(nextBtn)

    expect(getImg()).toHaveAttribute('src', pics[1])
    expect(screen.getByText('2/3')).toBeInTheDocument()
  })

  it('bouton "Précédent" revient en arrière et met à jour le compteur', async () => {
    const user = userEvent.setup()
    render(<Carousel pictures={pics} title="Appartement cosy" />)

    const nextBtn = screen.getByRole('button', { name: /suivant/i })
    const prevBtn = screen.getByRole('button', { name: /précédent/i })

    await user.click(nextBtn)
    expect(getImg()).toHaveAttribute('src', pics[1])
    expect(screen.getByText('2/3')).toBeInTheDocument()

    await user.click(prevBtn)
    expect(getImg()).toHaveAttribute('src', pics[0])
    expect(screen.getByText('1/3')).toBeInTheDocument()
  })

  it('boucle (clic "Suivant" depuis la dernière revient à la première)', async () => {
    const user = userEvent.setup()
    render(<Carousel pictures={pics} title="Appartement cosy" />)

    const nextBtn = screen.getByRole('button', { name: /suivant/i })
    await user.click(nextBtn) // 2/3
    await user.click(nextBtn) // 3/3
    await user.click(nextBtn) // → boucle → 1/3

    expect(getImg()).toHaveAttribute('src', pics[0])
    expect(screen.getByText('1/3')).toBeInTheDocument()
  })

  it('boucle (clic "Précédent" depuis la première va à la dernière)', async () => {
    const user = userEvent.setup()
    render(<Carousel pictures={pics} title="Appartement cosy" />)

    const prevBtn = screen.getByRole('button', { name: /précédent/i })
    await user.click(prevBtn) // → boucle arrière → 3/3

    expect(getImg()).toHaveAttribute('src', pics[2])
    expect(screen.getByText('3/3')).toBeInTheDocument()
  })

  it('masque tout le contrôle si une seule image (pas de boutons, pas de compteur)', () => {
    render(<Carousel pictures={[pics[0]]} title="Single" />)
    expect(getImg()).toHaveAttribute('src', pics[0])
    expect(screen.queryByRole('button', { name: /suivant/i })).toBeNull()
    expect(screen.queryByRole('button', { name: /précédent/i })).toBeNull()
    expect(screen.queryByText(/\d+\/\d+/)).toBeNull()
  })

  it.skip('navigation clavier: ArrowRight/ArrowLeft changent de slide', async () => {
    const user = userEvent.setup()
    render(<Carousel pictures={pics} title="Clavier" />)

    // le conteneur doit être focusable (tabIndex={0})
    const container = screen.getByTestId('carousel-container')
    container.focus()

    await user.keyboard('{ArrowRight}')
    expect(getImg()).toHaveAttribute('src', pics[1])
    expect(screen.getByText('2/3')).toBeInTheDocument()

    await user.keyboard('{ArrowLeft}')
    expect(getImg()).toHaveAttribute('src', pics[0])
    expect(screen.getByText('1/3')).toBeInTheDocument()
  })
})