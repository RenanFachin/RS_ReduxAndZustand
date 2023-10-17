import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Music {
  id: string;
  title: string;
  duration: string;
}

interface Album {
  id: number;
  title: string;
  music: Array<Music>;
}

interface Discography {
  id: number;
  album: Array<Album>;
}

export interface PlayerState {
  discography: Discography | null
  currentAlbumIndex: number
  currentMusicVideoIndex: number
}

const initialState: PlayerState = {
  discography: null,
  currentAlbumIndex: 0,
  currentMusicVideoIndex: 0
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,

  reducers: {
    // Action para carregar os dados da API
    start : (state, action: PayloadAction<Discography>) => {
      state.discography = action.payload
    },
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentAlbumIndex = action.payload[0]
      state.currentMusicVideoIndex = action.payload[1]
    },
    next: (state) => {
      const nextMusicVideoIndex = state.currentMusicVideoIndex + 1
      const nextMusicVideo = state.discography?.album[state.currentAlbumIndex].music[nextMusicVideoIndex]

      if (nextMusicVideo) {
        state.currentMusicVideoIndex = nextMusicVideoIndex
      } else {
        const nextAlbumIndex = state.currentAlbumIndex + 1

        const nextAlbum = state.discography?.album[nextAlbumIndex]

        if (nextAlbum) {
          state.currentAlbumIndex = nextAlbumIndex
          state.currentMusicVideoIndex = 0
        }
      }
    }
  }
})


export const player = playerSlice.reducer

export const { play, next, start } = playerSlice.actions