<template>
    <div class="modul">
        <img v-for="(placeholder, i) in placeholders" :key="i" :src="placeholder.thumbnailUrl" :alt="placeholder.title">
    </div>
</template>
<script>
import PlaceholderService from '@/services/PlaceholderService'
export default {
    name: 'Modul',
    data(){
        return{
            placeholders:[]
        }
    },
    methods:{
        async getPlaceholders(){
            const response = await PlaceholderService.getPlaceholders()
            this.placeholders = response.data
            console.log(this.placeholders);
        }
    },
    created(){
        this.getPlaceholders()
    }
}
</script>
<style>
.modul{
        border: 1px solid #d9d9d9;
        padding: 20px;
        margin-bottom: 10px;
    }
</style>