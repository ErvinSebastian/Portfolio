<script setup>
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutComponent.vue'
import ProjectView from './views/PortfolioComponent.vue'


</script>

<template>
      <html data-theme="dark">

            <div class="sticky top-0 z-10 backdrop-filter backdrop-blur-md bg-opacity-100 h-15 bg-gray shadow-xl">
                  <div class="flex flex-wrap items-center justify-around">
                        <div class="w-32 rounded">
                              <img src="\src\assets\images\logo-content.png"/>
                        </div>
                        
                        <ul class="menu menu-horizontal px-1">
                        <li>
                              <a class="font-bold text-lg" href="#projects">Projects</a>
                        </li>
                     
                           
                              <a href="https://www.linkedin.com/in/devervin/">
                                    <img class="my-2 w-8 h-8 rounded-full mx-2" src="/src/assets/images/linkedin.png" alt="Linkedin">
                              </a>
                              <a href="https://github.com/ErvinSebastian">
                                    <img class="my-2 w-8 h-8 rounded-full mx-2" src="/src/assets/images/github.png" alt="Github">
                              </a>
                            
                      
                        </ul>
                  </div>
            </div>
            <!-- <RouterView /> -->
            <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gray antialiased">
                  <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
                        <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                              <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white py-16">
                                    <HomeView />
                                   
                              </div>
                              <div class="divider pt-16"></div>
                              <AboutView />
                              <div class="divider py-16"></div>
                              <ProjectView />
                        </article>
                      
                  </div>
            </main>
            <footer class="footer footer-center p-4 bg-base-300 text-base-content">
                  <aside>
                        <p> 🤟 🤟 © 2023 - Ervin Sebastian</p>
                  </aside>
            </footer>
            
      
      </html>
      

</template>

<style scoped>

</style>