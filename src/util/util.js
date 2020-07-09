import storage from '@system.storage'

const util = {
  /**
   * 显示菜单
   */
  showMenu () {
    const prompt = require('@system.prompt')
    const router = require('@system.router')
    const appInfo = require('@system.app').getInfo()
    prompt.showContextMenu({
      itemList: ['保存桌面', '关于', '取消'],
      success: function (ret) {
        switch (ret.index) {
          case 0:
            // 保存桌面
            createShortcut()
            break
          case 1:
            // 关于
            router.push({
              uri: '/pages/About',
              params: {
                name: appInfo.name,
                icon: appInfo.icon
              }
            })
            break
          case 2:
            // 取消
            break
          default:
            prompt.showToast({
              message: 'error'
            })
        }
      }
    })
  },

  /**
   * 创建桌面图标
   * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
   */
  createShortcut () {
    const prompt = require('@system.prompt')
    const shortcut = require('@system.shortcut')
    shortcut.hasInstalled({
      success: function (ret) {
        if (ret) {
          prompt.showToast({
            message: '已创建桌面图标'
          })
        } else {
          shortcut.install({
            success: function () {
              prompt.showToast({
                message: '成功创建桌面图标'
              })
            },
            fail: function (errmsg, errcode) {
              prompt.showToast({
                message: `${errcode}: ${errmsg}`
              })
            }
          })
        }
      }
    })
  },

  /**
   * 获取浏览器搜索引擎
   */
  getBrowserSearch (keyword) {
    const url = {
      // 百度搜索
      'baidu': `https://m.baidu.com/s?wd=${keyword}`,
      // 360搜索
      'so': `https://m.so.com/s?q=${keyword}`,
      // 搜狗搜索
      'sogou': `https://m.sogou.com/web/searchList.jsp?keyword=${keyword}`,
      // 神马搜索
      'shenma': `https://m.sm.cn/s?q=${keyword}`
    }

    return new Promise((resolve, reject) => {
      storage.get({
        key: 'search',
        success: function(data) {
          const ret = url[data || 'baidu']
          resolve(ret)
        },
        fail(data, code) {
          reject({ data, code })
        }
      })
    })
  }
}

export default util
