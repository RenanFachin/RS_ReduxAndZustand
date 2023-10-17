// https://vitest.dev/guide/
import { describe, expect, it } from 'vitest'
import { player as reducer, play, next } from './player'


const exampleState = {
  discography: {
    album: [
      {
        id: '1',
        title: 'One More Time...',
        music: [
          { id: '7MI3buZedOw', title: 'EDGING', duration: '02:45' },
          { id: 'fSKQRDq3RkM', title: 'ONE MORE TIME', duration: '03:27' },
        ]
      },
      {
        id: '2',
        title: 'Nine',
        music: [
          { id: '4cbSPNZryzo', title: 'Darkside', duration: '03:03' },
          { id: 'ZQ-NycSnGsc', title: 'Generational Divide', duration: '00:50' }
        ]
      },
    ],
  },
  currentAlbumIndex: 0,
  currentMusicVideoIndex: 0
}

describe('player slice', () => {
  it('should be able to play', () => {


    const state = reducer(exampleState, play([1, 2]))

    expect(state.currentAlbumIndex).toEqual(1)
    expect(state.currentMusicVideoIndex).toEqual(2)
  })


  it('should be able to play next video automatically', () => {

    const state = reducer(exampleState, next())

    expect(state.currentAlbumIndex).toEqual(0)
    expect(state.currentMusicVideoIndex).toEqual(1)
  })

  it('should be able to jump to next album automatically', () => {

    const state = reducer({
      ...exampleState,
      currentMusicVideoIndex: 1
    }, next())

    expect(state.currentAlbumIndex).toEqual(1)
    expect(state.currentMusicVideoIndex).toEqual(0)
  })

  it('should not update the current album and musicVideo index if there is no next musicVideo available ', () => {

    const state = reducer({
      ...exampleState,
      currentMusicVideoIndex: 1,
      currentAlbumIndex: 1,
    }, next())

    expect(state.currentAlbumIndex).toEqual(1)
    expect(state.currentMusicVideoIndex).toEqual(1)
  })
})