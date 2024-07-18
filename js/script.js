const app = Vue.createApp({
    data() {
        return {
            toDoArray: [
                {
                    activity: '',
                    done: false
                },
                {
                    activity: '',
                    done: false
                },
                {
                    activity: '',
                    done: false
                },
                {
                    activity: '',
                    done: false
                },
                {
                    activity: '',
                    done: false
                },

            ]

        }
    }
})

app.mount('#app')