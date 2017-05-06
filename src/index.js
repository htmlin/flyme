// 公共组件
import Button from './component/button';
import Footer from './component/footer';
import Header from './component/header';
import Icon from './component/icon';
import List from './component/list';
import Menu from './component/menu';
import Plate from './component/plate';
import Switch from './component/switch';
import Tag from './component/tag';

// 实例方法
import Dialog from './component/dialog';
import Toast from './component/toast';
import Waiting from './component/waiting';

// 自定义指令
import Loading from './component/loading';

const flyme = {
    Button,
    Footer,
    Header,
    Icon,
    List: List.List,
    ListItem: List.ListItem,
    Menu,
    Plate,
    RadioList: List.RadioList,
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
        Vue.prototype.$alert = Dialog.alert;
        Vue.prototype.$confirm = Dialog.confirm;
        Vue.prototype.$toast = Toast;
        Vue.prototype.$waiting = Waiting;

        // 添加自定义指令
        Vue.directive('loading', Loading);
    }
}