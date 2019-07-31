Vue.component("teachercard", {
    template: `
        <div class="card teacher-card">
            <div class="teacher-card-image">
                <slot></slot>
            </div>
            <div class=teacher-card-info>
                <h2>{{ teacher }}</h2>
                <p>{{ title }}</p>
            </div>
            <div class="teacher-card-read-more">
                <hr>
                  <div class="teacher-card-read-more_link">
                    <a href="#">Read More</a>
                  </div>
                <hr>
            </div>
        </div>
    `,
    props: {
        teacher: {
            type: String,
            default: "teacher"
        },
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
        return {};
    }
});

const vm = new Vue({
    el: ".teacher-cards",
    data: {},
    computed: {},
    methods: {},
    mounted() {}
});
