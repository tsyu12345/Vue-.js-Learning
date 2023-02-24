<template>
    <div class="main-container">
        <div class="main-form-wrapper">
            <form>
                <input type="text" placeholder="Enter your dream" v-model="dreamValue" class="form-input"/>
                <button type="submit" class="form-submit" @click.prevent="addDream">Add</button>
            </form>
        </div>
        <List :dreams="dreams" />
    </div>
</template>

<script>
    import List from './List.vue';
    
    export default {
        name: 'MainComponent',
        components: {
            List
        },
        data: function() {
            return {
                dreamValue: '',
                dreams: [
                    {
                        name: 'Become a Ninja',
                        link: 'ninja'
                    },
                    {
                        name: 'Become a Rockstar',
                        link: 'rockstar'
                    },
                    {
                        name: 'Become a Billionaire',
                        link: 'billionaire'
                    }
                ]
            }
        },
        methods: {
            addDream: function() {
                this.dreams.push({
                    name: this.dreamValue,
                    link: this.dreamValue
                });
                this.dreamValue = '';
            }
        },
    }
</script>

<style scoped>
    .main-container {
        width: 80%;
        background: #ddd;
    }
    .main-container h1 {
        padding-top: 50px;
    }
    .main-form-wrapper{
        background: #fff;
        width: 80%;
        margin: 2rem auto;
        border-radius: 15px;
    }
    .main-form-wrapper .form-input {
        width: 30%;
        margin: 30px;
        border: 1px solid #ddd;
        border-radius: 5px;
        height: 40px;
        padding-left: 8px;
    }
    .main-form-wrapper .form-submit {
        background: #40b983;
        color: #fff;
        border: none;
        padding: 8px 16px;
        border-radius: 5px;
    }
</style>