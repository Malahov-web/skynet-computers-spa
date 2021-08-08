export const formFieldsMixin = {
    // mounted() {
    //     console.log('hello from mixin!');
    // },

    inheritAttrs: false,

    props: {
        label: {
            type: [String, Number],
            default: "",
        },
    },

    computed: {
        elClass() {
            let className = this.$attrs.elClass;

            if (this.$attrs["stateClass"]) {
                className += " " + this.$attrs["stateClass"];
                // className += " mystr";
            }
            return className;
        },

        listeners() {
            return {
                ...this.$listeners,
                input: this.updateValue,
            };
        },
    },

    methods: {
        onInput(event) {
            this.$emit("input", event.target.value);
        },
    },
};