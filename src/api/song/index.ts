import { Get } from '@/services/index'
/**
 * 歌手分类列表
 * @param params 
 * @link https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e6%ad%8c%e6%89%8b%e5%88%86%e7%b1%bb%e5%88%97%e8%a1%a8
 * @returns 
 */
export const fetchArtistList = (params: any = {}) => Get('/artist/list', params)

/**
 * 电台 - 最热主播榜
 * @param params 
 * @link https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e7%94%b5%e5%8f%b0-%e6%9c%80%e7%83%ad%e4%b8%bb%e6%92%ad%e6%a6%9c
 * @returns 
 */
export const fetchHotDjList = (params: any = {}) => Get('/dj/toplist/popular', params)

/**
 * 数字专辑-新碟上架
 * @param params 
 * @link https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e6%95%b0%e5%ad%97%e4%b8%93%e8%be%91-%e6%96%b0%e7%a2%9f%e4%b8%8a%e6%9e%b6
 * @returns 
 */
export const fetchNewAlbumList = (params: any = {}) => Get('/album/list', params)
/**
 * 所有榜单
 * @param params 
 * @link https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e6%89%80%e6%9c%89%e6%a6%9c%e5%8d%95
 * @returns 
 */
export const fetchTopList = (params: any = {}) => Get('/toplist/detail', params)