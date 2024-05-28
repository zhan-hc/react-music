import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBannerData, fetchPlayList } from '@/api/home/index'
import { fetchHotDjList, fetchArtistList, fetchNewAlbumList, fetchTopList } from '@/api/song/index'
import { homeDataResKey } from '@/constants'

interface HomeState {
  initStatus: boolean;
  bannerList: any[];
  playList: any[];
  artistList: any[];
  hotDjList: any[];
  newAlbumList: any[];
  topList: any[];
}

const initialState: HomeState = {
  initStatus: false,
  bannerList: [],
  playList: [],
  artistList: [],
  hotDjList: [],
  newAlbumList: [],
  topList: []
};

export const fetchHomeAsync = createAsyncThunk(
  'home/fetchHomeData',
  async () => {
    // 调用 API 获取数据
    const resArr: any = await Promise.all([
      fetchBannerData(),
      fetchPlayList({limit: 8}),
      fetchArtistList({limit: 5}),
      fetchHotDjList({limit: 5}),
      fetchNewAlbumList({limit: 10}),
      fetchTopList()
    ])
    const dataKeyArr = ['bannerList', 'playList', 'artistList', 'hotDjList', 'newAlbumList', 'topList']
    const dataMap:any = {}
    dataKeyArr.forEach((dataKey, i) => {
      const ResultKey = homeDataResKey[dataKey].split('.')
      let data = resArr[i][1]
      ResultKey.forEach((item:any) => {
        data = data[item]
      })
      dataMap[dataKey] = data
    })
    return dataMap
  }
);


const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setInitStatus(state, action) {
      state.initStatus = action.payload
    },
    setBannerData(state, action:PayloadAction<any[]>) {
      state.bannerList = action.payload
    },
    setPlayList(state, action:PayloadAction<any[]>) {
      state.playList = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeAsync.fulfilled, (state, action) => {
      state.initStatus = true
      Object.keys(action.payload).forEach((key) => {
        state[key as keyof HomeState] = action.payload[key]
      })
    })
  }
});

export const { setBannerData, setPlayList } = homeSlice.actions;
export default homeSlice.reducer;
