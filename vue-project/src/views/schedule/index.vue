<script setup lang="ts">
import { ref } from 'vue';

const today = ref<Date>(new Date());
</script>

<template>
  {{ today }}
</template>

<style lang="scss" scoped></style>
