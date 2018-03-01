<template>
  <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
                <li class="uk-active"><a href="">{{routeSatu}}</a></li>
                    </ul>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav">
                <li><a @click="logout">{{routeTiga}}</a></li>
            </ul>
        </div>
                </div>
            </nav>
</template>

<script>
export default {
    data () {
        return{
            routeSatu: 'Home',
            routeDua: 'Article',
            routeTiga: 'Logout'
        }
    },
    methods: {
        logout () {
            localStorage.clear()
        }
    }
}
</script>

<style>

</style>
