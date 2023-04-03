export default {
    template: `
        <form action="" v-on:submit.prevent="add">
            <div class="border border-gray-600 text-black flex">
                <input v-model="newTask" type="text" placeholder="New task..." class="p-2" required>
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newTask: ''
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newTask);
            // this.tasks.push({
            //     name: this.newTask,
            //     completed: false,
            //     id: this.tasks.length + 1
            // });

            this.newTask = '';
        }
    }
}