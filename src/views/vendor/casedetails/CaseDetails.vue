<!--
 * @Author: your name
 * @Date: 2021-04-09 20:38:35
 * @LastEditTime: 2021-04-09 20:55:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \foamanagersystem\src\views\vendor\casedetail\CaseDetails.vue
-->
<template>
<search-box>
    <template v-slot:searchcondition>
        <div class="queryitem">
            <label>产品名称 </label>
            <input type="text" placeholder="产品名称" v-model="productName">
        </div>
        <div class="queryitem">
            <label>资费描述 </label>
            <input type="text" placeholder="资费描述" v-model="description">
        </div>
        <div class="queryitem">
            <label>测试号码 </label>
            <input type="text" placeholder="测试号码" v-model="phone">
        </div>
        <div class="queryitem">
            <label>测试结果 </label>
            <input type="text" placeholder="测试结果" v-model="testResult">
        </div>
    </template>
    <template v-slot:searchbutton>
        <button @click="dosearch">查询</button>
    </template>
</search-box>
</template>

<script>
import SearchBox from '@/components/common/searchbox/SearchBox'

export default {
    name: 'CaseDetails',
    components: {
        SearchBox
    },
    data() {
        return {
            queryCondition: [],
            productName: '',
            description: '',
            phone: '',
            testResult: ''
        }
    },
    methods: {
        dosearch() {
            this.queryCondition = []
            if (this.productName != "") {
                this.queryCondition.push(this.projectName)
            }
            if (this.description != "") {
                this.queryCondition.push(this.projectType)
            }
            if (this.phone != "") {
                this.queryCondition.push(this.projectState)
            }
            if (this.testResult != "") {
                this.queryCondition.push(this.beginTime)
            }
            if (!this.queryCondition.length) {
                console.log("请输入必要的查询条件...")
            } else {
                this.$emit("searchcasedetails", this.queryCondition)
            }
        }
    }

}
</script>

<style>

</style>
