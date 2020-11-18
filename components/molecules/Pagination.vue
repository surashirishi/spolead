<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="6"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 1,
      length: 6
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  margin: 24px 0px 36px 0px
}
</style>
