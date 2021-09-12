export default {
    state: {
        items: []
    },
    mutations: {
        "breadcrumb-add": function (state,data) {
            state.items.push(data);
        }
    }
};