/*
 * @Description: 
 * @Version: 
 * @FilePath: /cz-test/commitlint.config.js
 * @Author: 李昭
 * @Date: 2022-08-04 14:49:14
 * @LastEditTime: 2022-08-05 10:51:13
 */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新功能
        "fix", // 修复
        "docs", // 文档变更
        "style", // 代码格式(不影响代码运行的功能)
        "refactor", // 重构
        "perf", // 性能优化
        "test", // 增加测试
        "chore", // 构建过程或辅助工具的变动
        "revert", // 回退版本
        "build", // 打包或新版本发布
      ]
    ]
  }
};