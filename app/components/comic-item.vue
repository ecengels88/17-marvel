<template lang="html">
  <div class="object-item">
    <div class="square-pic square-pic--tall">
      <img :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" alt="" class="object-item__pic">
    </div>
    <p class="object-item__title">{{comic.issueNumber}}</p>
    <p class="object-item__title">{{comic.title}}</p>
    <button class="btn modal-btn" @click="$emit('open', comic)">Read More</button>
  </div>
</template>

<script>

import { setModal } from '../actions';

export default {
  props: ['comic'],

  methods: {

  },
};
</script>
