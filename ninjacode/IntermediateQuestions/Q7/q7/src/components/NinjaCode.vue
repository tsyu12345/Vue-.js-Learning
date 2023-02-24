<template>
    
    <div>
        <h1>This is NinjaCode Component!</h1>
        <p>{{ text }}</p>
    </div>

</template>

<script>
    export default {
        name: 'NinjaCode',
        props: {
            text: {
                type: String,
                default: 'Hello World'
            }
        }
    }
</script>