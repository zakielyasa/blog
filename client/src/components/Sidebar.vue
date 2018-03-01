<template>
    <div class="col-md-3" id="sidebar">
      <div class="col-md-12" id="sticky-sidebar" style="align: center;">
        <h1><a @click="myArticle">Your Article</a></h1>
      </div>
      <div class="col-md-12" id="sticky-sidebar" style="align: center;">
        <img src="https://media.giphy.com/media/EH4bcnxvX1b5m/giphy.gif" alt="">
      </div>
      <div class="col-md-12" id="sticky-sidebar" style="align: center;">
        <img src="https://media.giphy.com/media/EH4bcnxvX1b5m/giphy.gif" alt="">
      </div>
      <div class="col-md-12" id="sticky-sidebar" style="align: center;">
        <img src="https://media.giphy.com/media/EH4bcnxvX1b5m/giphy.gif" alt="">
      </div>
      <div class="col-md-12" id="sticky-sidebar" style="align: center;">
        <img src="https://media.giphy.com/media/EH4bcnxvX1b5m/giphy.gif" alt="">
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      myarticles: []
    }
  },
  methods: {
    myArticle () {
      this.$router.push('/myarticles')
    }
  },
  components: {
  }
}
</script>

<style>
#sidebar{
    background-color: #f4f442;
}
</style>
