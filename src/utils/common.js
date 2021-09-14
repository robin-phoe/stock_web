import { Loading, Message, MessageBox, Notification } from 'element-ui'

const install = (Vue, opts = {}) => {
    Vue.prototype.$baseLoading = (text, icon) => {
        const loading = Loading.service({
            lock: true,
            text: text || '加载中...',
            spinner: icon || null,
            background: 'rgba(0, 0, 0, 0.5)'
        })
        return loading
    }
      /* 全局Message */
    Vue.prototype.$baseMessage = (message, type = 'success', onClose) => {
        Message({
            offset: 120,
            showClose: true,
            message: message,
            type: type,
            dangerouslyUseHTMLString: true,
            duration: 3000,
            onClose: () => {
                if (onClose) { onClose() }
            }
        })
    }
}


if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default install