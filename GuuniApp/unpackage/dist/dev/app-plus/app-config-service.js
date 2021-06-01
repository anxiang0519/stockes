
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/example/components","uview-ui/components/u-avatar-cropper/u-avatar-cropper","pages/example/js","pages/example/template","uview-ui/components/u-full-screen/u-full-screen","pages/home/Home","pages/hangqing/Hangqing","pages/zixuanList/ZixuanList","pages/news/News","pages/componentsC/test/index","pages/componentsC/gap/index","pages/componentsC/subsection/index","pages/componentsC/section/index","pages/componentsC/link/index","pages/componentsC/mask/index","pages/componentsC/countTo/index","pages/componentsC/color/index","pages/componentsC/countDown/index","pages/componentsC/progress/index","pages/componentsC/alertTips/index","pages/componentsC/badge/index","pages/componentsC/button/index","pages/componentsC/collapse/index","pages/componentsC/actionSheet/index","pages/componentsC/messageInput/index","pages/componentsC/popup/index","pages/componentsC/cell/index","pages/componentsC/numberBox/index","pages/componentsC/grid/index","pages/componentsC/layout/index","pages/componentsC/loadmore/index","pages/template/wxCenter/index","pages/template/keyboardPay/index","pages/template/mallMenu/index2","pages/template/mallMenu/index1","pages/template/coupon/index","pages/template/login/index","pages/template/citySelect/index","pages/template/submitBar/index","pages/template/comment/index","pages/template/comment/reply","pages/template/order/index","pages/template/login/code","pages/template/address/index","pages/template/address/addSite","pages/library/debounce/index","pages/library/deepClone/index","pages/library/deepMerge/index","pages/library/getRect/index","pages/library/timeFrom/index","pages/library/globalVariable/globalData","pages/library/globalVariable/prototype","pages/library/globalVariable/vuex","pages/library/globalVariable/index","pages/library/http/index","pages/library/test/index","pages/library/mpShare/index","pages/library/color/index","pages/library/trim/index","pages/library/random/index","pages/library/md5/index","pages/library/colorSwitch/index","pages/library/randomArray/index","pages/library/guid/index","pages/library/timeFormat/index","pages/library/route/index","pages/library/route/routeTo","pages/library/queryParams/index","pages/componentsA/parse/index","pages/componentsA/backTop/index","pages/componentsA/calendar/index","pages/componentsA/form/index","pages/componentsA/select/index","pages/componentsA/slider/index","pages/componentsA/fullScreen/index","pages/componentsA/navbar/index","pages/componentsA/field/index","pages/componentsA/modal/index","pages/componentsA/indexList/index","pages/componentsA/empty/index","pages/componentsA/avatarCropper/index","pages/componentsA/noNetwork/index","pages/componentsA/icon/index","pages/componentsA/avatar/index","pages/componentsA/keyboard/index","pages/componentsA/lazyLoad/index","pages/componentsA/tabs/index","pages/componentsA/tag/index","pages/componentsA/timeLine/index","pages/componentsA/toast/index","pages/componentsA/topTips/index","pages/componentsA/verificationCode/index","pages/componentsB/dropdown/index","pages/componentsB/tabbar/index","pages/componentsB/line/index","pages/componentsB/image/index","pages/componentsB/card/index","pages/componentsB/divider/index","pages/componentsB/picker/index","pages/componentsB/noticeBar/index","pages/componentsB/checkbox/index","pages/componentsB/radio/index","pages/componentsB/loading/index","pages/componentsB/switch/index","pages/componentsB/skeleton/index","pages/componentsB/upload/index","pages/componentsB/waterfall/index","pages/componentsB/table/index","pages/componentsB/rate/index","pages/componentsB/readMore/index","pages/componentsB/search/index","pages/componentsB/steps/index","pages/componentsB/sticky/index","pages/componentsB/swiper/index","pages/componentsB/swipeAction/index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uView","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#909399","selectedColor":"#303133","backgroundColor":"#FFFFFF","borderStyle":"black","list":[{"pagePath":"pages/home/Home","iconPath":"static/uview/example/component.png","selectedIconPath":"static/uview/example/component_select.png","text":"首页"},{"pagePath":"pages/hangqing/Hangqing","iconPath":"static/uview/example/js.png","selectedIconPath":"static/uview/example/js_select.png","text":"行情"},{"pagePath":"pages/zixuanList/ZixuanList","iconPath":"static/uview/example/template.png","selectedIconPath":"static/uview/example/template_select.png","text":"自选"},{"pagePath":"pages/news/News","iconPath":"static/uview/example/template.png","selectedIconPath":"static/uview/example/template_select.png","text":"资讯"}]},"preloadRule":{"pages/example/components":{"network":"all","packages":["pages/componentsA","pages/componentsB","pages/componentsC"]}},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"GuuniApp","compilerVersion":"3.1.11","subPackages":[{"root":"pages/componentsC"},{"root":"pages/template"},{"root":"pages/library"},{"root":"pages/componentsA"},{"root":"pages/componentsB"}],"entryPagePath":"pages/example/components","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/example/components","meta":{"isQuit":true},"window":{"navigationBarTitleText":"组件"}},{"path":"/uview-ui/components/u-avatar-cropper/u-avatar-cropper","meta":{},"window":{"navigationBarTitleText":"头像裁剪","navigationBarBackgroundColor":"#000000"}},{"path":"/pages/example/js","meta":{},"window":{"navigationBarTitleText":"工具"}},{"path":"/pages/example/template","meta":{},"window":{"navigationBarTitleText":"模板"}},{"path":"/uview-ui/components/u-full-screen/u-full-screen","meta":{},"window":{"navigationStyle":"custom","animationType":"fade-in","background":"transparent","backgroundColor":"rgba(0,0,0,0)","popGesture":"none"}},{"path":"/pages/home/Home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/pages/hangqing/Hangqing","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"行情"}},{"path":"/pages/zixuanList/ZixuanList","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"自选"}},{"path":"/pages/news/News","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"资讯"}},{"path":"/pages/componentsC/test/index","meta":{},"window":{"navigationBarTitleText":"Test"}},{"path":"/pages/componentsC/gap/index","meta":{},"window":{"navigationBarTitleText":"gap-间隔槽"}},{"path":"/pages/componentsC/subsection/index","meta":{},"window":{"navigationBarTitleText":"subsection-分段器"}},{"path":"/pages/componentsC/section/index","meta":{},"window":{"navigationBarTitleText":"section-查看更多"}},{"path":"/pages/componentsC/link/index","meta":{},"window":{"navigationBarTitleText":"link-链接"}},{"path":"/pages/componentsC/mask/index","meta":{},"window":{"navigationBarTitleText":"mask-遮罩层"}},{"path":"/pages/componentsC/countTo/index","meta":{},"window":{"navigationBarTitleText":"countTo-数字滚动"}},{"path":"/pages/componentsC/color/index","meta":{},"window":{"navigationBarTitleText":"color-颜色"}},{"path":"/pages/componentsC/countDown/index","meta":{},"window":{"navigationBarTitleText":"countDown-倒计时"}},{"path":"/pages/componentsC/progress/index","meta":{},"window":{"navigationBarTitleText":"progress-进度条"}},{"path":"/pages/componentsC/alertTips/index","meta":{},"window":{"navigationBarTitleText":"alertTips-警告提示"}},{"path":"/pages/componentsC/badge/index","meta":{},"window":{"navigationBarTitleText":"badge-徽标数"}},{"path":"/pages/componentsC/button/index","meta":{},"window":{"navigationBarTitleText":"button-按钮"}},{"path":"/pages/componentsC/collapse/index","meta":{},"window":{"navigationBarTitleText":"collapse-折叠面板"}},{"path":"/pages/componentsC/actionSheet/index","meta":{},"window":{"navigationBarTitleText":"actionSheet-操作菜单"}},{"path":"/pages/componentsC/messageInput/index","meta":{},"window":{"navigationBarTitleText":"messageInput-验证码输入"}},{"path":"/pages/componentsC/popup/index","meta":{},"window":{"navigationBarTitleText":"popup-弹窗"}},{"path":"/pages/componentsC/cell/index","meta":{},"window":{"navigationBarTitleText":"listCell-列表"}},{"path":"/pages/componentsC/numberBox/index","meta":{},"window":{"navigationBarTitleText":"numberBox-步进器"}},{"path":"/pages/componentsC/grid/index","meta":{},"window":{"navigationBarTitleText":"grid-宫格布局"}},{"path":"/pages/componentsC/layout/index","meta":{},"window":{"navigationBarTitleText":"layout-栅格布局"}},{"path":"/pages/componentsC/loadmore/index","meta":{},"window":{"navigationBarTitleText":"loadmore-加载更多"}},{"path":"/pages/template/wxCenter/index","meta":{},"window":{"navigationBarTitleText":"wxCenter 仿微信个人中心","navigationStyle":"custom"}},{"path":"/pages/template/keyboardPay/index","meta":{},"window":{"navigationBarTitleText":"keyboardPay 自定义键盘支付"}},{"path":"/pages/template/mallMenu/index2","meta":{},"window":{"navigationBarTitleText":"mallMenu-商城分类"}},{"path":"/pages/template/mallMenu/index1","meta":{},"window":{"navigationBarTitleText":"mallMenu-商城分类"}},{"path":"/pages/template/coupon/index","meta":{},"window":{"navigationBarTitleText":"coupon-优惠券"}},{"path":"/pages/template/login/index","meta":{},"window":{"navigationBarTitleText":"美团登录"}},{"path":"/pages/template/citySelect/index","meta":{},"window":{"navigationBarTitleText":"城市选择"}},{"path":"/pages/template/submitBar/index","meta":{},"window":{"navigationBarTitleText":"提交订单栏"}},{"path":"/pages/template/comment/index","meta":{},"window":{"navigationBarTitleText":"评论"}},{"path":"/pages/template/comment/reply","meta":{},"window":{"navigationBarTitleText":"评论详情"}},{"path":"/pages/template/order/index","meta":{},"window":{"navigationBarTitleText":"订单"}},{"path":"/pages/template/login/code","meta":{},"window":{"navigationBarTitleText":"登录获取验证码"}},{"path":"/pages/template/address/index","meta":{},"window":{"navigationBarTitleText":"用户地址"}},{"path":"/pages/template/address/addSite","meta":{},"window":{"navigationBarTitleText":"添加用户地址"}},{"path":"/pages/library/debounce/index","meta":{},"window":{"navigationBarTitleText":"throttle | debounce-节流防抖"}},{"path":"/pages/library/deepClone/index","meta":{},"window":{"navigationBarTitleText":"deepClone-对象深度克隆"}},{"path":"/pages/library/deepMerge/index","meta":{},"window":{"navigationBarTitleText":"deepMerge-对象深度合并"}},{"path":"/pages/library/getRect/index","meta":{},"window":{"navigationBarTitleText":"getRect-元素节点"}},{"path":"/pages/library/timeFrom/index","meta":{},"window":{"navigationBarTitleText":"timeFrom-多久之前"}},{"path":"/pages/library/globalVariable/globalData","meta":{},"window":{"navigationBarTitleText":"globalData-全局变量"}},{"path":"/pages/library/globalVariable/prototype","meta":{},"window":{"navigationBarTitleText":"prototype-全局变量"}},{"path":"/pages/library/globalVariable/vuex","meta":{},"window":{"navigationBarTitleText":"vuex-全局变量"}},{"path":"/pages/library/globalVariable/index","meta":{},"window":{"navigationBarTitleText":"globalVariable-全局变量"}},{"path":"/pages/library/http/index","meta":{},"window":{"navigationBarTitleText":"http-请求"}},{"path":"/pages/library/test/index","meta":{},"window":{"navigationBarTitleText":"test-规则验证"}},{"path":"/pages/library/mpShare/index","meta":{},"window":{"navigationBarTitleText":"mpShare-小程序分享"}},{"path":"/pages/library/color/index","meta":{},"window":{"navigationBarTitleText":"color-JS调用颜色"}},{"path":"/pages/library/trim/index","meta":{},"window":{"navigationBarTitleText":"trim-去除空格"}},{"path":"/pages/library/random/index","meta":{},"window":{"navigationBarTitleText":"random-随机数生成"}},{"path":"/pages/library/md5/index","meta":{},"window":{"navigationBarTitleText":"md5-加密"}},{"path":"/pages/library/colorSwitch/index","meta":{},"window":{"navigationBarTitleText":"colorSwitch-颜色转换"}},{"path":"/pages/library/randomArray/index","meta":{},"window":{"navigationBarTitleText":"randomArray-数组乱序"}},{"path":"/pages/library/guid/index","meta":{},"window":{"navigationBarTitleText":"guid-全局唯一标识符"}},{"path":"/pages/library/timeFormat/index","meta":{},"window":{"navigationBarTitleText":"timeFormat-时间格式化"}},{"path":"/pages/library/route/index","meta":{},"window":{"navigationBarTitleText":"route-路由"}},{"path":"/pages/library/route/routeTo","meta":{},"window":{"navigationBarTitleText":"route-路由跳转"}},{"path":"/pages/library/queryParams/index","meta":{},"window":{"navigationBarTitleText":"queryParams-对象转URL参数"}},{"path":"/pages/componentsA/parse/index","meta":{},"window":{"navigationBarTitleText":"parse-富文本解析器"}},{"path":"/pages/componentsA/backTop/index","meta":{},"window":{"navigationBarTitleText":"backTop-返回顶部"}},{"path":"/pages/componentsA/calendar/index","meta":{},"window":{"navigationBarTitleText":"calendar-日历"}},{"path":"/pages/componentsA/form/index","meta":{},"window":{"navigationBarTitleText":"form-表单"}},{"path":"/pages/componentsA/select/index","meta":{},"window":{"navigationBarTitleText":"select-列选择器"}},{"path":"/pages/componentsA/slider/index","meta":{},"window":{"navigationBarTitleText":"slider-滑动选择器"}},{"path":"/pages/componentsA/fullScreen/index","meta":{},"window":{"navigationBarTitleText":"fullScreen-压窗屏"}},{"path":"/pages/componentsA/navbar/index","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/componentsA/field/index","meta":{},"window":{"navigationBarTitleText":"field-输入框"}},{"path":"/pages/componentsA/modal/index","meta":{},"window":{"navigationBarTitleText":"modal-模态框"}},{"path":"/pages/componentsA/indexList/index","meta":{},"window":{"navigationBarTitleText":"indexList-索引列表"}},{"path":"/pages/componentsA/empty/index","meta":{},"window":{"navigationBarTitleText":"empty-内容为空"}},{"path":"/pages/componentsA/avatarCropper/index","meta":{},"window":{"navigationBarTitleText":"avatarCropper-头像裁剪"}},{"path":"/pages/componentsA/noNetwork/index","meta":{},"window":{"navigationBarTitleText":"noNetwork-没有网络"}},{"path":"/pages/componentsA/icon/index","meta":{},"window":{"navigationBarTitleText":"icon-字体图标"}},{"path":"/pages/componentsA/avatar/index","meta":{},"window":{"navigationBarTitleText":"avatar-用户头像展示"}},{"path":"/pages/componentsA/keyboard/index","meta":{},"window":{"navigationBarTitleText":"keyboard-键盘"}},{"path":"/pages/componentsA/lazyLoad/index","meta":{},"window":{"navigationBarTitleText":"lazyLoad-懒加载"}},{"path":"/pages/componentsA/tabs/index","meta":{},"window":{"navigationBarTitleText":"Tabs-切换"}},{"path":"/pages/componentsA/tag/index","meta":{},"window":{"navigationBarTitleText":"tag-标签"}},{"path":"/pages/componentsA/timeLine/index","meta":{},"window":{"navigationBarTitleText":"timeLine-时间轴"}},{"path":"/pages/componentsA/toast/index","meta":{},"window":{"navigationBarTitleText":"toast-轻提示"}},{"path":"/pages/componentsA/topTips/index","meta":{},"window":{"navigationBarTitleText":"topTips-消息提示"}},{"path":"/pages/componentsA/verificationCode/index","meta":{},"window":{"navigationBarTitleText":"Code-验证码倒计时"}},{"path":"/pages/componentsB/dropdown/index","meta":{},"window":{"navigationBarTitleText":"dropdown-下拉菜单"}},{"path":"/pages/componentsB/tabbar/index","meta":{},"window":{"navigationBarTitleText":"tabbar-底部导航栏"}},{"path":"/pages/componentsB/line/index","meta":{},"window":{"navigationBarTitleText":"line-线条"}},{"path":"/pages/componentsB/image/index","meta":{},"window":{"navigationBarTitleText":"image-图片"}},{"path":"/pages/componentsB/card/index","meta":{},"window":{"navigationBarTitleText":"card-卡片"}},{"path":"/pages/componentsB/divider/index","meta":{},"window":{"navigationBarTitleText":"divider-分割线"}},{"path":"/pages/componentsB/picker/index","meta":{},"window":{"navigationBarTitleText":"picker-选择器"}},{"path":"/pages/componentsB/noticeBar/index","meta":{},"window":{"navigationBarTitleText":"noticeBar-通告栏"}},{"path":"/pages/componentsB/checkbox/index","meta":{},"window":{"navigationBarTitleText":"checkbox-复选框"}},{"path":"/pages/componentsB/radio/index","meta":{},"window":{"navigationBarTitleText":"radio-单选框"}},{"path":"/pages/componentsB/loading/index","meta":{},"window":{"navigationBarTitleText":"loading-加载动画"}},{"path":"/pages/componentsB/switch/index","meta":{},"window":{"navigationBarTitleText":"switch-开关选择器"}},{"path":"/pages/componentsB/skeleton/index","meta":{},"window":{"navigationBarTitleText":"skeleton-骨架屏"}},{"path":"/pages/componentsB/upload/index","meta":{},"window":{"navigationBarTitleText":"upload-上传"}},{"path":"/pages/componentsB/waterfall/index","meta":{},"window":{"navigationBarTitleText":"waterfall-瀑布流"}},{"path":"/pages/componentsB/table/index","meta":{},"window":{"navigationBarTitleText":"table-表格"}},{"path":"/pages/componentsB/rate/index","meta":{},"window":{"navigationBarTitleText":"rate-评分"}},{"path":"/pages/componentsB/readMore/index","meta":{},"window":{"navigationBarTitleText":"readMore-查看更多"}},{"path":"/pages/componentsB/search/index","meta":{},"window":{"navigationBarTitleText":"search-搜索框"}},{"path":"/pages/componentsB/steps/index","meta":{},"window":{"navigationBarTitleText":"steps-步骤条"}},{"path":"/pages/componentsB/sticky/index","meta":{},"window":{"navigationBarTitleText":"sticky-吸顶"}},{"path":"/pages/componentsB/swiper/index","meta":{},"window":{"navigationBarTitleText":"swiper-轮播图"}},{"path":"/pages/componentsB/swipeAction/index","meta":{},"window":{"navigationBarTitleText":"swipeAction-左滑删除"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
