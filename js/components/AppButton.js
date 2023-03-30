export default {
    template: `
        <button 
             v-bind:class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                'bg-blue-600 hover:bg-blue-700': type === 'primary',
                'bg-green-600 hover:bg-green-700': type === 'secondary',
                'bg-gray-600 hover:bg-gray-700': type === 'muted',
                'is-loading': processing
            }" 
            v-model:disabled="processing"
        >
            <slot />
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    }

}