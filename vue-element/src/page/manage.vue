<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
            <HeadTop></HeadTop>
            <AdNav></AdNav>
			<el-col :span="21" style="height: 100%;overflow: auto;">

                <!-- <transition name="fade" mode="out-in"> -->
                <!-- 这里用transition貌似没渐变的效果 -->
                    <div style="font:20px Extra large;padding:15px 5px;" :key="topTip">{{topTip}}</div>
                <!-- </transition> -->

				<!-- <keep-alive> -->
                <!-- keep-alive会缓存已加载的组件，再次回到已加载的组件时不会触发默写更新用 -->
                <!-- 这里开启keep-alive的话，不导致再次切换会页面时，上面的 topTip不触发变化 -->
				    <router-view></router-view>
				<!-- </keep-alive> -->
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    import AdNav from '../components/_nav.vue'
	import HeadTop from '../components/headTop.vue'
    export default {
    	data (){
    		return {
    		}
    	},
    	components: {
    		AdNav,
            HeadTop
    	},
        computed: {
            topTip () {
                return this.$store.state.topTip
            }
        }
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
</style>
