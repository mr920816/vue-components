import { postDataBase, thousandth, getDataBase, mouseDown } from '@/util/util' // 发送数据函数
export default {
  // 监听器
  watch: {
    getTitle: function () {
      this.init()
    }
  },
  // 方法
  methods: {
    // 初始化操作
    init () {},
    // 按下左键
    mouseDown: mouseDown,
    // 时间格式化
    dateFormat: function (row, column) {
      var date = row[column.property]
      if (date === undefined || date === null) {
        return ''
      }
      return new Date(date).Format('yyyy-MM-dd')
    },
    // 添加%
    addPercent: function (row, column) {
      var val = row[column.property]
      if (val === undefined) {
        return ''
      }
      return `${val}%`
    },
    // 千分位原始方法
    thousandth: thousandth,
    // 千分位formatter方法
    regexNum: function (row, column) {
      var val = row[column.property]
      return thousandth(val)
    },
    // 来源格式化
    originFormat: function (row, column) {
      return row[column.property] === 1 ? '自有' : '购入'
    },
    /**
     * 取消基础请求
     * @param {str} url 请求地址
     * @param {str} id 请求参数(ar单号)
     */
    cancelBase (url, id) {
      postDataBase.call(this, url, {
        masterChainId: id
      }, true).then(res => {
        console.log(res)
        // 操作成功刷新数据
        if (res && res.data.status) {
          this.$emit('refresh')
        }
      })
    },
    // 获取放款详情接口
    async getLoanDetail (url, param) {
      // 显示加载图标
      let res = await getDataBase.call(this, url, param, true)
      return res
    },
    /**
     * 操作类基础请求
     * @param {str} url 请求地址
     * @param {obj} param 请求参数
     */
    postBase (url, param) {
      postDataBase.call(this, url, param, true).then(res => {
        console.log(res)
        // 操作成功刷新数据
        if (res && res.data.status) {
          this.fresh()
        }
      })
    },
    /**
     * 刷新父页面数据
     * this.$parent.fresh()
     */
    fresh () {
      this.$emit('refresh')
    }
  },
  // 过滤器
  filters: {
    /**
     * 时间戳转时间
     */
    dateFormat: function (value) {
      if (value === null || value === undefined || value === '') {
        return ' '
      }
      return new Date(value).Format('yyyy-MM-dd')
    },
    // 来源格式化
    originFormat: function (value) {
      return value === 1 ? '自有' : '购入'
    },
    // 千分位
    regexNum: thousandth,
    // 添加%
    addPercent: function (val) {
      if (val === undefined || val === null || val === '') {
        return ''
      }
      return `${val}%`
    }
  }
}
