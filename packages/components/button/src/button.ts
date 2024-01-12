// 该文件用于定义 Button 组件的类型

import type { ExtractPropTypes } from "vue";

export const buttonProps = {
  type: {
    type: String,
    default: "default",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
