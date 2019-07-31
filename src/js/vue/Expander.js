Vue.component("Expander", {
    template: `
        <div class="Expander">
            <div class="Expander__trigger" 
                @click="open=!open" 
                :class="open?'active':'beforeBorder'">
                <svg 
                    class="Expander__trigger-Icon" 
                    :class="{open:open}" 
                    width="40" height="12" 
                    stroke="cornflowerblue">
                    <polyline points="12,2 20,10 28,2" stroke-width="3" fill="none"></polyline>
                </svg>
                {{ title }}
            </div>
            <transition :name="animation">
                <div class="Expander__body" v-show="open">
                    <slot></slot>
                </div>
            </transition>
        </div>
    `,
    props: {
        title: {
            type: String,
            default: "title"
        },
        animation: {
            type: String,
            default: "rightToLeft"
        }
    },
    data() {
        return {
            open: false
        };
    }
});

const vm = new Vue({
    el: ".expanderSection",
    data: {},
    computed: {},
    methods: {},
    mounted() {}
});
