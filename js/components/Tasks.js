import TasksList from "./TasksList.js";

export default {
    components: { TasksList },

    template: `
        <section class="space-y-6">
            <tasks-list v-bind:tasks="filters.inProgress" title="In progress"></tasks-list>
            <tasks-list v-bind:tasks="filters.completed" title="Completed"></tasks-list>
            
            <form action="" v-on:submit.prevent="add">
                <div class="border border-gray-600 text-black">
                    <input v-model="newTask" type="text" placeholder="New task..." class="p-2">
                    <button type="submit" class="bg-white p-2 border-l">Add</button>
                </div>
            </form>
            
        </section>
    `,

    data() {
        return {
            tasks: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 },
            ],

            newTask: ''
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.tasks.filter(task => ! task.complete),
                completed: this.tasks.filter(task => task.complete)
            };
        }
    },

    methods: {
        add() {
            this.tasks.push({
                name: this.newTask,
                completed: false,
                id: this.tasks.length + 1
            });

            this.newTask = '';
        }
    }
}