<!--
 * @Author: your name
 * @Date: 2021-04-08 15:16:06
 * @LastEditTime: 2021-04-09 20:44:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \foamanagersystem\src\components\common\searchbox\SearchBox.vue
-->
<template>
<div class="searchbox">
    <div class="left">
        <slot name="searchcondition"></slot>
    </div>
    <div class="right">
        <slot name="searchbutton"></slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'SearchBox'
}
</script>

<style scoped>
.searchbox {
    display: flex;
    height: 42px;
    align-items: center;

}

.left {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.right {
    flex: 1;
    display: flex;
    justify-content: center;
}
input {
    width: 150px;
}
</style>
