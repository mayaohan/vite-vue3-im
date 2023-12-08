# vite-vue3-im
IM聊天
源文件
SSH
git@codeup.aliyun.com:dayu/external_portal/external-portal-pc.git
管理 SSH 密钥？
立即初始化你的代码仓库吧！
你可以使用以下任一方式提交代码，然后开始分支管理、代码检测、代码评审与合并等操作
邀请成员
新建 Readme
新建文件
上传文件
命令行指引
为了标识身份，建议先完成 Git 全局设置
git config --global user.name "鄢长坤" 
git config --global user.email "" 
方式一：克隆仓库
git clone git@codeup.aliyun.com:dayu/external_portal/external-portal-pc.git
cd external-portal-pc
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
方式二：已有文件夹或仓库
cd existing_folder
git init
git remote add origin git@codeup.aliyun.com:dayu/external_portal/external-portal-pc.git
git add .
git commit
git push -u origin master
方式三：导入代码库
git clone --bare https://git.example.com/your/project.git your_path
cd your_path
git remote set-url origin git@codeup.aliyun.com:dayu/external_portal/external-portal-pc.git
git push origin --tags && git push origin --all