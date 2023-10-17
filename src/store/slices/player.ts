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
  isLoading: boolean
}

const initialState: PlayerState = {
  discography: null,
  currentAlbumIndex: 0,
  currentMusicVideoIndex: 0,
  isLoading: true
}

// https://redux-toolkit.js.org/api/createAsyncThunk
// Forma de ter uma action assíncrona
export const loadAlbum = createAsyncThunk(
  'player/load',
  async function handleLoadingAndSaveDataFromMockApi() {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const response = await api.get('/discography/1');
          resolve(response.data);

        } catch (error) {
          reject(error);
        }
      }, 300);
    }
    )
  })



export const playerSlice = createSlice({
  name: 'player',
  initialState,

  reducers: {
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
  },
  extraReducers(builder) {
    builder.addCase(loadAlbum.pending, (state) => {
      state.isLoading = true
    })

    // Executando algo quando a action de fulfilled for executada
    builder.addCase(loadAlbum.fulfilled, (state, action) => {
      state.discography = action.payload

      state.isLoading = false

    })
  }
})


export const player = playerSlice.reducer

export const { play, next } = playerSlice.actions



export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch