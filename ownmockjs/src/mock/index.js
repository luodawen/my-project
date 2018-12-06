import Mock from 'mockjs';//调入mockjs 来模拟数据
let debug = 1;
if(debug){ 
    Mock.mock('/login',{ //Mock.mock('url','post/get','data') url表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。例如 /\/domain\/list\.json/、'/domian/list.json'
        data:{
            userId: "@integer(1,10)", //用户Id，生成1到10位数的整数
            "userName|1":["鲁班七号", "夏侯惇","蔡文姬", "王昭君", "妲己"],//用户名，在数组中随机取一个名称
            token:"@string(30)" //用户介绍  随机生成30个字符串
        },
        msg:"Success", //登录成功显示的信息
        status:"YQ-000" //登录成功返回的状态码
    });
    Mock.mock(/getMenu/,{ //url可以是正则
        data:{
            menu:[
                {
                    name:"项目管理",
                    name_en:"Project",
                    router:"/",  //可跳转到根路由上
                    icon:"el-icon-time",//图标，引用的是element UI组件的图标
                    children:[
                        {
                            name:"开发备忘",
                            name_en:"Notes",
                            router:'/notes',
                            icon:"el-icon-date"
                        },
                        {
                            name: "关于作者",
                            name_en: "About",
                            router: "/about",
                            icon: "el-icon-document"
                        }
                    ]
                },
                {
                    name: "天气预报",
                    name_en: "Weather",
                    router: "/weather",
                    icon: "el-icon-picture-outline",
                    children: []
                },
                {
                    name: "魔幻立方",
                    name_en: "Cube",
                    router: "/cube",
                    icon: "el-icon-menu",
                    children: []
                },
                {
                    name: "权限测试",
                    name_en: "Authority",
                    router: "/authority",
                    icon: "el-icon-setting",
                    children: []
                }
            ]
        },
        msg:"Success",
        status:"YQ-000"
    });
}