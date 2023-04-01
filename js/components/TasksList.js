import Task from "./Task.js";
import TaskTags from "./TaskTags.js";

export default {
    components: { Task, TaskTags },

    template: `
        <section v-show="tasks.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ tasks.length }})</span>
            </h2>
    
            <task-tags 
                v-bind:initial-tags="tasks.map(a => a.tag)"
                v-bind:current-tag="currentTag"
                v-on:change="currentTag = $event"
            />
            
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <task 
                    v-for="task in filteredTasks"
                    :key="task.id"
                    v-bind:task="task"
                ></task>
            </ul>
        </section>
    `,

    props: {
        tasks: Array,
        title: String
    },

    data() {
        return {
            currentTag: 'All'
        };
    },

    computed: {
        filteredTasks() {
            if(this.currentTag === 'All') {
                return this.tasks;
            }

            return this.tasks.filter(a => a.tag === this.currentTag);
        },
    }
}