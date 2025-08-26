# 精简模式功能 (Simplified Mode Feature)

## 概述 (Overview)

为 Blue Marble 用户脚本添加了新的精简模式功能，让用户可以在完整功能界面和精简界面之间切换。

A new simplified mode feature has been added to the Blue Marble userscript, allowing users to toggle between full-featured and simplified interfaces.

## 功能特点 (Features)

### 精简模式显示内容 (Simplified Mode Content)
- ✅ 用户名 (Username)
- ✅ 水滴数量 (Droplets)
- ✅ 下一级需要的像素数 (Pixels to next level)
- ✅ 脚本名称 (Script name)
- ✅ 作者信息 "由 SwingTheVine 制作" (Made by SwingTheVine)

### 精简模式隐藏内容 (Hidden in Simplified Mode)
- ❌ 语言选择器 (Language selector)
- ❌ 坐标输入 (Coordinate inputs)
- ❌ 模板上传 (Template upload)
- ❌ 模板按钮 (Template buttons)
- ❌ 状态输出区域 (Status output area)
- ❌ 颜色过滤器 (Color filters)
- ❌ 动作按钮 (Action buttons)

## 使用方法 (Usage)

### 切换精简模式 (Toggle Simplified Mode)
1. 找到界面右上角的精简模式按钮 (◐)
2. 点击按钮切换到精简模式
3. 再次点击可返回完整模式

### 按钮位置 (Button Location)
精简模式切换按钮位于 Blue Marble 图标右侧，显示为半圆符号 (◐)。

### 状态保存 (State Persistence)
用户的精简模式偏好设置会自动保存，下次启动时会恢复到上次的设置状态。

## 技术实现 (Technical Implementation)

### 新增翻译键 (New Translation Keys)
```javascript
'ui.simplified_mode': {
  'zh-cn': '精简模式',
  'en': 'Simplified Mode',
  // ... 其他语言
}

'ui.toggle_simplified': {
  'zh-cn': '切换精简视图',
  'en': 'Toggle Simplified View',
  // ... 其他语言
}
```

### 状态管理 (State Management)
- 使用 `GM_getValue` 和 `GM_setValue` 保存用户偏好
- 支持与现有的最小化功能配合使用
- 自动恢复精简模式状态

### CSS 样式 (CSS Styling)
- 为精简模式按钮添加了专门的样式
- 支持悬停和点击效果
- 与现有界面风格保持一致

## 兼容性 (Compatibility)

✅ 与现有最小化功能兼容  
✅ 与多语言系统兼容  
✅ 与拖拽功能兼容  
✅ 与遥测系统兼容  

## 版本信息 (Version Info)

- 添加版本: v0.85.0+
- 支持的浏览器: 所有支持用户脚本的浏览器
- 依赖: 无额外依赖

## 反馈 (Feedback)

如果您在使用精简模式时遇到任何问题，请在项目 Issues 中报告。

If you encounter any issues with the simplified mode, please report them in the project Issues.
