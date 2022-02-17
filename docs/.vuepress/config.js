module.exports = {
    title:'沂铭 文档',
    description:"日常记录",
    theme: 'reco',
    base:"/learn-javascript/",
    locales: {
        '/': {
          lang: 'zh-CN'
        }
      },
    themeConfig:{
        subSidebar: 'auto',
        nav:[
            {text:"首页",link:'/'},
            {
                text:"沂铭的  Javascript 博客",
                items:[
                    {
                        text:'GitHub',link:''
                    },
                    {
                        text:'博客园',link:''
                    },
                ]
            }

        ],
        sidebar:[
            {
                title:"欢迎学习",
                path:'/',
                collapsable:false,
                children:[
                    {
                        title:"吾日三省吾身",path:'/'
                    }
                ]
            },
            {
                title:"基础学习",
                path:"/handbook/oneDay",
                collapsable:false,
                children:[
                    {
                        title:"箭头函数",
                        path:"/handbook/oneDay"
                    },
                    {
                        title:"this指向",
                        path:"/handbook/Cont"
                    }
                ]
            }
        ]
    }
}