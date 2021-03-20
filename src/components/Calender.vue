<template>
  <DatePicker v-model="date"  model-value/>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'Calender',
  setup () {
    const date = ref(new Date());
    return { date }
  }
}
</script>
