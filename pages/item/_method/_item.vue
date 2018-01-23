<template>
  <div i="item">
    <!-- <index-header/>
    <item-product :data="data" :productList="productList" v-if="$route.params.method==='product'"/>
    <item-news :data="data" v-if="$route.params.method==='news'"/>
    <item-cases :data="data" :productList="productList" v-if="$route.params.method==='cases'"/>
    <index-footer/> -->
  </div>
</template>
<script>
// import indexHeader from '~/components/index/header.vue'
// import ItemProduct from '~/components/item/product.vue'
// import ItemCases from '~/components/item/cases.vue'
// import ItemNews from '~/components/item/news.vue'
// import indexFooter from '~/components/index/footer.vue'

export default {
  layout: 'wap',
  data () {
    return {

    }
  },
  asyncData (context) {
    // let url
    // let name
    // let names = 'news'
    // return d.api.data(context, (data, addData, {req, params}) => {
    //   if (context.route.path.includes('news') > 0) {
    //     url = '/v1.0/api/news/one'
    //     name = 'newsId'
    //   }
    //   if (context.route.path.includes('product') > 0) {
    //     url = '/v1.0/api/product/one'
    //     name = 'productId'
    //   }
    //   if (context.route.path.includes('case') > 0) {
    //     url = '/v1.0/api/cases/one'
    //     name = 'casesId'
    //   }
    //   var ajaxData = {}

    //   ajaxData[name] = context.route.params.itemId
    //   return d.api.Promise.all([
    //     d.get(url, context)
    //       .send(ajaxData)
    //       .then(res => {
    //         data.data = res.data || []
    //         context.store.commit('setSiteDescription', res.data.siteDescription || '')
    //         context.store.commit('setSiteKeywords', res.data.siteKeywords || '')
    //         var typeName = params.method === 'case' ? 'cases' : params.method
    //         context.store.commit('setSiteTitle', res.data.siteTitle || res.data[`${typeName}Title`])
    //       }),
    //     d.get('/v1.0/api/product/recommend', context)
    //       .send({
    //         'tableId': 1,
    //         'number': 2
    //       })
    //       .then(res => {
    //         data.productList = res.lists || []
    //       }),
    //     d.get('/v1.0/api/cate/news/lists', context)
    //       .send({tableId: 1})
    //       .then(res => {
    //         res.lists.forEach(item => {
    //           item.url = `/lists/${names}/1?methodId=${item[`${names}CateId`]}`
    //           item.title = item[`${names}CateTitle`]
    //         })
    //         data.menuList = res.lists || []
    //       })
    //   ])
    //     .then(() => data)
    // })
  },
  components: {
    // indexHeader,
    // ItemProduct,
    // ItemCases,
    // indexFooter,
    // ItemNews

  },
  mounted () {
  }
}
</script>
