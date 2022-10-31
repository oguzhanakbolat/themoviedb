import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAverageService, getBestService, getKidsService, getPopularityService } from './dataService';

const initialState = {
	list: [],
	favorites: [],
	loading: false,
	error: '',
	message: ''
};

export const getMovieAsync = createAsyncThunk(
	'data/getMovieAsync',
	async () => {
		const res = await Promise.all([
            getPopularityService(),
            getAverageService(),
            getBestService(),
            getKidsService()
        ]);

		return {
            popularity: res[0].results,
            average: res[1].results,
            best: res[2].results,
            kids: res[3].results
        };
	}
);

export const getFavoriteAsync = createAsyncThunk(
	'data/getFavoriteAsync',
	async () => {
		const res = await AsyncStorage.getItem('favorites');
		return JSON.parse(res);
	}
);

export const dataSlice = createSlice({
	name: 'data',

	initialState,

	reducers: {
		addFavorite: (state, action) => {
			const list = [...state.favorites];
			list.indexOf(action.payload) === -1 ? list.push(action.payload) : list.splice(list.indexOf(action.payload), 1);
			state.favorites = list;
			AsyncStorage.setItem('favorites', JSON.stringify(list));
		},
		setLoading: (state ) => {
			state.loading = !state.loading;
		}
	},

	extraReducers: (builder) => {
		builder.addCase(getMovieAsync.pending, state => {
			state.loading = true;
		});

		builder.addCase(getMovieAsync.fulfilled, (state, action) => {
            state.list = action.payload;
			state.loading = false;
		});

		builder.addCase(getMovieAsync.rejected, state => {
			state.loading = false;
		});

		builder.addCase(getFavoriteAsync.fulfilled, (state, action) => {
            state.favorites = action.payload;
		});

	},
});

export const { addFavorite, setLoading } = dataSlice.actions;
export default dataSlice.reducer;
