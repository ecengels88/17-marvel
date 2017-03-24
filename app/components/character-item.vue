<template lang="html">
  <div class="object-item">
    <div class="square-pic">
      <img :src="`${character.thumbnail.path}.${character.thumbnail.extension}`" alt="" class="grid-item__pic">
    </div>
    <p class="object-item__title">{{character.name}}</p>
  </div>
</template>

<script>
export default {
  props: ['character'],
};
</script>
