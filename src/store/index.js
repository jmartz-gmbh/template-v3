import { createStore } from 'vuex'
import moduleBreadcrumb from '@/store/modules/breadcrumb.js';
import moduleNav from '@/store/modules/nav.js';

const store = createStore({
    modules: {
        nav: moduleNav,
        breadcrumb: moduleBreadcrumb
    }
})

export default store;