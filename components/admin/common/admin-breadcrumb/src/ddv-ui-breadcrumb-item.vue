<template>
  <span class="ddvui-breadcrumb__item">
    <span class="ddvui-breadcrumb__item__inner" ref="link"><slot></slot></span><span class="ddvui-breadcrumb__separator"></span>
  </span>
</template>
<script>
export default {
  // name: 'ddvuiBreadcrumbItem',
  props: {
    to: {},
    replace: Boolean
  },
  data () {
    return {
      separator: ''
    }
  },
  mounted () {
    this.separator = this.$parent.separator
    var self = this
    if (this.to) {
      let link = this.$refs.link
      link.addEventListener('click', _ => {
        let to = this.to
        self.replace ? self.$router.replace(to)
          : self.$router.push(to)
      })
    }
  }
}
</script>
