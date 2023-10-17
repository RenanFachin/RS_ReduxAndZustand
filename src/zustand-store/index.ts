// https://github.com/pmndrs/zustand

import { create } from "zustand";
import { api } from "../lib/axios";

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

  // Tipando os métodos (actions)
  play: (albumAndMusicIndex: [number, number]) => void
  next: () => void
  load: () => Promise<void>
}

export const useStore = create<PlayerState>((set, get) => {
  // get -> busca informações que estão armazenadas no estado
  // set -> Atualiza alguma informação do estado


  return {
    // quais informações que vão ser compartilhadas entre os componentes
    discography: null,
    currentAlbumIndex: 0,
    currentMusicVideoIndex: 0,
    isLoading: true,

    load: async () => {
      set({ isLoading: true })

      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            const response = await api.get('/discography/1');
            resolve(response.data);

            set({
              discography: response.data,
              isLoading: false
            })

          } catch (error) {
            reject(error);
          }
        }, 300);
      }
      )
    },

    play: (albumAndMusicIndex: [number, number]) => {
      const [albumIndex, MusicVideoIndex] = albumAndMusicIndex

      // atulizando os valores
      set({
        currentAlbumIndex: albumIndex,
        currentMusicVideoIndex: MusicVideoIndex
      })
    },

    next: () => {
      // retornando dados do estado
      const { currentAlbumIndex, currentMusicVideoIndex, discography } = get()

      const nextMusicVideoIndex = currentMusicVideoIndex + 1
      const nextMusicVideo = discography?.album[currentAlbumIndex].music[nextMusicVideoIndex]

      if (nextMusicVideo) {
        set({
          currentMusicVideoIndex: nextMusicVideoIndex
        })

      } else {
        const nextAlbumIndex = currentAlbumIndex + 1

        const nextAlbum = discography?.album[nextAlbumIndex]

        if (nextAlbum) {

          set({
            currentAlbumIndex: nextAlbumIndex,
            currentMusicVideoIndex: 0
          })

        }
      }
    }
  }
})


export const useCurrentMusicVideo = () => {
  return useStore(state => {
    const { currentAlbumIndex, currentMusicVideoIndex } = state

    const currentAlbum = state.discography?.album[currentAlbumIndex]

    const currentVideo = currentAlbum?.music[currentMusicVideoIndex]


    return { currentAlbum, currentVideo }
  })
}