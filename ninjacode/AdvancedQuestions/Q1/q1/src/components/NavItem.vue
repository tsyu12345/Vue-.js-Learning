<template>
    <div class="nav-item">
        <nav class="nav-list-wrapper">
            <ul >
                <li class="nav-list-item" v-for="item in items" :key="item.name">
                    <a :href="item.link">{{ item.name }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'NavItem',
        props: {
            items: []
        },
    }
</script>

<style scoped>
.nav-list-wrapper {
    padding: 10px;
}
.nav-list-item {
    list-style: none;
    padding: 8px 0;
}
.nav-list-item a {
    color: #40b983;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    font-size: 16px;
    font-weight: 700;
}
.nav-list-item a:hover{
    background: #40b983;
    opacity: .8;
    color: #fff;
}
</style>