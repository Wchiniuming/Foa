<template>
<div class="tablebody">
    <tbody class="tbody">
        <slot name="tbody"></slot>
    </tbody>
</div>
</template>

<script>
export default {
    name: 'TableBody',
}
</script>

<style scoped>
.tbody {
    width: 100%;
    display: block;
}

.bodytr {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
}

td {
    flex: 1;
    line-height: 35px;
}
</style>
