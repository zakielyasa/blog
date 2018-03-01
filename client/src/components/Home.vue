<template>
    <div>
        <Navbar/>
        <MainContent/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import MainContent from '@/components/MainContent'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
      Navbar,
      MainContent,
      Footer
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
