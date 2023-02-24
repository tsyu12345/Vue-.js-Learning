<template>
    <div>
        <transition name="fade">
            <li class="list-item" @click="fadeItem" v-if="show">{{ dream.name }}</li>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'ListItem',
        data() {
            return {
                show: true
            }
        },
        props: {
            dream: {}
        },
        methods: {
            fadeItem() {
                this.show = !this.show;
            }
        }
    }
</script>

<style scoped>
.list-item {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    list-style: none;
    border-left: 5px solid #40b983;
    border-bottom: 1px solid #40b983;
    border-top:  1px solid #40b983;
    border-right: 1px solid #40b983;
    font-weight: 700;
    cursor: pointer;
}
.list-item:hover {
    background: #40b983;
    opacity: .8;
    color: #fff;
}
.fade-enter-active, .fade-leave-active {
    transition: all ease .5s;
}
.fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter, .fade-leave-to {
    transform: translateX(500px);
    opacity: 0;
}
</style>
