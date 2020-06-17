<template>
    <div id="app">
        <!--<Loading></Loading>-->

        <!--插件用法-->
        <button @click="myFn1">显示</button>
        <button @click="myFn2">隐藏</button>
    </div>
</template>

<script>
    // 局部组件
    // import Loading from "./components/Loading"
    //
    // export default {
    //     components: {
    //         Loading
    //     }
    // }

    // import Vue from 'vue'

    // 插件用法
    export default {
        methods: {
            myFn1(){
                // 全局方法
                // Vue.showLoading()

                // 实例方法
                this.$showLoading()
            },
            myFn2(){
                // 全局方法
                // Vue.hideLoading()

                // 实例方法
                this.$hideLoading()
            }
        }
    }


</script>

<style lang="scss">

</style>
