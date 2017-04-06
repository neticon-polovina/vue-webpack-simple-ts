import Vue from 'vue'
import Component from 'vue-class-component'

import Inner from './components/inner.vue'


@Component({
    components:{'inner-component':Inner}
})
export default class App extends Vue {
    msg: string= 'ts in ts file'
}

