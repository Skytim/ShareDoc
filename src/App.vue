<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg">
        <b-link> </b-link>
        <b-link href="javascript:void(0)" to="/">
          <b-icon icon="book"></b-icon>
         ShareDoc
        </b-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
           <b-nav-item href="javascript:void(0)" to="/">Edit</b-nav-item>
            <b-nav-item href="javascript:void(0)" to="about"
              >Mirror</b-nav-item
            >
            <b-nav-item href="javascript:void(0)" to="/">Readonly</b-nav-item>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>
<script>

</script>

