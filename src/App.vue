<template>
  <div id="app">
    <ul class="navigation">
      <li data-menuanchor="page1" class="navigation__item active"><a href="#page1">First section</a></li>
      <li data-menuanchor="page2" class="navigation__item"><a href="#page2">Second section</a></li>
      <li data-menuanchor="page3" class="navigation__item"><a href="#page3">Third section</a></li>
    </ul>
    <full-page ref="fullpage" :options="fullPageOptions" id="fullpage">
      <section class="section main">
        <div class="content">
          <h1>Металлические двери</h1>
          <h3>Производство входных металлических дверей! Добро пожаловать!</h3>
          <button class="next" @click="goToNextSlide">Подробнее</button>
        </div>
        <div class="facts">
          <div class="facts__item">
            <div class="item__icon">
              <i class="icon"></i>
            </div>
            <div class="item__desc">
              <h4></h4>
              <p></p>
            </div>
          </div>
        </div>

        Section 1
      </section>
      <div class="section">
        <button class="next" @click="goToNextSlide">Next</button>
        Section 2
      </div>
      <div class="section">
        <button class="prev" @click="goToPrevSlide">Prev</button>
        Section 3
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      fullPageOptions: {
        menu: '.navigation',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
        scrollBar: true,
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        navigation: true
      },
    }
  },
  methods: {
    goToNextSlide() {
        this.$refs.fullpage.api.moveSectionDown();
    },
    goToPrevSlide() {
        this.$refs.fullpage.api.moveSectionUp();
    }
  }
}
</script>
