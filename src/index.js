// 公共组件
import Header from './component/header';
import Icon from './component/icon';
import Tag from './component/tag';

// 实例方法
import Toast from './component/toast';

const flyme = {
    Header,
    Icon,
    Tag
}

export default {
    install(Vue, options) {

        // 自动注册组件
        Object.keys(flyme).forEach((key) => {
            Vue.component(`fm${key}`, flyme[key]);
        });

        // 添加实例方法
        Vue.prototype.$toast = Toast;
    }
}