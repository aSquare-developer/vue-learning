import TasksList from "./TasksList.js";
import TaskCreate from "./TaskCreate.js";

export default {
    components: { TasksList, TaskCreate },

    template: `
        <section class="space-y-6">
            <tasks-list v-bind:tasks="filters.inProgress" title="In progress"></tasks-list>
            <tasks-list v-bind:tasks="filters.completed" title="Completed"></tasks-list>
            
            <task-create v-on:add="add" ></task-create>
        </section>
    `,

    data() {
        return {
            tasks: [
                { name: 'Finish project', complete: false, id: 1, tag: 'math' },
                { name: 'Read chapter 4', complete: false, id: 2, tag: 'science' },
                { name: 'Turn in homework', complete: false, id: 3, tag: 'math' },
            ],
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
        add(name) {
            this.tasks.push({
                name: name,
                completed: false,
                id: this.tasks.length + 1
            });
        }
    }
}