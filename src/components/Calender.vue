<template>
  <v-calendar
      :attributes='data'
      is-expanded
  />
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'Calender',
  setup () {

    const store = useStore();
    const date = ref(new Date());
    let data = ref([]);


    onMounted(async () => {
      await store.dispatch('getHolidays', 2021)
      data.value = store.state.holidays.map(t => ({
        id: t.info,
        key: t.motivo,
        highlight: "red",
        dates: new Date(`${2021}-${t.mes}-${t.dia}`),
        popover: {
          label: `Tipo: ${t.tipo} - Motivo: ${t.motivo}`,
          visibility: 'hover',
          hideIndicator: true,
        }
      }))
    })

    return { date, data }
  }
}
</script>
