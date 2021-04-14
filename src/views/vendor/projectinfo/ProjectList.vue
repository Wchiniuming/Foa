<!--
 * @Author: your name
 * @Date: 2021-04-09 19:01:43
 * @LastEditTime: 2021-04-09 20:36:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \foamanagersystem\src\views\vendor\projectlist\ProjectList.vue
-->
<template>
<table class="table">
    <table-header>
        <template v-slot:theader>
            <tr class="headerrow">
                <td v-for="header in headers" :key="header.name">
                    {{header.name}}
                </td>
            </tr>
        </template>
    </table-header>
    <table-body>
        <template v-slot:tbody>
            <tr class="bodytr" v-for="(bodyrow, index) in bodyinfo" :key="bodyrow.name">
                <td v-for="(value, key) in bodyrow" :key="key">
                    <router-link v-if="key=='name'" :to="{name: 'projectdetails', params: {projectName: bodyinfo[index].name}}">{{value}}</router-link>
                    <router-link v-else-if="key=='casenumber'" :to="{ name: 'casedt', params: {projectName: bodyinfo[index].name}}">{{value}}</router-link>
                    <!-- <a v-else-if="key=='casenumber'" @click="checkcasenumber(bodyinfo[index].name)">{{value}}</a> -->
                    <router-link v-else-if="key=='passingrate'" :to="{ name: 'testresult', params: {projectName: bodyinfo[index].name}}">{{value}}</router-link>
                    <span v-else-if="key=='certification' && value=='不合格'" class="nopass">{{value}}</span>
                    <router-link v-else-if="key=='certification'" :to="{ name: 'certification', params: {projectName: bodyinfo[index].name}}" class="pass">{{value}}</router-link>
                    <span v-else>{{value}}</span>
                </td>
                <td>
                    <!-- <slot name="operation"></slot> -->
                    <button :disabled="!(bodyrow.state=='申请中'|bodyrow.state=='申请失败')">修改</button>
                    <button :disabled="!(bodyrow.state=='申请中'|bodyrow.state=='申请失败')">删除</button>
                </td>
            </tr>
        </template>
    </table-body>
</table>
</template>

<script>
import TableHeader from '@/components/common/table/tableheader/TableHeader'
import TableBody from '@/components/common/table/tablebody/TableBody'

export default {
    name: 'ProjectList',
    components: {
        TableHeader,
        TableBody
    },
    data() {
        return {}
    },
    props: {
        headers: Array,
        bodyinfo: Array
    },
    methods: {
        checkproject(item) {
            console.log("checkproject", item)
        },
        checkcasenumber(item) {
            this.$router.push('/vendor/casedetails/' + item);
            console.log("checkcasenumber", item)
        },
        checkpassingrate(item) {
            console.log("checkpassingrate", item)
        },
        checklicense(item) {
            console.log("checklicense", item)
        }
    },
}
</script>

<style scoped>
.table {
    width: 100%;
}

a:hover {
    color: red;
    cursor: pointer;
}

button:disabled:hover {
    cursor: not-allowed;
}

.nopass {
    color: red;
    font-weight: bold;
}

.pass {
    color: green;
    font-weight: bold;
}
</style>
