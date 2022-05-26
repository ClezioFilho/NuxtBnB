<template>
  <div>
    <div
      class="app-house-header"
      :style="`background-image:url(${home.images[0]})`"
    ></div>

    <div class="app-house-body">
      <img src="/images/icons/heart.svg" class="app-fav" />
      <h2>{{ home.title }}</h2>

      <div class="app-adress">
        {{ home.location.address }} {{ home.location.city }}
        {{ home.location.state }}
      </div>

      <div class="app-amenities"></div>

      <div class="app-flex">
        <p>
          {{ pluralize(home.guests, "guest") }},
          {{ pluralize(home.bedrooms, "room") }},
          {{ pluralize(home.beds, "bed") }},
          {{ pluralize(home.bathrooms, "bath") }}
        </p>
      </div>

      <div class="app-flex">
        <div class="app-raiting">
          {{ home.reviewValue }}
          <span>{{ home.reviewCount }}</span>
        </div>

        <div class="app-price">
          ${{ home.pricePerNight }}<span>/ night</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pluralize from "~/utils/pluralize";

export default {
  props: {
    home: {
      required: true,
      type: Object,
    },
  },

  computed: {
    features() {
      return this.home.features.slice(0, 3).join(", ");
    },
  },

  methods: {
    pluralize,
  },
};
</script>
