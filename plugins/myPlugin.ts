export default defineNuxtPlugin(nuxtApp =>{
    return {
        provide: {
            sayHello: (message:string) => console.log(`Hello ${message}`)
        }
    }
})