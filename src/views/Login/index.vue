<template>
  <div class="login">
    <div class="login-row">
      <span>Username: </span>
    </div>
    <div class="login-row">
      <span>Password: </span>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import {} from "@/api/user/loginManage.js";
export default {
  components: {},
  props: {},
  setup(props) {
    const data = reactive({});
    return toRefs(data);
  },
};
</script>

