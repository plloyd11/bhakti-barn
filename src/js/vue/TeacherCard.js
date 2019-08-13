Vue.component('teachercard', {
    template: `
        <div class="card teacher-card">
            <div class="teacher-card-image">
                <slot name="image"></slot>
            </div>
            <div class=teacher-card-info>
                <h2>{{ teacher }}</h2>
                <p>{{ title }}</p>
            </div>
            <div class="teacher-card-read-more">
                <hr>
                  <div class="teacher-card-read-more_link">
                    <a @click="showModal = true">Read More</a>
                  </div>
                <hr>
                <div class="teacher-card--modal" v-show="showModal">
                    <transition name="modal">
                        <div class="modal-mask">
                            <div class="modal-wrapper" @click="showModal = false">
                                <div class="modal-container" @click.stop>
                                    <div class="modal-header">
                                        <slot name="header"></slot>
                                    </div>
                                    <div class="modal-body">
                                        <slot name="body"></slot>
                                    </div>
                                    <button class="modal-default-button" @click="showModal = false">
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
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
        }
    },
    data() {
        return {
            showModal: false
        };
    }
});

new Vue({
    el: '.teacher-cards'
});
