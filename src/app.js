import { Toast } from 'antd-mobile'
import { createLoading } from '@opcjs/zoro-plugin'

export const zoro = {
  config: {
    onError(error) {
      console.error(error)
      // 屏蔽用户登录过期信息，因为当用户登录过期时会跳转自动登录
      if (error.response && error.response.statusCode === 401) return

      if (error.message) {
        Toast.info(error.message, 2)
      }
    },
  },

  plugins: [
    createLoading(),
  ],
}
