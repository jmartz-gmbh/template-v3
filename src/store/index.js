import { createStore } from 'vuex'
import moduleBreadcrumb from '@/store/modules/breadcrumb.js';
import moduleNav from '@/store/modules/nav.js';
import moduleSeo from '@/store/modules/seo.js';
import moduleMessages from '@/store/modules/messages.js';

const store = createStore({
    modules: {
        nav: moduleNav,
        seo: moduleSeo,
        messages: moduleMessages,
        breadcrumb: moduleBreadcrumb,
    }
})

export default store;