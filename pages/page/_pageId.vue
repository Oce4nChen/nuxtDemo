<template>
  <div i="page">
    <!-- <index-header/>
    <index-banner/>
    <slide-menu :lists="menu"/>
    <page-about :data="pageData"/>
    <index-footer/> -->
  </div>
</template>
<script>
// import indexHeader from '~/components/index/header.vue'
// import indexBanner from '~/components/index/banner.vue'
// import SlideMenu from '~/components/com/slideMenu.vue'
// import PageAbout from '~/components/page/about.vue'
// import indexFooter from '~/components/index/footer.vue'

export default {
  layout: 'wap',
  data () {
    return {

    }
  },
  asyncData (context) {
    // return d.api.data(context, (data, addData, {req}) => {
    //   return d.api.Promise.all([
    //     d.get('/v1.0/api/ahout/one', context)
    //       .query({aboutType: context.route.params.pageId})
    //       .then(res => {
    //         data.pageData = res.data || []
    //       }),
    //     d.get('/v1.0/api/about/lists', context)
	  //     .then(res => {
	  //       res.lists.forEach((item, index) => {
	  //         item.title = item.aboutTitle
	  //         item.url = `/page/${item.aboutType}`
	  //       })
	  //       if (context.route.params.pageId !== 'message' && context.route.params.pageId !== 'contact') {
	  //         res.lists.length = 3
	  //       }
	  //       data.menu = res.lists
	  //     })
    //   ])
    //     .then(() => data)
    // })
  },
  components: {
    // indexHeader,
    // indexBanner,
    // SlideMenu,
    // indexFooter,
    // PageAbout

  },

  mounted () {
  }
}
</script>
