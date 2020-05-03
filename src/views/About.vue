<template>
  <div class ="container" >
    <div class=" columns padding">
        <div class = "column">
          <!-- <img src="../assets/me2.jpg">  -->

          <!-- <div class="card">
            <div class="card-image"> -->
              <figure class="image">
                <img src="../assets/me2.jpg" alt="Placeholder image">
              </figure>
            </div>
            <!-- <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img src="../assets/me2.jpg" alt="Placeholder image">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4 no-margin">Patrick Beard</p>
                    <a class="button is-small" href="https://github.com/pdbeard" target="_black">
                      <span class="icon">
                        <i class="fab fa-github"></i>
                      </span>
                      <span>Github</span>
                  </a>
                </div>
              </div>
            </div> -->
          <!-- </div> -->

        <!-- </div> -->
        <section class="column">
            <!-- <h1 class="title">About</h1> -->
            <h2 class="subtitle">
              Personal page of <strong>Patrick Beard</strong>. <P>Currently highlighting past projects.</p>
            </h2>
            <p>This site was created using <a href="vuejs.org">Vue.JS</a> and <a href="https://bulma.io/">Bulma</a></p><br />
            <p>Most of the code for these projects can be found on my </p> <a href="https://github.com/pdbeard">Github.</a> Including the code for this page. 
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
    border-radius:2%;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
  }
</style>