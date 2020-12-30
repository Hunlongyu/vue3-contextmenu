<template>
  <div class="menuItem">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'ContextMenuItem'
}
</script>
<style scoped>
.menuItem{
  cursor: pointer;
  background-color: #fff;
  padding: 10px 20px;
  font-size: 14px;
}
.menuItem:hover{
  color: #409eff;
  background-color: #f2f8fe;
}
</style>