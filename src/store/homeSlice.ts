import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBannerData, fetchPlayList } from '@/api/home/index'
import { homeDataResKey } from '@/constants'

interface HomeState {
  bannerList: any[];
  playList: any[];
}

const initialState: HomeState = {
  bannerList: [],
  playList: []
};

export const fetchHomeAsync = createAsyncThunk(
  'home/fetchHomeData',
  async () => {
    // 调用 API 获取数据
    const resArr: any = await Promise.all([fetchBannerData(), fetchPlayList()])
    const dataKeyArr = ['bannerList', 'playList']
    const dataMap:any = {}
    dataKeyArr.forEach((dataKey, i) => {
      dataMap[dataKey] = resArr[i][1][homeDataResKey[dataKey]]
    })  
    return dataMap
  }
);


const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setBannerData(state, action:PayloadAction<any[]>) {
      state.bannerList = action.payload
    },
    setPlayList(state, action:PayloadAction<any[]>) {
      state.playList = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeAsync.fulfilled, (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key]
      })
    })
  }
});

export const { setBannerData, setPlayList } = homeSlice.actions;
export default homeSlice.reducer;
