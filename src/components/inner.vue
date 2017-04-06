<template>
    <content>
        <h2>{{stuff}}</h2>
    </content>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    
})
export default class Inner extends Vue{
    stuff:string='ts in vue file';
}


</script>

<style scoped>
</style>