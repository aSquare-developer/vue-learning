import Task from "./Task.js";

export default {
    components: { Task },

    template: `
        <section v-show="tasks.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>
    
            <ul>
                <task 
                    v-for="task in tasks"
                    :key="task.id"
                    v-bind:task="task"
                ></task>
            </ul>
        </section>
    `,

    props: {
        tasks: Array,
        title: String
    }
}