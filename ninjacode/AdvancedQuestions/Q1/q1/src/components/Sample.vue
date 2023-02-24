<template>
    <div class="samplepage-container">
        <h1>This is Sample Component!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl alique</p>
    </div>
</template>

<script>
    export default {
        name: 'SampleComponent',
    }
</script>

<style scoped>
    .samplepage-container {
        width: 80%;
        background: #fff;
    }
    .samplepage-container h1 {
        padding-top: 50px;
    }
</style>