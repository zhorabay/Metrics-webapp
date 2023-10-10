import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CryptoJS from 'crypto-js';

const initialState = {
  characters: [],
  etag: null,
};

const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setEtag: (state, action) => {
      state.etag = action.payload;
    },
  },
});

export const { setCharacters, setEtag } = comicsSlice.actions;

const baseURL = 'https://gateway.marvel.com/v1/public/characters';
const apiKey = '6a964f78112bffd6c6bd1a0a964c0614';
const privateKey = '7d8ffe32b5a73d87ee5f56d8045890361b51ff3d';

export const getCharacters = createAsyncThunk(
  'comics/getCharacters',
  async (_, thunkAPI) => {
    try {
      const timestamp = new Date().getTime().toString();
      const hashInput = timestamp + privateKey + apiKey;
      const hash = CryptoJS.MD5(hashInput).toString();

      const headers = new Headers({
        'If-None-Match': thunkAPI.getState().comics.etag || '',
      });

      const params = new URLSearchParams({
        apikey: apiKey,
        ts: timestamp,
        hash,
      });

      const url = new URL(baseURL);
      url.search = params.toString();

      const resp = await fetch(url, { method: 'GET', headers });

      if (resp.headers.has('etag')) {
        thunkAPI.dispatch(setEtag(resp.headers.get('etag')));
      }

      const data = await resp.json();
      thunkAPI.dispatch(setCharacters(data.data.results));

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export default comicsSlice.reducer;
