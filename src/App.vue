<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    

    <div class="wrapper">
      
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <RouterLink class="navbar-brand" to="/">Navbar</RouterLink>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link active"  to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About Us</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/employees">Employees</RouterLink>
        </li>
        
      
      </ul>
      
    </div>
  </div>
</nav>
      
    </div>
  </header>

  <RouterView />
</template>


