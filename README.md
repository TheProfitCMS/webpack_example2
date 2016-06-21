### Задача

Извлечь все СSS из заданного entry point.

В текущем проекте хотелось бы что бы:

0. все CSS из entry point `app.js` поставлялись как есть
0. все CSS из entry point `vendors.js` извлекались и поставлялись в отдельном CSS файле

Для решения задачи было бы круто найти способ получить в Лоадере имя текущего Entry point. Я не нашел способ это сделать.

### Распложение исходников

`__SRC/assets/js/app.js` - entry point где CSS хочется поставлять как есть. Т.е в DEV окружении что-бы CSS поставлялся через JS для обеспечения работы HML, а в PROD окружении извлекался в отдельный файл


`__SRC/assets/js/vendors.js` - entry point для CSS которые предполагается держать отдельно. Хочется что-бы во всех окружениях все CSS всегда извлекались в отдельный файл.


`LOADERS` - папка с двумя пустыми лоадерами, которые устанавливаются в начало и в конец цепочки обработки. Так же здесь лежит исходиник плагина для экстракта, что бы можно было поиграться с исходным кодом.

**PS:** разделение по oкружениям тут не реализовано, я считаю по умолчанию что я в DEV окружении

### Запуск

Скачать проект на нужной ветке

`git clone -b testcase git@github.com:TheProfitCMS/webpack_example2.git wp_testcase`

Перейти в проект

`cd wp_testcase`

Утановить все необходимое для запуска

`npm install`

Просто собрать проект, что бы проверить что оно работает

`npm run build`

Запустить сборку и останавливаться на точках останова для дебага

`npm run cli_debug`

Точки останова уже установлены в лоадерах.

### Просто выписки по проекту

```
npm install webpack --save
npm install babel-loader babel-core babel-preset-es2015 --save

npm install css-loader --save
npm install style-loader --save
npm install node-sass --save
npm install sass-loader --save
npm install extract-text-webpack-plugin --save

npm install node-inspector --save
```

### Debugger

* backtrace, bt - Print backtrace of current execution frame
* list(5) - List scripts source code with 5 line context (5 lines before and after)
* watch(expr) - Add expression to watch list
* unwatch(expr) - Remove expression from watch list
* watchers - List all watchers and their values (automatically listed on each breakpoint)
* repl - Open debugger's repl for evaluation in debugging script's context
* exec expr

http://stackoverflow.com/questions/34277209/can-a-webpack-loader-be-given-the-entry-point-the-current-loaded-file-is-destine
https://github.com/webpack/webpack/pull/1783
