<!--template用于编写当前组件的结构代码-->
<template>
    <div id="app">
        <!--
        <p>{{ msg }}</p>
        <button @click="say">我是按钮</button>
        <One></One>
        <Two></Two>
        <button @click="getName">获取共享数据</button>
        -->

        <p>{{ msg }}</p>

        <router-link to="/one" tag="Button">Go to One</router-link>
        <router-link to="/two" tag="Button">Go to Two</router-link>

        <!--路由出口-->
        <!--路由匹配的组件将会在这里渲染-->
        <router-view></router-view>
    </div>
</template>

<!--script用于编写当前组件的业务代码-->
<script>
    // import One from "./components/One";
    // import Two from "./components/Two";

    export default {
        name: 'App',
        data:function() {
            return {
                msg: "知播渔"
            };
        },
        methods: {
            say(){
                console.log("say");
            },
            getName(){
                console.log(this.$store.state.name);
            }
        },
        components: {
            // One: One,
            // Two: Two
        }
    }
</script>

<!-- style 用于编写当前组件的样式代码-->
<!--注意点：如果要想 style 设置的样式只对当前组件有效，那么需要在 style 后面加上 scoped -->
<style scoped>
    p{
        background-color: pink;
    }
</style>
