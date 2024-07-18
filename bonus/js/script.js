const app = Vue.createApp({
    data() {
        return {
            activityName: null,

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
    },
    methods: {
        deleteItem(i) {
            this.toDoArray.splice(i, 1);
        },
        addItem() {
            if (this.AddNewToDo != null) {
                let newIndex = {
                    activity: this.AddNewToDo,
                    done: false,
                }
                this.toDoArray.push(newIndex)
                this.AddNewToDo = null
            }
        }

    }
})

app.mount('#app')