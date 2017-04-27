// 公共组件
import Button from './component/button';
import Header from './component/header';
import Icon from './component/icon';
import List from './component/list';
import Menu from './component/menu';
import Switch from './component/switch';
import Tag from './component/tag';

// 实例方法
import Toast from './component/toast';
import Waiting from './component/waiting';

// 自定义指令
import Loading from './component/loading';

const flyme = {
    Button,
    Header,
    Icon,
    List: List.List,
    ListItem: List.ListItem,
    Menu,
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

        // 添加自定义指令
        Vue.directive('loading', Loading);
    }
}