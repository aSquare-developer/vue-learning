export default {
    template: `
        <li>
            <label>
                {{ task.name }}
                <input type="checkbox" v-model="task.complete">
            </label>
        </li>
    `,

    props: {
        task: Object
    }
}