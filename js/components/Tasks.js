import TasksList from "./TasksList.js";
import TaskCreate from "./TaskCreate.js";

export default {
    components: { TasksList, TaskCreate },

    template: `
        <section class="flex gap-8">
            <tasks-list v-bind:tasks="filters.inProgress" title="In progress">
                <task-create v-on:add="add" ></task-create>
            </tasks-list>
            
            <div v-show="showCompleted">
                <tasks-list
                    v-bind:tasks="filters.completed" 
                    title="Completed" 
                    can-toggle
                    v-on:toggle="showCompleted = !showCompleted"
                ></tasks-list>
            </div>
        </section>
    `,

    data() {
        return {
            tasks: [],
            showCompleted: true
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