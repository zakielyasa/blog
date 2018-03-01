<template>
<div>
    <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-3">Your Article is Here!</h1>
  </div>
  <a @click="gotoHome" style="text-align: left">Back</a>
</div>
<div class="container">

    <ul class="collection">
      <li class="collection-item"><div v-for="article in articles" :key="article">
      <h4>{{article.title}}</h4>
      <hr>
      <h5>{{article.text}}</h5>
      <p>Created: {{article.date}}</p>
      <button class="btn btn-primary" @click="deleteArticle(article._id)">Delete</button>
      <button class="btn btn-primary" @click="editArticle(article._id)">Edit</button>
     </div></li>
    </ul>
      <router-view v-on:EditArticle="editArticle()"></router-view>
        <br>
            <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input id="input_text" type="text" placeholder="Title" v-model="title">
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea" placeholder="Text" v-model="text"></textarea>
          </div>
        </div>
     <button type="submit" class="btn btn-primary" @click="createArticle">Create new article</button>
      </form>
    </div>
</div>
</div>
</template>

<script>

export default {
  data () {
    return {
      articles: [],
      showEdit: false,
      title: '',
      text: '',
      date: ''
    }
  },
  methods: {
    deleteArticle (id) {
        console.log('INI ID', id)
    let token = localStorage.getItem('token')
      this.$http.delete(`article/delete/${id}`, {
          headers: {token: token}
      })
      .then(response => {
          this.articles.forEach((element, index) => {
              if(this.articles.id === id){
                  this.articles.splice(index, 1)
              }
          })
          let token = localStorage.getItem('token')
        this.$http.get('article/me', {
            headers: {token: token}})
        .then(response => {
            this.articles = response.data
            //console.log('response from api : ', response)
            //console.log(response.data.data)
            // response.data.forEach(element => {
            // this.articles.push({
            //   id: element._id,
            //   title: element.title,
            //   text: element.text,
            //   date: element.date
            // })
          })
          console.log(this.articles)
        })
        .catch(err => {
            console.log(err)
        }) 
    },
    editArticle (id) {
        //console.log(id)
      this.$router.push(`/myarticles/edit/${id}`)
    },
    createArticle () {
    let token = localStorage.getItem('token')
        this.$http.post('article/create', {
            title: this.title,
            text: this.text,
            date: `Created: ${new Date(Date.now()).toLocaleDateString()}`
        }, {headers: {token: token}})
        .then(response => {
            console.log('INI RESPONSE CREATE',response.data.data._id)
            this.articles.push(response.data.data)
        })
        .catch(err => {
            console.error(err)
        })
    },
    gotoHome () {
        this.$router.push('/home')
    }
  },
  created () {
    let token = localStorage.getItem('token')
    let arr = []
        this.$http.get('article/me', {
            headers: {token: token}})
        .then(response => {
            //console.log('response from api : ', response)
            //console.log(response.data.data)
            response.data.forEach(element => {
            arr.push({
              _id: element._id,
              title: element.title,
              text: element.text,
              date: element.date
            })
              //console.log('artikel', this.articles._id)
              this.articles = arr
          })
          //console.log(this.articles)
        })
        .catch(err => {
            console.log(err)
      }) 
  },
}
</script>

<style>

</style>
