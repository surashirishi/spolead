<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="totalPages"
      @input="execPagination"
    />
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
    }
  },
  methods: {
    execPagination (page) {
      this.$emit('execPagination', page)
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  margin: 24px 0px 36px 0px
}
</style>
