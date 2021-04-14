<template>
<div id="vendor">
    <project-search @searchproject="dosearchproject"></project-search>
    <div class="createbutton">
        <input type="button" value="新建">
    </div>
    <project-list :headers="headers" :bodyinfo="bodyinfo">
    </project-list>
</div>
</template>

<script>
import ProjectSearch from '@/views/vendor/projectinfo/ProjectSearch'
import ProjectList from '@/views/vendor/projectinfo/ProjectList'

export default ({
    name: 'vendor',
    components: {
        ProjectSearch,
        ProjectList
    },
    data() {
        return {
            headers: [{
                    name: '测试项目',
                    type: String
                },
                {
                    name: '项目版本',
                    type: String
                },
                {
                    name: '测试类型',
                    type: String
                },
                {
                    name: '创建时间',
                    type: String
                },
                {
                    name: '项目状态',
                    type: String
                },
                {
                    name: '用例数量',
                    type: Number
                },
                {
                    name: '通过率',
                    type: Number
                }, {
                    name: '入网许可',
                    type: Number
                }, {
                    name: '操作',
                },
            ],
            bodyinfo: [{
                name: '测试项目1',
                version: 'v1.2',
                type: '功能测试',
                createdtime: '2020-11-19 08:25:36',
                state: '已完成',
                casenumber: 100,
                passingrate: '90%',
                certification: '已获得'
            }, {
                name: '测试项目2',
                version: 'v1.2',
                type: '功能测试',
                createdtime: '2020-11-19 08:25:36',
                state: '申请中',
                casenumber: 100,
                passingrate: '90%',
                certification: '已获得'
            }, {
                name: '测试项目3',
                version: 'v1.2',
                type: '功能测试',
                createdtime: '2020-11-19 08:25:36',
                state: '测试中',
                casenumber: 100,
                passingrate: '90%',
                certification: '已获得'
            }, {
                name: '测试项目4',
                version: 'v1.2',
                type: '功能测试',
                createdtime: '2020-11-19 08:25:36',
                state: '申请失败',
                casenumber: 100,
                passingrate: '50%',
                certification: '不合格'
            }]
        }
    },
    methods: {
        dosearchproject(qc) {
            //携带查询条件，获取查询结果，并交由tablelist组件进行展示
            console.log('执行查询项目信息操作！', qc);
        }
    },
})
</script>

<style scoped>
.createbutton {
    margin-bottom: 10px;
    margin-left: 26px;
}
</style>
