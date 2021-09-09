const install = (Vue, opts = {}) => {
    Vue.prototype.$baseLoading = (text, icon) => {
        alert(text,icon)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default install