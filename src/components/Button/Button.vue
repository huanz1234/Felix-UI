<template>
    <button
        class="vk-button"
        :class="{
            [`fx-button--${props.type}`]: props.type,
            [`vk-button--${props.size}`]: props.size,
            'is-plain': props.plain,
            'is-round': props.round,
            'is-circle': props.circle,
            'is-disabled': props.disabled,
        }"
        :disabled="disabled"
        :autofocus="autofocus"
        :type="nativeType"
        ref="_ref"
    >
        <slot></slot>
    </button>
</template>

<script lang="ts">
export default defineComponent({
    name: "VkButton",
});
</script>

<script setup lang="ts">
import { ref } from "vue";
import type { ButtonProps } from "./type";
import { defineProps, defineComponent } from "vue";
const props = withDefaults(defineProps<ButtonProps>(), {
    type: "primary",
    size: "small",
    plain: false,
    round: false,
    circle: false,
    disabled: false,
    nativeType: "button",
    autofocus: false,
});
const _ref = ref<HTMLButtonElement>();
defineExpose({
    ref: _ref,
});
</script>

<style scoped></style>
