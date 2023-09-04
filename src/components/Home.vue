<template lang='pug'>
h1 Home Page
.flex.items-center
  p.mr-4.text-2xl {{ count }}
  button.rounded-full.px-2(@click='inc') +
</template>

<script>
export default {
  data:()=>({

  }),
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    inc(){
      this.$store.commit('increment')
    }
  }
}
</script>

<style>
button{
  background: #7C99AC;
}
</style>