<template>
  <div>
    <nav class="city_nav">
      <div class="city_tip">
        <headTop>
          <span>当前定位城市：</span>
          <span>定位不准时，请在城市列表中选择</span>
        </headTop>
      </div>
    </nav>
  </div>
</template>

<script>
import headTop from '@/components/header/Head.vue'

export default {
  data() {},

  components: {
    headTop,
  },
}
</script>
