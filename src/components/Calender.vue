<template>
  <v-calendar
      :attributes='data'
      is-expanded
  />
</template>

<script>
import { ref } from 'vue';
import { mapState } from 'vuex';
export default {
  name: 'Calender',
  data(){
    return {
      data: [],
    }
  },
  computed: {
    ...mapState(['holidays'])
  },
   mounted() {
    this.$store.dispatch('getHolidays', 2021).then(() => {
      this.data = this.holidays.map(t => ({
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
  },
  setup () {
    const date = ref(new Date());
    return { date }
  }
}
</script>
