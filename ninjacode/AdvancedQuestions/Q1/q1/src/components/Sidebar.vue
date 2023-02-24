<template>
    <div class="sidebar-container">
        <h1>This is Sidebar Component!</h1>
        <NavItem :items="items" />
    </div>
</template>

<script>
    import NavItem from './NavItem.vue';
    export default {
        name: 'SidebarComponent',
        components: {
            NavItem
        },
        data() {
            return {
                items: [
                    {
                        name: 'Home',
                        link: 'home'
                    },
                    {
                        name: 'About',
                        link: 'about'
                    },
                    {
                        name: 'Contact',
                        link: 'contact'
                    }
                ]
            }
        }

    }
</script>

<style scoped>
    .sidebar-container {
        width: 20%;
        background: #fff;
    }
    .sidebar-container h1 {
        padding-top: 50px;
    }
</style>