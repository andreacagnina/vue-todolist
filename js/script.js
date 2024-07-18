const app = Vue.createApp({
    data() {
        return {

            toDoArray: [
                {
                    activity: 'Spolverare',
                    done: true
                },
                {
                    activity: "Passare l'aspirapolvere",
                    done: false
                },
                {
                    activity: 'Passare lo straccio',
                    done: false
                },
                {
                    activity: 'Svuotare la lavastoviglie',
                    done: true
                },
                {
                    activity: 'Avviare la lavatrice',
                    done: false
                },

            ]

        }
    }
})

app.mount('#app')