- 小程序 诞生于react大红之后
  MVVM 组件 vant
  数据驱动界面
  Vue 语法简洁
- Vue 与小程序共异
1. 思想
  网页，new Vue({
    el:'#app'
  })
2. 组件
  Vue.component('',{
    template:'',
    data(){
      return {

      }
    }
  })

- mvvm 不需要 DOM 因为 DOM很低效
但是要找元素怎么办？ ref 属性相当于id
- 数组
Math.random()<0.5

- sort(() => 0.5 - Math.random())
这个可以作为调换的依据

- 组件的思想
  Vue.component('Heroes',{
    props:{
      参数： 参数的约束
    },
    template:`
    `
  })
  组件化思维
  <Heroes :heros = "heroes"/>

  小程序 src="{{item.src}}"
  Vue    :src = "item.src"
  props
  ref = "allAudio" this.$refs.allAudio
  wx:for v-for