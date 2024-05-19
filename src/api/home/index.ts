import { Get } from '@/services/index'
/**
 * 
 * @param params 
 * @link https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=banner
 * @returns 
 */
export const fetchBannerData = (params: any = {}) => Get('/banner', params)
/**
 * 推荐歌单
 * @param params 
 * @link https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e6%8e%a8%e8%8d%90%e6%ad%8c%e5%8d%95
 * @returns 
 */
export const fetchPlayList = (params: any = {}) => Get('/personalized', params)