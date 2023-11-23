<template>
    <div>
        {{message}}
    </div>
</template>

<script>
    import {ref} from 'vue'
    export default {
        props:{
            data: {
                type: String,
                default: '',
            }
        },
        setup(props) {
            const message = props.data
            return{
                message
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>