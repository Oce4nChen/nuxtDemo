<template>
  <div i="lists">
  </div>
</template>
<script>

export default {
  layout: 'wap',
  data () {
    return {}
  },
  asyncData (context) {
    // /v1.0/api/cate/product/lists
    // /v1.0/api/product/lists
    // return d.api.data(context, (data, addData, { req, params, query }) => {
    //   let ajaxData = {}
    //   let cateUrl = ''
    //   let name = ''
    //   let listUrl = ''

    //   // let arr = ['product', 'cases', 'news']
    //   name = params.method
    //   if (name === 'case') name = 'cases'
    //   cateUrl = `/v1.0/api/cate/${name}/lists`
    //   listUrl = `/v1.0/api/${name}/lists`
    //   ajaxData.tableId = params.methodId
    //   ajaxData.pageSize = 6
    //   ajaxData.pageNow = params.page || 1
    //   ajaxData[`${name}CateId`] = query.methodId
    //   return d.api.Promise
    //     .all([
    //       d
    //         .get(cateUrl, context)
    //         .send({tableId: params.methodId})
    //         .then(res => {
    //           res.lists.forEach(item => {
    //             let casename = name
    //             if (name === 'cases') {
    //               casename = 'case'
    //             }
    //             item.url = `/lists/${casename}/${params.methodId}?methodId=${item[`${name}CateId`]}`
    //             item.title = item[`${name}CateTitle`]
    //           })
    //           data.menuList = res.lists || []
    //         }),
    //       d.get(listUrl, context)
    //         .send(ajaxData)
    //         .then(res => {
    //           data.dataLists = res
    //         })
    //     ])
    //     .then(() => data)
    // })
  },
  components: {

  },
  methods: {
    // getFirstData () {
    //   let ajaxData = {}
    //   let name = this.$route.params.method
    //   if (name === 'case') name = 'cases'
    //   let listUrl = `/v1.0/api/${name}/lists`
    //   ajaxData.tableId = this.$route.params.methodId
    //   ajaxData.pageSize = 6
    //   ajaxData.pageNow = this.$route.params.page || 1
    //   ajaxData[`${name}CateId`] = this.$route.query.methodId
    //   return d.api.data(this, () => {
    //     return d.get(listUrl)
    //       .send(ajaxData)
    //       .then(res => {
    //         this.dataLists = res
    //       })
    //   })
    // }
  },
  watch: {
    // '$route.fullPath' () {
    //   this.getFirstData()
    // }
  },
  mounted () {

  }

}
</script>
