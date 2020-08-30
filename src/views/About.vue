<template>
  <div class="about">
    <h1>This is posts page</h1>
    <div class="row">
      <div class="col-sm-6" v-for="(item , index) in getPosts" v-bind:key="index">
        <div class="card" style="height: 200px">
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.body}}</p>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Home",
  computed: {
    getPosts() {
      return this.$store.getters.allPosts;
    },
  },
  components: {},
  methods: {},
  mounted() {
    this.$store.dispatch("getdata");
  },
};
</script>