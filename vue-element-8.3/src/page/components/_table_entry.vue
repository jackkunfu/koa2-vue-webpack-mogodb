
<template>
    <el-col>
        <el-tree :data="entryData" :props="defaultProps" ref="tree" @node-click="handleNodeClick" node-key="id" :render-content="renderContent"></el-tree>
        
        <div style="margin:20px;" class="add-level-one">
            <div>新增一级目录</div>
            <el-form label-width="80px" :model="newLevelOne" style="width:50%;padding:20px;">
                <el-form-item label="一级名称">
                    <el-input v-model="newLevelOne.label"></el-input>
                </el-form-item>
                <el-form-item label="跳转路径">
                    <el-input v-model="newLevelOne.url"></el-input>
                </el-form-item>
                <el-button style="margin:0 50px 30px 80px;" @click="levelOneOk">新增一级</el-button>
                <!-- <el-button style="margin:0 50px 30px 80px;" @click="levelOneCancel">取消</el-button> -->
            </el-form>
        </div>

        <div style="margin:20px;display:none" class="edit-ctn">
            <div>编辑{{curUpdate.title}}</div>
            <el-form label-width="80px" :model="curUpdate" style="width:50%;padding:20px;">
                <el-form-item label="名称">
                    <el-input v-model="curUpdate.label"></el-input>
                </el-form-item>
                <el-form-item label="跳转路径">
                    <el-input v-model="curUpdate.url"></el-input>
                </el-form-item>
                <el-button style="margin:0 50px 30px 80px;" @click="updateOk(curUpdate.id)">确定</el-button>
                <el-button style="margin:0 50px 30px 80px;" @click="updateCancel(curUpdate.id)">取消</el-button>
            </el-form>
        </div>
        
    </el-col>
</template>

<script>

    import $ from 'jquery'
    var id = 0;
    var entryData = [{
        label: '一级 1',
        id: 0,
        children: [{
            label: '二级 1-1',
            id: 1
        }]
    }, {
        label: '一级 2',
        children: [{
            label: '二级 2-1',
            url: 'index',
            id:3
        }, {
            label: '二级 2-2'
        }]
    }, {
        label: '一级 3',
        id:4,
        children: [{
            label: '二级 3-1',
            id:5
        }, {
            label: '二级 3-2',
            id:6
        }]
    }]

    export default {
        data() {
            return {
                entryData: null,
                curUpdate: {
                    id: null,
                    name: '',
                    url: ''
                },
                curOriData: null,
                newLevelOne: {
                    label: '',
                    id: 0,
                    children: []
                },
                defaultProps: {  // el-tree 的字段默认配置
                    children: 'children',
                    label: 'label'
                }
            }
        },
        filters: {
            delBlank(d){
                return d.replace(/\s+/g,'')
            }
        },
        mounted () {
            this.$store.state.topTip = '入口目录管理';
            this.entryData = entryData;
            this.$nextTick(() => {
                // this._apiData.userList().then((d)=>{
                //     // console.log(d)
                //     // this.treeArr = d;
                // })

                // console.log(this.tableData)
            })
        },
        methods: {
            handleNodeClick(data) {
                // return false
                // console.log(data);
            },
            levelOneOk(){
                this.entryData.push(this.newLevelOne)
            },
            updateOk(id) {
                console.log(id);
                this.curOriData = this.curUpdate
            },
            updateCancel(id) {
                $('.edit-ctn').hide();
                this.curOriData = null;
            },
            renderContent(h, { node, data, store }) {
                var buttonAdd;
                if(node.level == 1){
                    buttonAdd = (
                        <el-button size="mini" on-click={ (e) => this.append(node, store, data, e) }>增加子集</el-button>
                    )
                }
                return (
                    <span>
                        <span>
                            <span>{node.label}</span>
                        </span>
                        <span style="float: right; margin-right: 20px">
                            <el-button size="mini" on-click={ (e) => this.edit(node, store, data, e) }>编辑</el-button>
                            { buttonAdd }
                            <el-button size="mini" on-click={ (e) => this.remove(node, store, data, e) }>删除</el-button>
                        </span>
                    </span>
                );
            },
            async getData() {
                // return (()=>{
                //     userList().then((d)=>{
                //         return d;
                //     })
                // })()
                return await this._apiData.userList()
            },
            append(node, store, data, e) {
                console.log(node.data);
                node.expanded = true;
                data.children.push({label: '新增', url: null});
                e.stopPropagation();
            },
            remove(node, store, data, e) {
                e.stopPropagation()
                console.log(data);
                if(node.level == 1){    //  如果是一级
                    // store.remove(data);
                    if(this.entryData.length == 1){  
                        this.entryData = [];
                        return 
                    }
                    var i = this.selfUtil.objIndexOfArr(data, this.entryData, 'label', node.label)
                    console.log(i);
                    console.log(node.label);
                    i>-1 && this.entryData.splice(i,1)
                }else if(node.level == 2){    // 如果是二级
                    var parentArr = node.parent.data.children;
                    if(parentArr.length == 1){  
                        parentArr = []; 
                        return 
                    }
                    var j = this.selfUtil.objIndexOfArr(data, node.parent.data.children, 'label', node.label)
                    parentArr.splice(j,1)
                }else{
                    consoel.log('')
                }
            },
            edit(node, store, data, e) {
                console.log(node)
                console.log(store)
                console.log(data)
                e.stopPropagation();
                $('.edit-ctn').show();
                this.curUpdate = $.extend(true, {}, data)
                this.curUpdate.title = this.curUpdate.label;

                this.curOriData = data;
            }
        }
    }
</script>