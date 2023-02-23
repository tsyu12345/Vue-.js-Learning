<template>
    <div class="edit-form">
        <input ref="input" :value="message" @input="doUpdate">
    </div>
</template>

<script>
    export default {
        name: 'EditForm',
        computed: {
            message() {
                return this.$store.getters.message
            },
        },
        methods: {
            doUpdate(event) {
                //this.$store.commit('updateMessage', event.target.value)
                this.$store.dispatch('doUpdate', this.$refs.input.value);
            }
        }
    }
</script>

