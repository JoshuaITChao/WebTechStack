<template>
    <div id="app">
        <van-nav-bar
                title="购物车"
                left-text="返回"
                right-text="客服"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />
        <van-card
                num="2"
                tag="标签"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                origin-price="10.00"
        />
        <van-card
                num="2"
                tag="标签"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                origin-price="10.00"
        />

        <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checked">全选</van-checkbox>
            <template #tip>
                你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
            </template>
        </van-submit-bar>
    </div>
</template>

<script>
    export default {
        methods: {
            onClickLeft() {
                alert("返回")
            },
            onClickRight() {
                alert("客服")
            }
        }
    }
</script>

<style lang="scss">

</style>
