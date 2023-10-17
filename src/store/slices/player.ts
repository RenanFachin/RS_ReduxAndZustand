import { createSlice } from '@reduxjs/toolkit'

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    discography: {
      album: [
        {
          id: '1',
          title: 'One More Time...',
          music: [
            { id: '7MI3buZedOw', title: 'EDGING', duration: '02:45' },
            { id: 'fSKQRDq3RkM', title: 'ONE MORE TIME', duration: '03:27' },
            { id: 'LUEYNuVeA9Y', title: 'DANCE WITH ME', duration: '04:09' },
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
        {
          id: '3',
          title: 'California',
          music: [
            { id: 'lic0oCDMfwk', title: 'Bored To Death', duration: '04:03' },
            { id: 'krpm0v_486k', title: 'She is Out Of Her Mind', duration: '02:41' },
            { id: 'czAKwUT-s_Q', title: 'Home Is Such A Lonely Place', duration: '03:18' },

          ]
        },
        {
          id: '4',
          title: 'Neighborhoods',
          music: [
            { id: 'YpYhGdrknlA', title: 'Up All Night', duration: '03:43' },
            { id: 'CuNSn1z6ric', title: "Heart's All Gone", duration: '03:25' },
            { id: 'H86730HjLVA', title: 'After Midnight', duration: '04:01' },

          ]
        },
        {
          id: '5',
          title: 'Blink-182',
          music: [
            { id: '4kMZ23T9VHE', title: 'Feeling This', duration: '03:08' },
            { id: 's1tAYmMjLdY', title: 'I Miss You', duration: '03:49' },
            { id: 'XrTZT49u0kM', title: 'Down', duration: '03:16' },
            { id: 'CvtJVku_mJw', title: 'Always', duration: '04:11' }
          ]
        },
        {
          id: '6',
          title: 'Take Off Your Pants and Jacket',
          music: [
            { id: 'vVy9Lgpg1m8', title: 'First Date', duration: '03:31' },
            { id: 'z7hhDINyBP0', title: 'The Rock Show', duration: '03:07' },
            { id: 'k1BFHYtZlAU', title: 'Stay Together For The Kids', duration: '03:57' }
          ]
        },
        {
          id: '7',
          title: 'Enema of the State',
          music: [
            { id: 'K7l5ZeVVoCA', title: "What's My Age Again?", duration: '02:26' },
            { id: '9Ht5RZpzPqw', title: 'All The Small Things', duration: '02:50' },
            { id: '2MRdtXWcgIw', title: "Adam's Song", duration: '04:13' }
          ]
        },
        {
          id: '8',
          title: 'Dude Ranch',
          music: [
            { id: 'sT0g16_LQaQ', title: "Dammit", duration: '02:50' },
            { id: 'I6kfin-UeAQ', title: 'Josie', duration: '03:35' }
          ]
        },
        {
          id: '9',
          title: 'Cheshire Cat',
          music: [
            { id: 'kZs88WWGDoo', title: "M+M's", duration: '02:39' }
          ]
        },
      ],
    }
  },

  reducers: {}
})


export const player = playerSlice.reducer