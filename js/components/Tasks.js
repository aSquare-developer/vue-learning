import TasksList from "./TasksList.js";

export default {
    components: { TasksList },

    template: `
        <section class="space-y-6">
            <tasks-list v-bind:tasks="filters.inProgress" title="In progress"></tasks-list>
            <tasks-list v-bind:tasks="filters.completed" title="Completed"></tasks-list>
        </section>
    `,

    data() {
        return {
            tasks: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 },
            ]
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.tasks.filter(task => ! task.complete),
                completed: this.tasks.filter(task => task.complete)
            };
        }
    }
}