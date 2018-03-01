<template>
  <div>
      <h1>Edit</h1>
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
     <button type="submit" class="btn btn-primary" @click="editArticle(id)">Edit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      currentArticle: {},
      text: '',
      title: ''
    }
  },
  methods: {
    editArticle (id) {
      //console.log(id)
      let token = localStorage.getItem('token')
      this.$http.put(`article/edit/${id}`, {
          text: this.text,
          title: this.title
      }, {headers: {token: token}})
      .then(response => {
        console.log('ini response', response.data.data)
        //console.log(this.articles)
        this.$router.push('/myarticles')
      })
      .catch(err => {
        console.error(err)
      })
    }
  }
}
</script>

<style>

</style>
