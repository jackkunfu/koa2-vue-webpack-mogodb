<template>
    <el-col :span="3" style="height: 100%;overflow: auto;">
       <el-menu style="height: 100%;overflow: auto;" :default-active="defaultActive" unique-opened theme="dark" @open="handleOpen" @close="handleClose" router>
            <template v-for="(item, i) in menus">
                <el-menu-item :index="item.url" v-if="item.noSub">{{item.name}}</el-menu-item>
                <el-submenu :index="i.toString()" v-else="item.noSub">
                    <template slot="title">{{item.name}}</template>
                    <template v-for="(sub, j) in item.submenus">
                        <el-menu-item :index="sub.url">{{sub.name}}</el-menu-item>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </el-col>
</template>

<script>
    import { menuList } from '@/api/getData.js'

    export default {
        data (){
            return {
                menus: []
            }
        },
        computed: {
            defaultActive: function(){
                return this.$route.path.replace('/', '');
            }
        },
        methods: {
            handleOpen () {
                console.log('open')
            },
            handleClose () {
                console.log('close')
            }
        },
        mounted () {
            this.$nextTick(() => {
                menuList().then((d)=>{
                    this.menus = d.map(function(v){
                                    if(v.submenus && v.submenus.length > 0){
                                        v.noSub = false;
                                    }else{
                                        v.noSub = true;
                                    }
                                    return v;
                                });
                })
            })
        }
    }
</script>