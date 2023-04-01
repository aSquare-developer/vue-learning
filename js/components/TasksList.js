import Task from "./Task.js";

export default {
    components: { Task },

    template: `
        <section v-show="tasks.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ tasks.length }})</span>
            </h2>
    
            <div class="flex gap-2">
                <button 
                    v-on:click="currentTag = tag"
                    v-for="tag in tags" 
                    class="border rounded px-1 py-px text-xs"
                    v-bind:class="{
                        'border-blue-500 text-blue-500': tag === currentTag
                    }"
                >
                    {{ tag }}
                </button>
            </div>
            
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

        tags() {
            return ['All', ...new Set(this.tasks.map(a => a.tag))];
        }
    }
}