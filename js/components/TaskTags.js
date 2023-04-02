export default {
    template: `
        <div class="flex gap-2">
            <button 
                v-on:click="$emit('update:currentTag', tag)"
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-xs"
                v-bind:class="{
                    'border-blue-500 text-blue-500': tag === currentTag
                }"
            >
                {{ tag }}
            </button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String
    },

    computed: {
        tags() {
            return ['All', ...new Set(this.initialTags)];
        }
    }
}