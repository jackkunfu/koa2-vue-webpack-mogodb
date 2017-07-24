<template>
    <el-row>
        <el-col :span="4">
            <AdNav :menus='menusArr'></AdNav>
        </el-col>
    </el-row>
</template>

<script>
    import Vue from 'vue'
    import AdNav from './parts/_nav_ad.vue'

    var menus = [
        { name: '导航1', subMenu: ['1', '11', '111'] },
        { name: '导航2', subMenu: ['2', '22', '222'] },
        { name: '导航3'},
        { name: '导航4', subMenu: ['4', '44'] }
    ]
    var menusArr = menus.map((a) => {
        if(a.subMenu == undefined || a.subMenu.length == 0){
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
                menusArr
            }
        },
        components: {
            AdNav
        },
        methods : {
            
        },
        mounted () {

        }
    }
</script>