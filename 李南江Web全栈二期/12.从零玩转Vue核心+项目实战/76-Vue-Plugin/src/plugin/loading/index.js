import Loading from "./Loading"

export default {
    // 注意点：如果要将一个组件封装成一个插件，那么必须提供一个 install 方法，那么必须在 install 方法中注册当前的这个组件
    install: function (Vue, Options) {
        // 1.根据我们的组件生成一个构造函数
        let LoadingConstructor = Vue.extend(Loading)
        // 2.根据构造函数创建实例对象
        let LoadingInstance = new LoadingConstructor()
        // 3.随便创建一个标签（元素）
        let oDiv = document.createElement("div")
        // 4.将创建好的标签添加到界面上
        document.body.appendChild(oDiv);
        // 5.将创建好的实例对象挂载到创建好的元素上
        LoadingInstance.$mount(oDiv);

        console.log(Options);
        console.log(LoadingInstance.title);

        // 添加初始化
        if(Options && Options.title !== null && Options.title !== undefined){
            LoadingInstance.title = Options.title
        }

        console.log(Options);
        console.log(LoadingInstance.title);

        // 添加全局方法
        Vue.showLoading = function() {
            LoadingInstance.isShow = true
        }
        Vue.hideLoading = function() {
            LoadingInstance.isShow = false
        }

        // 添加实例方法
        Vue.prototype.$showLoading = function () {
            LoadingInstance.isShow = true
        }

        Vue.prototype.$hideLoading = function () {
            LoadingInstance.isShow = false
        }
    }
}
