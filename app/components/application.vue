<template lang="html">
  <div class="app">
    <header class="topnav section">
      <div class="container">
        <h1 class="logo">Marvel</h1>
      </div>
    </header>
    <div class="main container">
      <section class="main__sidebar">
        <div class="main-img">
          <img src="http://placehold.it/400x400" alt="" class="marvel-pic">
        </div>
        <div class="image-subhead">
          <h1 class="main-title">Mini Aussies!</h1>
          <p class="main-dates">2010-2011</p>
        </div>
        <div class="creators">
          <h2 class="creators__heading">Creators</h2>
          <ul class="creators__list">
            <li class="list-item">Tom Brennan</li>

          </ul>
        </div>
      </section>
      <section class="main__comic-menu">
        <div class="menu">
          <h1 class="menu__title">Characters</h1>
          <div class="menu__grid">
            <div class="grid-item">
              <img src="http://placehold.it/125x125" alt="" class="grid-item__pic">
              <p class="grid-item__title">Mini Aussie!</p>
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

export default {

  data() {
    return {
      seriesInfo: this.$select(seriesInfo),
      characters: this.$select(characterData),
      comics: this.$select(comicData),
    };
  },

  methods: {

  },
};
</script>
