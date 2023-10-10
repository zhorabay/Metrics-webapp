import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CryptoJS from 'crypto-js';
import axios from 'axios';

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

      const headers = {
        'If-None-Match': thunkAPI.getState().comics.etag || '',
      };

      const params = {
        apikey: apiKey,
        ts: timestamp,
        hash,
      };

      const resp = await axios.get(baseURL, { headers, params });

      if (resp.headers.etag) {
        thunkAPI.dispatch(setEtag(resp.headers.etag));
      }

      thunkAPI.dispatch(setCharacters(resp.data.data.results));

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export default comicsSlice.reducer;
