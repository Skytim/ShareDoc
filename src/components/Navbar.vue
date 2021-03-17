<template>
  <div>
    <b-navbar toggleable="lg">
      <b-link> </b-link>
      <b-link href="javascript:void(0)" to="/">
        <b-icon icon="book"></b-icon>
        ShareDoc
      </b-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav> </b-navbar-nav>
        <div class="ml-3">
          <b-button-group>
            <b-button variant="success" to="/">Edit</b-button>
            <b-button variant="info" to="about">Mirror</b-button>
            <b-button variant="warning">Readonly</b-button>
          </b-button-group>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Navbar",
};
</script>