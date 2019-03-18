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
            <div class="teacher-card-social">
                <hr>
                  <div class="teacher-card-social_icons">
                    <a href=""><img src="/img/article/teachers/Twitter.svg" alt="Twitter Logo"></a>
                    <a href=""><img src="/img/article/teachers/Facebook.svg" alt="Facebook Logo"></a>
                    <a href=""><img src="/img/article/teachers/instagram.svg" alt="Instagram Logo"></a>
                  </div>
                <hr>
            </div>
            <div class="teacher-card-quote">
                <p>{{ quote }}</p>
            </div>
        </div>
    `,
    props: {
      teacher: {
        type: String,
        default: 'teacher'
      },
      title: {
        type: String,
        default: 'title'
      },
      quote: {
        type: String,
        default: 'quote'
      },
      animation: {
        type: String,
        default: 'rightToLeft'
      }
    },
    data() {
      return {

      }
    }
  })

  const vm = new Vue({
    el: ".teacher-cards",
    data: {
    },
    computed: {
    },
    methods: {
    },
    mounted() {
    }
  });