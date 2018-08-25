# MyReads 项目

此项目为一个单页面图书管理应用，主要功能如下：
- 可以通过控件，选择图书的书架分类（包含“想读”， “目前在读”以及“读过”三类）
- 可以通过“查找功能”搜索特定书籍，并可进行图书的书架分类

## 如何使用

clone 该项目到本地，进入项目目录，运行 `npm install` 安装所必需的依赖，然后运行 `npm start` 运行项目

## 前端实现

- 通过 React 构建页面的基本布局，将页面划分为如下组件
  - `<Search />` 组件，用于根据用户输入来搜索数据
  - `<Main />` 组件，用于展示用户的书架，书架包含三个类别：已读、想读以及正在读，每个书架中包含用户所选择的数据
  - `<BookshelfStyle />` 组件，包含某一类别书架对应的书籍，用户可通过单击每本书右下的图标，将书籍重新分配到不同的书架
- 通过 React Router 进行页面路由管理

具体实现如下图所示：

| 页面类型 | 页面展示 |
| :-------: | :--------: |
|  主页面  |![我的书架](https://raw.githubusercontent.com/Moonliujk/imageBaseForArticle/master/myBookShelf/main_page.png)|
|  搜索页面  |![搜索界面](https://github.com/Moonliujk/imageBaseForArticle/raw/master/myBookShelf/search_page.png)|
