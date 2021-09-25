<template>
  <div class="app">
    <header class="app-header">
      <div class="app-logo">
        <img src="/images/logo.svg" alt=""/>
      </div>

      <div class="app-search">
        <input type="text" ref="citySearch" @changed="changed" placeholder="Enter you address"/>
        <input type="text" class="datepicker" placeholder="Check in"/>
        <input type="text" class="datepicker" placeholder="Check out">
        <button>
          <img src="/images/icons/search.svg" alt=""/>
        </button>
      </div>

      <div class="app-user-menu">
        <img src="/images/icons/house.svg" alt=""/>
        <div class="name">Host</div>
        <img src="/images/user.jpg" class="avatar" alt=""/>
      </div>
    </header>

    <Nuxt/>
  </div>
</template>
