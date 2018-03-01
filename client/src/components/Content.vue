<template>
<div>
<ul class="timeline">
  <li class="timeline-inverted" v-for="article in articles" :key="article._id">
      <div class="timeline-badge warning"><i class="glyphicon glyphicon-credit-card"></i></div>
      <div class="timeline-panel">
        <div class="timeline-heading">
          <h4 class="timeline-title">{{article.title}}</h4>
        </div>
        <div class="timeline-body">
            <p>{{article.text}}</p>
            <p>{{article.date}}</p>
        </div>
      </div>
    </li>
</ul>
</div>
</template>

<script>
export default {
  // props: ['article'],
  data () {
    return {
      articles: []
    }
  },
  created () {
    let token = localStorage.getItem('token')
    this.$http.get('article/', {
      headers: {token: token}})
      .then(response => {
        // console.log(response.data.data)
        response.data.data.forEach(element => {
          this.articles.push({
            title: element.title,
            text: element.text,
            date: element.date
          })
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style>

</style>
