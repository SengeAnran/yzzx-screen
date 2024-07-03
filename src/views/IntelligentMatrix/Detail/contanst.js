import {getIdCard, getTextKeyWord, getTextClass} from "@/api/baiduAi";
import {getAdvancedGeneral} from "../../../api/baiduAi";

export const ableData = [
    {
        name: '专业证件识别', // 能力项名称
        resDateName: 'words_result', // 接口请求结果数据字段
        type: 'img', // 识别类型
        tabList: [ // 分类项
            {
                name: '头像面',
                value: 'front',
                key: 'id_card_side'
            },
            {
                name: '国徽面',
                value: 'back',
                key: 'id_card_side',
            },
        ],
        otherParams: { // 额外参数
            // detect_photo: false,
            // detect_risk: true,
            // detect_quality: true,
            id_card_side: 'front', //-front：身份证含照片的一 -back：身份证带国徽的一面
        },
        ocrMethod: getIdCard, // 识别api
        imgList: [ // 示例数据
            [
                {
                    url: 'https://ai.bdstatic.com/file/3C8C5B451BB4445697730217EC8648E3',
                },
                {
                    url: 'https://ai.bdstatic.com/file/96D2F45674F54D4287EB9FBF9E6AB19A',
                },
                {
                    url: 'https://ai.bdstatic.com/file/C8124E563BBE4DFE9647ACB7B8B12D0A',
                },
                {
                    url: 'https://ai.bdstatic.com/file/0C2E17DA8CBC4C04AF4A6D1E38FC04ED',
                },
                {
                    url: 'https://ai.bdstatic.com/file/D348C98B677149C8B95909CFA204BA1C',
                },
            ],
            [
                {
                    url: 'https://ai.bdstatic.com/file/9C1B97A36FD34DA9990BA30010724463',
                },
                {
                    url: 'https://ai.bdstatic.com/file/36C3C306F98C4A21BD00AD0812D00BBE',
                },
                {
                    url: 'https://ai.bdstatic.com/file/C8AA67C7C3FD46219C9264797B94CCBE',
                },
                {
                    url: 'https://ai.bdstatic.com/file/47EDFBC2E39B4331819DA9F7A1DD38F3',
                },
                {
                    url: 'https://ai.bdstatic.com/file/75537E3E7EE8446EBDCB35B5CEDEB9B6',
                },
            ]
        ],
        resTapList: [ // 识别结果栏
            {
                name: '识别结果',
                showType: 'list',
            },
            // {
            //   name: '请求参数',
            //   showType: 'request',
            // },
            {
                name: 'JSON结果',
                showType: 'json',
            },
        ],
    },
    {
        name: '通用物体场景识别', // 能力项名称
        resDateName: 'result', // 接口请求结果数据字段
        type: 'img', // 识别类型
        tabList: [ // 分类项
            // {
            //     name: '头像面',
            //     value: 'front',
            //     key: 'id_card_side'
            // },
            // {
            //     name: '国徽面',
            //     value: 'back',
            //     key: 'id_card_side',
            // },
        ],
        otherParams: { // 额外参数
            // detect_photo: false,
            // detect_risk: true,
            // detect_quality: true,
            // id_card_side: 'front', //-front：身份证含照片的一 -back：身份证带国徽的一面
        },
        ocrMethod: getAdvancedGeneral, // 识别api
        imgList: [
            {
                url: 'https://ai-public-console.cdn.bcebos.com/portal-pc-static/1718698947380/images/technology/imagerecognition/general/1.jpg',
            },
            {
                url: 'https://ai-public-console.cdn.bcebos.com/portal-pc-static/1718698947380/images/technology/imagerecognition/general/2.jpg',
            },
            {
                url: 'https://ai-public-console.cdn.bcebos.com/portal-pc-static/1718698947380/images/technology/imagerecognition/general/3.jpg',
            },
            {
                url: 'https://ai-public-console.cdn.bcebos.com/portal-pc-static/1718698947380/images/technology/imagerecognition/general/4.jpg',
            },
            {
                url: 'https://ai-public-console.cdn.bcebos.com/portal-pc-static/1718698947380/images/technology/imagerecognition/general/5.jpg',
            },
        ],
        resTapList: [ // 识别结果栏
            {
                name: '识别结果',
                showType: 'list',
            },
            // {
            //   name: '请求参数',
            //   showType: 'request',
            // },
            {
                name: 'JSON结果',
                showType: 'json',
            },
        ],
    },
    {
        name: '标签抽取', // 能力项名称
        resDateName: 'items', // 接口请求结果数据字段
        type: 'text', // 识别类型
        tabList: [ // 分类项
            // {
            //     name: '头像面',
            //     value: 'front',
            //     key: 'id_card_side'
            // },
            // {
            //     name: '国徽面',
            //     value: 'back',
            //     key: 'id_card_side',
            // },
        ],
        otherParams: { // 额外参数
            // detect_photo: false,
            // detect_risk: true,
            // detect_quality: true,
            // id_card_side: 'front', //-front：身份证含照片的一 -back：身份证带国徽的一面
        },
        exampleInfo: {
            title: '火箭十六连胜之后又迎来两大好消息，这样的休斯顿足以让联盟颤抖！',
            content: '3月7日，在今天结束的一场比赛中，休斯顿火箭在客场以122-112战胜了雷霆，取得16连胜。本场比赛火箭再次展现了自己的统治力，詹姆斯哈登打了36分钟，拿到了23分11助攻5篮板4抢断1盖帽以及出现了10次失误，在进攻端哈登遭到了雷霆严密的封锁。但火箭也不再是单核作战，克里斯保罗扛起了半边天，他带领队友在末节牢牢占据优势，雷霆无力翻盘。本场比赛火箭球星詹姆斯-哈登打出半场好球为火箭奠定赢球基调，下半场的比赛哈登陷入犯规麻烦没有亮眼表现，但他对安东尼的杀伤依旧高效。当身边有克里斯-保罗这样的队友，偶尔划水躺赢也是不错的体验。而且赛后阿里扎在接受采访说道，“我认为对我们来说，关键总是在防守端，在防守端打出侵略性，当我们可以打出防守的时候，我们可以打出快攻，在场上到处都是打错位的机会，我们要利用好我们喜欢的错位机会。”火箭队的哈登和德安东尼对于超越22连胜这事，他们显的云淡风轻。哈登说：“什么意义都没有，没有，我们只想打出好的表现，我们只想打出好的表现，在攻防两端彼此支持，这不重要，输赢自然会来，我们还有很长的路要走，很长的路。”德安东尼说：“就是要继续下去，不只是16连胜的问题，这波连胜很棒，我们最终会输球的，但是这肯定不会是因为我们不够努力，也不会是因为我们把赢球当作是理所当然的事情，我们的专注度目前不错。”首先阿里扎在赛后的表态说明了火箭的一大改变，不仅仅靠进攻，防守的提升才能保证球队的胜利。而德帅和哈登的表态却显得火箭心态的成熟，不仅仅是为了刷新纪录，而是为了球队的长远目标。大家说呢？'
        },
        ocrMethod: getTextKeyWord, // 识别api
        imgList: [],
        resTapList: [ // 识别结果栏
        ],
    },
    {
        name: '文章分类', // 能力项名称
        resDateName: 'item', // 接口请求结果数据字段
        type: 'text', // 识别类型
        tabList: [ // 分类项
        ],
        otherParams: { // 额外参数
            // detect_photo: false,
            // detect_risk: true,
            // detect_quality: true,
            // id_card_side: 'front', //-front：身份证含照片的一 -back：身份证带国徽的一面
        },
        exampleInfo: {
            title: '火箭十六连胜之后又迎来两大好消息，这样的休斯顿足以让联盟颤抖！',
            content: '3月7日，在今天结束的一场比赛中，休斯顿火箭在客场以122-112战胜了雷霆，取得16连胜。本场比赛火箭再次展现了自己的统治力，詹姆斯哈登打了36分钟，拿到了23分11助攻5篮板4抢断1盖帽以及出现了10次失误，在进攻端哈登遭到了雷霆严密的封锁。但火箭也不再是单核作战，克里斯保罗扛起了半边天，他带领队友在末节牢牢占据优势，雷霆无力翻盘。本场比赛火箭球星詹姆斯-哈登打出半场好球为火箭奠定赢球基调，下半场的比赛哈登陷入犯规麻烦没有亮眼表现，但他对安东尼的杀伤依旧高效。当身边有克里斯-保罗这样的队友，偶尔划水躺赢也是不错的体验。而且赛后阿里扎在接受采访说道，“我认为对我们来说，关键总是在防守端，在防守端打出侵略性，当我们可以打出防守的时候，我们可以打出快攻，在场上到处都是打错位的机会，我们要利用好我们喜欢的错位机会。”火箭队的哈登和德安东尼对于超越22连胜这事，他们显的云淡风轻。哈登说：“什么意义都没有，没有，我们只想打出好的表现，我们只想打出好的表现，在攻防两端彼此支持，这不重要，输赢自然会来，我们还有很长的路要走，很长的路。”德安东尼说：“就是要继续下去，不只是16连胜的问题，这波连胜很棒，我们最终会输球的，但是这肯定不会是因为我们不够努力，也不会是因为我们把赢球当作是理所当然的事情，我们的专注度目前不错。”首先阿里扎在赛后的表态说明了火箭的一大改变，不仅仅靠进攻，防守的提升才能保证球队的胜利。而德帅和哈登的表态却显得火箭心态的成熟，不仅仅是为了刷新纪录，而是为了球队的长远目标。大家说呢？'
        },
        ocrMethod: getTextClass, // 识别api
        imgList: [],
        resTapList: [ // 识别结果栏
        ],
    },
    // {
    //     name: '转型咨询',
    // },
    // {
    //     name: '人才培养',
    // },
    // {
    //     name: '数据实施',
    // },
    // {
    //     name: '场景构建',
    // },
    // {
    //     name: '工程验证',
    // },
    // {
    //     name: '项目策划',
    // },
    // {
    //     name: '市场推广',
    // },
]
