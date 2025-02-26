import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()
export default await antfu({
  formatters: true,
  ignores: ['public', 'webstorm.config.js'],
}, ...compat.config({
  extends: ['./.eslintrc-auto-import.json'],
  rules: {
    // 允许console
    'no-console': 'off',
    // 关闭每行最大变量数限制（与curly冲突）
    'style/max-statements-per-line': 'off',
    'no-unused-expressions': 'off',
    'ts/no-unused-expressions': 'off',
  },
}))
