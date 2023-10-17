import { beforeEach, describe, expect, it } from 'vitest'
import { useStore as store } from '.'

const discography = {
  id: 1,
  album: [
    {
      id: 1,
      title: 'One More Time...',
      music: [
        { id: '7MI3buZedOw', title: 'EDGING', duration: '02:45' },
        { id: 'fSKQRDq3RkM', title: 'ONE MORE TIME', duration: '03:27' },
      ]
    },
    {
      id: 2,
      title: 'Nine',
      music: [
        { id: '4cbSPNZryzo', title: 'Darkside', duration: '03:03' },
        { id: 'ZQ-NycSnGsc', title: 'Generational Divide', duration: '00:50' }
      ]
    },
  ],
}

// Colocando fora para que ele busque os dados iniciais, ou seja,      
//discography: null,
// currentAlbumIndex: 0,
// currentMusicVideoIndex: 0,
// isLoading: true,
const initialState = store.getState()

describe('zustand store', () => {

  // executando algo antes de cada teste
  beforeEach(() => {
    store.setState(initialState)
  })

  it('should be able to play', () => {


    const { play } = store.getState()

    play([1, 2])

    const { currentAlbumIndex, currentMusicVideoIndex } = store.getState()

    expect(currentAlbumIndex).toEqual(1)
    expect(currentMusicVideoIndex).toEqual(2)
  })


  it('should be able to play next video automatically', () => {

    store.setState({ discography })

    const { next } = store.getState()

    next()

    const { currentAlbumIndex, currentMusicVideoIndex } = store.getState()

    expect(currentAlbumIndex).toEqual(0)
    expect(currentMusicVideoIndex).toEqual(1)
  })

  it('should be able to jump to next album automatically', () => {

    store.setState({ discography })

    const { next } = store.getState()

    store.setState({ currentMusicVideoIndex: 1 })

    next()

    const { currentAlbumIndex, currentMusicVideoIndex } = store.getState()

    expect(currentAlbumIndex).toEqual(1)
    expect(currentMusicVideoIndex).toEqual(0)
  })

  it('should not update the current album and musicVideo index if there is no next musicVideo available ', () => {

    store.setState({ discography })

    const { next } = store.getState()

    store.setState({ currentMusicVideoIndex: 1, currentAlbumIndex: 1 })

    next()

    const { currentAlbumIndex, currentMusicVideoIndex } = store.getState()

    expect(currentAlbumIndex).toEqual(1)
    expect(currentMusicVideoIndex).toEqual(1)
  })
})