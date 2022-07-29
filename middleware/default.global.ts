export default defineNuxtRouteMiddleware((to, from) => {
  if (to.fullPath =="/")
  {
    return "/en/blog";
  }
  if (to.fullPath =="/en/")
  {
    return "/en/blog";
  }
  if (to.fullPath =="/de/")
  {
    return "/de/blog";
  }
})
