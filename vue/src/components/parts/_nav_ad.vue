<template>
	<el-row>
		<el-col :span="4">
			<el-menu id='ad-nav' default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" v-for="(item, i) in menu">
				<el-menu-item index="i" v-if="item.onlyOne">
					<i class="el-icon-setting"></i>{{item.name}}
				</el-menu-item>

				<el-submenu index="i" open="1" v-if="!item.onlyOne">
					<template slot="title">
						<i class="el-icon-message"></i>{{item.name}}
					</template>
                    <el-menu-item-group v-for="(sub, j) in item.subMenu">
                        <el-menu-item index="j">
                        	<i class="el-icon-message"></i>{{sub}}
                        </el-menu-item>
                    </el-menu-item-group>
				</el-submenu>
			</el-menu>
		</el-col>
	</el-row>
</template>


<script>
    export default {
    	props: ['menus'],
        data () {
            return {
                title: 'admin index',
                menu: this.menus
            }
        },
        methods : {
            handleOpen(open) {
                console.log(open);
            },
            handleClose(close) {
                // this.$message({
                //     type: 'error',
                //     message: 'close'
                // })
            }
        },
        mounted () {
        	// this.menus = this.props.data;
        	console.log(this.menu)
        }
    }
</script>