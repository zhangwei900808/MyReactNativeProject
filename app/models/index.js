import { create } from "dva-core";

import userModel from "./user";
const models = [userModel];

const app = create(); // 创建dva实例，可传递配置参数。https://dvajs.com/api/#app-dva-opts

models.forEach(o => {
  // 装载models对象
  app.model(o);
});

app.start(); // 实例初始化

const store = app._store; // 获取redux的store对象供react-redux使用

export default store;
