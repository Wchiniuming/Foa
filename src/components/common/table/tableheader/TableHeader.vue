<template>
<div class="tableheader">
    <thead class="theader">
            <slot name="theader"></slot>
    </thead>
</div>
</template>

<script>
export default {
    name: 'TableHeader',
    data() {
        return {}
    }
}
</script>

<style>
.tableheader,
.theader,
.headerrow {
    background-color: rgb(81, 182, 212);
    width: 100%;
    display: block;
}

.headerrow {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    height: 46px;
}

td {
    flex: 1;
}
</style>
