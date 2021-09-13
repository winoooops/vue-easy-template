<template>
  <div></div>
</template>

<script lang="ts">
import { Ref, ref, defineComponent, onMounted } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "Login",
  setup(): Ref {
    const data = ref();
    const state = useStore();
    console.log(state);
    return data;
  },
});
</script>
