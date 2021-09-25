<template>
  <div style="text-align: center">
    <img src="https://c.tenor.com/WqGTNFmFqjkAAAAd/saquontroll-saquonjudge26.gif" alt=""/><br><br>
    <h1>Error!</h1>
    {{ error.message }}  {{ error.statusCode }}
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'BIG PROBLEMS'
    }
  },

  props: {
    error: {
      required: true,
      type: Object
    }
  }
}
</script>

<style>

</style>