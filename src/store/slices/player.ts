import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../lib/axios';
import { store } from '..';
import { useDispatch } from 'react-redux';

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

// https://redux-toolkit.js.org/api/createAsyncThunk
// Forma de ter uma action assíncrona
export const loadAlbum = createAsyncThunk(
  'player/load',
  function handleLoadingAndSaveDataFromMockApi() {
    setTimeout(() => {
      api.get('/discography/1').then(response => {
        console.log(response.data)
        // dispatch(start(response.data))
      })
    }, 500);
  }
)



export const playerSlice = createSlice({
  name: 'player',
  initialState,

  reducers: {
    // Action para carregar os dados da API
    start: (state, action: PayloadAction<Discography>) => {
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



export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch