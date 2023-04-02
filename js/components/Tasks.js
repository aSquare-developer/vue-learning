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
            tasks: [],
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

    created() {
      fetch('http://localhost:3001/tasks')
          .then(response => response.json())
          .then(tasks => {
             this.tasks = tasks
          });
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