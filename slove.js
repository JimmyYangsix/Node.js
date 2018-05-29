var fs = require('fs');
module.exports = function (projectName){
    var projectData = {
        'name': projectName,
        'fileData': [
            {
                'name': 'js',
                'type': 'dir'
            },
            {
                'name': 'css',
                'type': 'dir'
            },
            {
                'name': 'images',
                'type': 'dir'
            },
            {
                'name': 'index.html',
                'type': 'file',
                'content': '<html>\n\t<head>\n\t\t<title>Node.js title</title>\n\t<head>\n\t\t<body>\n\t\t<h1 style="text-align:center">Based on node.js project automation</h1>\n\t<h3 style="color:blue;text-align:right">Author:KaliYang</h3>\n\t</body>\n\t</html>'
            }
        ]
    };
    if (projectData.name) {
        fs.mkdir(projectData.name, (err) => {
            if (err)
                return;
        });
        console.log(projectData.name +"项目自动化创建成功,生成的目录如下");
        var fileData = projectData.fileData;
        if (fileData && fileData.forEach) {
            fileData.forEach((f) => {
                f.path = projectData.name + '/' + f.name;
                console.log(f.path);
                switch (f.type) {
                    case 'dir': fs.mkdir(f.path, (err) => {
                        if (err)
                            return;
                    }); break;
                    case 'file': {
                        if (!f.content)
                            f.content = " ";
                        fs.writeFileSync(f.path, f.content);
                        break;
                    }
                    default:
                        break;
                }
            })
        };
    };
};