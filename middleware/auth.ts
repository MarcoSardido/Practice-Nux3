export default defineNuxtRouteMiddleware((to, from) => {
    // console.log('hello from middleware')
    const isLoggedIn = false
    // To is the destination
    if (isLoggedIn) {
        // redirect to dashboard
        return navigateTo(to.fullPath)
    }
    // redirect to login page
})