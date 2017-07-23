<template>
	<nav id='ad-nav'>

		<el-row>
			<el-col :span="4">
				<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" v-for="(item, i) in menus">

					<el-submenu index="i" open="1">
						<el-menu-item index="i" v-if="onlyOne">{{item.name}}</el-menu-item>
						<template slot="title" v-if="!onlyOne">
							<i class="el-icon-message"></i>{{item.name}}
						</template>
	                    <el-menu-item-group v-if="!onlyOne" v-for="(sub, j) in item.subMenu">
	                        <el-menu-item index="j">{{sub}}</el-menu-item>
	                    </el-menu-item-group>
					</el-submenu>
					
				</el-menu>
			</el-col>
		</el-row>

	</nav>
</template>


<script>
	var menus = [
		{ name: '导航1', subMenu: ['1', '11', '111'] },
		{ name: '导航2', subMenu: ['2', '22', '222'] },
		{ name: '导航3'},
		{ name: '导航4', subMenu: ['4', '44'] }
	]
	var menus1 = menus.map((a) => {
		if(a.subMenu==undefined || a.subMenu.length==0){
			a.onlyOne = true;
		}else{
			a.onlyOne = false;
		}
		return a;
	})
    export default {
        data () {
            return {
                title: 'admin index',
                menus: menus1

            }
        },
        methods : {
            handleOpen(open) {
                console.log(open);
            },
            handleClose(close) {
                this.$message({
                    type: 'error',
                    message: 'close'
                })
            }
        },
        mounted () {

        }
    }
</script>