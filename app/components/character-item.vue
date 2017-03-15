<template lang="html">
  <div class="">
    <img :src="`${character.thumbnail.path}.${character.thumbnail.extension}`" alt="" class="grid-item__pic">
    <p class="grid-item__title">{{character.name}}</p>
  </div>
</template>

<script>
export default {
  props: ['character'],
};
</script>
