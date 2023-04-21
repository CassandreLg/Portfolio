<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            type: [String, Number],
            default: ''
        }
    }
};
</script>

<template>
    <div>
        <input :id="name" :name="name" :type="type" :placeholder="placeholder" v-model="value" />
    </div>
</template>