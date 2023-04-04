import Task from "./Task.js";
import TaskTags from "./TaskTags.js";
import Panel from "./Panel.js";

export default {
    components: { Task, TaskTags, Panel },

    template: `
        <panel v-show="tasks.length" class="w-60">
            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">
                    {{ title }}
                    <span>({{ tasks.length }})</span>
                </h2>
                
                <button v-show="canToggle" v-on:click="$emit('toggle')">&times;</button>
            </div>
            
            <task-tags 
                v-model:currentTag="currentTag"
                v-bind:initial-tags="tasks.map(a => a.tag)"
            />
            
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <task 
                    v-for="task in filteredTasks"
                    :key="task.id"
                    v-bind:task="task"
                ></task>
            </ul>
            
            <slot></slot>
            
<!--            <template v-slot:footer>-->
<!--                My footer goes here!-->
<!--            </template>-->
        </panel>
    `,

    props: {
        tasks: Array,
        title: String,
        canToggle: { type: Boolean, default: false }
    },

    data() {
        return {
            currentTag: 'All',
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