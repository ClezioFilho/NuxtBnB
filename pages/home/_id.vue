<template>
  <div class="app-container">
    <PropertyGallery :images="home.images"/>
    <PropertyDetails :home="home"/>
    <PropertyDescription :home="home" />
    <PropertyMap :home="home" />
    <PropertyReviews :reviews="reviews"/>
    <PropertyHost :user="user" />
  </div>
</template>

<script>
import PropertyDescription from '../../components/PropertyDescription.vue'
import PropertyMap from '../../components/PropertyMap.vue'
import ShortText from '../../components/ShortText.vue'

export default {
  components: { ShortText, PropertyDescription, PropertyMap },
  head() {
    return { 
      title: this.home.title
    }
  },

  async asyncData({params, $dataApi, error}) {
    const responses = await Promise.all([
      $dataApi.getHome(params.id),
      $dataApi.getReviewsbyHomeId(params.id),
      $dataApi.getUserbyHomeId(params.id),
    ])

    const badResponse = responses.find((response) => !response.ok)
    if (badResponse) return error({statusCode: badResponse.status, message: badResponse.statusText})
    
    return {
      home: responses[0].json,
      reviews: responses[1].json.hits,
      user: responses[2].json.hits[0]
    }
  },
}
</script>
