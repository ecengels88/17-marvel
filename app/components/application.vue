<template lang="html">
  <div class="app">
    <header class="topnav section">
      <div class="container">
        <h1 class="logo">Marvel</h1>
      </div>
    </header>
    <div class="main container">
      <section class="main__sidebar" v-if="seriesInfo">
        <div class="main-img">
          <img :src="`${seriesInfo.thumbnail.path}.${seriesInfo.thumbnail.extension}`" alt="" class="marvel-pic">
        </div>
        <div class="image-subhead">
          <h1 class="main-title">{{seriesInfo.title}}</h1>
          <p class="main-dates">{{`${seriesInfo.startYear} - ${seriesInfo.endYear}`}}</p>
        </div>
        <div class="creators">
          <h2 class="creators__heading">Creators</h2>
          <ul class="creators__list">
            <li class="list-item" v-for="{ name } in seriesInfo.creators.items">{{name}}</li>

          </ul>
        </div>
      </section>
      <section class="main__comic-menu">
        <div class="menu">
          <h1 class="menu__title">Characters</h1>
          <div class="menu__grid">
            <div class="grid-item" v-for="character in characterData">
              <character-item :character="character"></character-item>
            </div>
          </div>
        </div>
        <div class="menu">
          <h1 class="menu__title">Comics</h1>
          <div class="menu__grid">
            <div class="grid-item">
              <img src="http://placehold.it/125x125" alt="" class="grid-item__pic">
              <p class="grid-item__title">#1</p>
              <p class="grid-item__title">Another Aussie!</p>
              <button class="btn">Read More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import store from '../store';
import { seriesInfoSearch } from '../actions';
import characterItem from './character-item.vue';

export default {

  components: {
    characterItem,
  },

  data() {
    return {
      seriesInfo: this.$select('seriesInfo'),
      characterData: this.$select('characterData'),
      comicData: this.$select('comicData'),
    };
  },

  created() {
    store.dispatch(seriesInfoSearch('hulk'))
  },

  methods: {

  },
};
</script>
