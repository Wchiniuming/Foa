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
            <tr class="bodytr" v-for="bodyrow in bodyinfo" :key="bodyrow.name">
                <td v-for="item in bodyrow" :key="item">
                    {{item}}
                </td>
                <td>
                    <slot name="operation"></slot>
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
    name: 'TableList',
    components: {
        TableHeader,
        TableBody
    },
    props: {
        headers: [],
        bodyinfo: []
    }
}
</script>

<style>
.table {
    width: 100%;
}
</style>
