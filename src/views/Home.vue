<template>
  <div class="home">
    <Hero />
    <div class="scrollable-content">
      <section>
        <h2>Our Story</h2>
        <p>
          XiaoCi's Chic Accessories represents the finest quality of design and craftsmanship. Explore the elegance in every detail.
        </p>
      </section>
      <section>
        <h2>Our Products</h2>
        <p>Experience the sophistication and beauty of our exclusive collection.</p>
      </section>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';

export default {
  components: {
    Hero,
  },
};
</script>

<style scoped>
.home {
  text-align: center;
}

.scrollable-content section {
  padding: 50px;
  background-color: #ffffff;
  margin-bottom: 10px;
}

.scrollable-content section h2 {
  font-size: 2rem;
  color: #333;
}

.scrollable-content section p {
  font-size: 1.2rem;
  color: #666;
}
</style>
