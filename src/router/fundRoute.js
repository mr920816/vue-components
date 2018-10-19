const routes = [
  {
    path: '/fund',
    component: () =>
      import('@/layout/Fund'),
    children: [{
      path: '/',
      redirect: 'index'
    },
    {
      path: 'index',
      name: 'indexFund',
      meta: {
        title: '登录首页', // 名称
        requireAuth: true // 需要登录验证
      },
      component: () => import(/* webpackChunkName: 'Fund' */ '@/page/funder/outSource/Index')
    },
    {
      path: 'loan',
      name: 'loan',
      component: () => import(/* webpackChunkName: 'Fund' */ '@/page/funder/work/LoanList'),
      meta: {
        title: '放款处理', // 名称
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'loanreject',
      name: 'loanreject',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/work/LoanRejectList'),
      meta: {
        title: '拒绝放款查询', // 名称
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'loaned',
      name: 'loaned',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/work/LoanedList'),
      meta: {
        title: '已放款查询', // 名称
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'loanfinish',
      name: 'loanfinish',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/work/LoanFinishList'),
      meta: {
        title: '已完结查询', // 名称
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'cstLoanFee',
      name: 'cstLoanFee',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/custInformation/LoanFeeList'),
      meta: {
        title: '客户利率维护', // 名称
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'lolanuserinfo',
      name: 'lolanuserinfo',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/UserInfo'),
      meta: {
        title: '基础信息', // 名称
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'ordersearch',
      name: 'ordersearchFund',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/auxiliarySelect/OrderSearch'),
      meta: {
        title: '订单查询', // 名称
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'acceptsearch',
      name: 'acceptsearchFund',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/auxiliarySelect/AcceptanceSearch'),
      meta: {
        title: '验收单查询', // 名称
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'mybill',
      name: 'mybillFund',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/auxiliarySelect/MyBill'),
      meta: {
        title: '对账单查询', // 名称
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'mypayer',
      name: 'mypayerFund',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/auxiliarySelect/MyPayer'),
      meta: {
        title: '付款单查询', // 名称
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'myinvoice',
      name: 'myinvoiceFund',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/auxiliarySelect/MyInvoice'),
      meta: {
        title: '发票查询', // 名称
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'mysubmit',
      name: 'mysubmitFund',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/auxiliarySelect/MySubmit'),
      meta: {
        title: '结报查询', // 名称
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'myarrear',
      name: 'myarrearFund',
      component: () =>
        import(/* webpackChunkName: 'Fund' */ '@/page/funder/auxiliarySelect/MyArrear'),
      meta: {
        title: '欠款查询', // 名称
        requireAuth: true // 需要登录验证
      }
    },
    {
      path: 'crc',
      name: 'crc',
      meta: {
        title: '中征网查询', // 名称
        requireAuth: true // 需要登录验证
      },
      component: () => import(/* webpackChunkName: 'Fund' */ '@/page/funder/outSource/CRC')
    },
    {
      path: 'creditloan',
      name: 'creditloan',
      meta: {
        title: '信用放款处理', // 名称
        requireAuth: true // 需要登录验证
      },
      component: () => import(/* webpackChunkName: 'Fund' */ '@/page/funder/creditFinance/CreditLoan')
    },
    {
      path: 'creditreject',
      name: 'creditreject',
      meta: {
        title: '信用拒绝查询', // 名称
        requireAuth: true // 需要登录验证
      },
      component: () => import(/* webpackChunkName: 'Fund' */ '@/page/funder/creditFinance/CreditReject')
    },
    {
      path: 'creditloaned',
      name: 'creditloaned',
      meta: {
        title: '信用已放款处理', // 名称
        requireAuth: true // 需要登录验证
      },
      component: () => import(/* webpackChunkName: 'Fund' */ '@/page/funder/creditFinance/CreditLoaned')
    },
    {
      path: 'creditend',
      name: 'creditend',
      meta: {
        title: '信用已完结查询', // 名称
        requireAuth: true // 需要登录验证
      },
      component: () => import(/* webpackChunkName: 'Fund' */ '@/page/funder/creditFinance/CreditEnd')
    }
    ]
  }
]
export default routes
