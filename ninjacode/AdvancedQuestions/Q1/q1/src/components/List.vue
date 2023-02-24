<template>
    <div class="main-list-wrapper">
        <ul class="main-list">
            <ListItem v-for="dream in dreams" :key="dream.name" :dream="dream" />
        </ul>
    </div>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
    name: 'ListComponent',
    components: {
        ListItem
    },
    props: {
        dreams: []
    },
}
</script>

<style scoped>
.main-list-wrapper{
    background: #fff;
    width: 80%;
    margin: 2rem auto;
    border-radius: 15px;
}
.main-list {
    padding: 2rem;
    text-align: left;
}
</style>