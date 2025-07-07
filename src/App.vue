<script setup lang="ts">
import Button from "./components/Button/Button.vue";
import { ref, onMounted } from "vue";
import type { ButtonInstance } from "./components/Button/type";
const buttonRef = ref<ButtonInstance | null>(null);
onMounted(() => {
    console.log(buttonRef.value?.ref);
});
</script>

<template>
    <Button type="primary" size="large" :plain="true" circle disabled ref="buttonRef">按钮</Button>
    <div></div>
</template>

<style scoped></style>
