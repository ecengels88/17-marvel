<template lang="html">
  <div class="">
    <img :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" alt="" class="grid-item__pic">
    <p class="grid-item__title">{{comic.issueNumber}}</p>
    <p class="grid-item__title">{{comic.title}}</p>
    <button class="btn">Read More</button>
  </div>
</template>

<script>
export default {
  props: ['comic'],
};
</script>
