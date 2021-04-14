<!--
 * @Author: your name
 * @Date: 2021-04-08 15:27:09
 * @LastEditTime: 2021-04-09 20:44:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \foamanagersystem\src\components\content\search\ContentSearch.vue
-->
<template>
<search-box>
    <template v-slot:searchcondition>
        <div class="queryitem">
            <label>测试项目 </label>
            <input type="text" placeholder="测试项目" v-model="projectName">
        </div>
        <div class="queryitem">
            <label>项目类型 </label>
            <input type="text" placeholder="项目类型" v-model="projectType">
        </div>
        <div class="queryitem">
            <label>项目状态 </label>
            <select v-model="projectState">
                <option value="未启动">未启动</option>
                <option value="进行中">进行中</option>
                <option value="已完成">已完成</option>
            </select>
        </div>
        <div class="queryitem">
            <label>创建时间 </label>
            <input type="text" placeholder="开始时间" v-model="beginTime">
            <span> - </span>
            <input type="text" placeholder="结束时间" v-model="endTime">
        </div>
    </template>
    <template v-slot:searchbutton>
        <button @click="dosearch">查询</button>
    </template>
</search-box>
</template>

<script>
import SearchBox from '@/components/common/searchbox/SearchBox';

export default {
    name: 'ProjectSearch',
    components: {
        SearchBox
    },
    data() {
        return {
            queryCondition: [],
            projectName: "",
            projectType: "",
            projectState: "",
            beginTime: "",
            endTime: "",
        }
    },
    methods: {
        dosearch() {
            this.queryCondition = []
            if (this.projectName != "") {
                this.queryCondition.push(this.projectName)
            }
            if (this.projectType != "") {
                this.queryCondition.push(this.projectType)
            }
            if (this.projectState != "") {
                this.queryCondition.push(this.projectState)
            }
            if (this.beginTime != "") {
                this.queryCondition.push(this.beginTime)
            }
            if (this.endTime != "") {
                this.queryCondition.push(this.endTime)
            }
            if (!this.queryCondition.length) {
                console.log("请输入必要的查询条件...")
            } else {
                this.$emit("searchproject", this.queryCondition)
            }
        }
    },
}
</script>

<style scoped>
.queryitem {
    display: inline-block;
    text-align: center;
}

/* input {
    width: 150px;
} */
</style>
