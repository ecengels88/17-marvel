<template lang="html">
  <div class="">
    <div class="card">
      <div class="close-card">
        <button class="close-btn" @click="$emit('close')">&times;</button>
      </div>
      <div class="card-content">
        <p class="content">{{modal.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>


export default {

  props: ['modal'],

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
