// 公共组件
import Header from './component/header';
import Icon from './component/icon';
import List from './component/list';
import Switch from './component/switch';
import Tag from './component/tag';

// 实例方法
import Toast from './component/toast';
import Waiting from './component/waiting';

const flyme = {
    Header,
    Icon,
    List: List.List,
    ListItem: List.ListItem,
    SwitchList: List.SwitchList,
    Switch,
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
        Vue.prototype.$waiting = Waiting;
    }
}