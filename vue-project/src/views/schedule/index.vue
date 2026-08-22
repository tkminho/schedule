<script setup lang="ts">
import { ref } from 'vue';

const newDate = ref<Date>(new Date());
const years = ref<number>(newDate.value.getFullYear());
const month = ref<number>(newDate.value.getMonth() + 1);
const date = ref<number>(newDate.value.getDate());
</script>

<template>{{ years }}.{{ month }}.{{ date }}</template>

<style lang="scss" scoped></style>
