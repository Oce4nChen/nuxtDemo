<template >
  <div i="index">
    <!-- <index-header/>
    <index-banner/>
    <index-product :productList='productList'/>
    <index-cases :caseList='caseList'/>
    <index-news :newsList='newsList'/>
    <index-about :pageData='pageData'/>
    <index-footer/> -->
  </div>
</template>

<script>
// import indexHeader from '~/components/index/header.vue'
// import indexBanner from '~/components/index/banner.vue'
// import indexProduct from '~/components/index/product.vue'
// import indexAbout from '~/components/index/about.vue'
// import indexCases from '~/components/index/cases.vue'
// import indexNews from '~/components/index/news.vue'
// import indexFooter from '~/components/index/footer.vue'
export default {
  layout: 'wap',
  head () {
    return {
      titleTemplate: '%s - 首页'
    }
  },
  data () {
    return {}
  },
  asyncData (context) {
    // return d.api.data(context, (data, addData, {req}) => {
    //   return d.api.Promise.all([
    //     d.get('/v1.0/api/product/recommend', context)
    //       .send({
    //         'tableId': 1,
    //         'number': 2
    //       })
    //       .then(res => {
    //         data.productList = res.lists || []
    //       }),
    //     d.get('/v1.0/api/news/lists', context)
    //       .send({
    //         'tableId': 3,
    //         'number': 4
    //       })
    //       .then(res => {
    //         data.newList = res.lists || []
    //       }),
    //     d.get('/v1.0/api/ahout/one?aboutType=about', context)
    //       .then(res => {
    //         data.pageData = res.data || []
    //       }),
    //     d.get('/v1.0/api/cases/recommend', context)
    //       .send({
    //         'tableId': 1,
    //         'number': 3
    //       })
    //       .then(res => {
    //         data.caseList = res.lists || []
    //       }),
    //     d.get('/v1.0/api/news/recommend', context)
    //       .send({
    //         'tableId': 1,
    //         'number': 6
    //       })
    //       .then(res => {
    //         data.newsList = res.lists || []
    //       })
    //   ])
    //     .then(() => data)
    // })
  },
  methods: {},
  components: {
    // indexHeader,
    // indexBanner,
    // indexProduct,
    // indexAbout,
    // indexCases,
    // indexNews,
    // indexFooter
  },
  mounted () {
  }
}
</script>
