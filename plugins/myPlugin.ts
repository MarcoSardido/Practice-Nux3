export default defineNuxtPlugin(nuxtApp =>{
    // return {
    //     provide: {
    //         sayHello: (message:string) => console.log(`Hello ${message}`)
    //     }
    // }
    nuxtApp.hook("app:created", () => {
        console.log("hello from plugin")
    })
})