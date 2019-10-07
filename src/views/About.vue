<template>
  <div class ="container" >
    <div class=" columns padding">
        <div class = "column">
          <!-- <img src="../assets/me2.jpg">  -->

          <div class="card">
            <div class="card-image">
              <figure class="image is-square ">
                <img src="../assets/me2.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/me2.jpg" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4 no-margin">Patrick Beard</p>
                    <a class="button is-small" href="https://github.com/pdbeard" target="_black">
                      <!-- <span class="icon">
                        <i class="fab fa-github"></i>
                      </span> -->
                      <span>Github</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <section class="column">
            <!-- <h1 class="title">About</h1> -->
            <h2 class="subtitle">
              This is the personal page of <strong>Patrick Beard</strong>. Currently highlighting past projects.
            </h2>
            <p>This SPA is written using <a href="vuejs.org">Vue.JS</a> </p>
        </section>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .no-margin{
    margin:0px;
  }
  .padding{
    padding:12px;
  }
  img{
    /* border-radius:2%; */
  }
</style>