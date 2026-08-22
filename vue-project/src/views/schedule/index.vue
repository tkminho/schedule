<script setup lang="ts">
import { ref, computed } from 'vue';

// 현재 날짜 상태 관리
const newDate = ref<Date>(new Date());

// 현재 월 (0~11로 반환되므로 1을 더함)
const year = computed<number>(() => newDate.value.getFullYear());
const month = computed<number>(() => newDate.value.getMonth());
const date = computed<number>(() => newDate.value.getDate());

// 이번 달 마지막 날짜 계산
const lastDay = computed<number>(() => {
  // 다음 달(month + 1)의 0번째 날은 '이번 달의 마지막 날'을 의미합니다.
  return new Date(year.value, month.value + 1, 0).getDate();
});
</script>

<template>
  오늘 : {{ year }}.{{ month + 1 }}.{{ date }}<br />
  이번 달 마지막 날 : {{ lastDay }}
</template>

<style lang="scss" scoped></style>
