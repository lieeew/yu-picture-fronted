<script setup lang="ts">
import { useLoginUserStore } from '@/stores/useLoginUserStore.ts'

useLoginUserStore().fetchLoginUser();

</script>

<template></template>

<style scoped></style>
