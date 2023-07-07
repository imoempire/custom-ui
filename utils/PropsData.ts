export const ButtonProps = [
  {
    name: "title",
    type: "String",
    required: "false",
    default: "` `",
  },
  {
    name: "titleStyle",
    type: "TextStyle | object",
    required: "false",
    default: "{}",
  },
  {
    name: "buttonStyle",
    type: "ViewStyle | object",
    required: "false",
    default: "{}",
  },
  {
    name: "buttonColor",
    type: "string",
    required: "false",
    default: "#2089dc",
  },
  {
    name: "radius",
    type: "number",
    required: "false",
    default: "0",
  },
  {
    name: "btnType",
    type: "solid or outlined | string ",
    required: "false",
    default: "solid",
  },
  {
    name: "disabledStyle",
    type: "ViewStyle | object",
    required: "false",
    default: "{}",
  },
  {
    name: "isDisabled",
    type: "boolean",
    required: "false",
    default: "false",
  },
  {
    name: "isLoading",
    type: "boolean",
    required: "false",
    default: "false",
  },
  {
    name: "iconRight",
    type: "boolean",
    required: "false",
    default: "false",
  },
  {
    name: "Icon",
    type: "ReactElement | Icon Element",
    required: "false",
    default: "",
  },
  {
    name: "iconPosition",
    type: "left, right, top, bottom | string",
    required: "false",
    default: "right",
  },
];

export const SeletorProps = [
  {
    name: "title",
    type: "String",
    required: "false",
    default: "` `",
  },
  {
    name: "Listdata",
    type: "{ name: string; value: string }[] | array of objects",
    required: "false",
    default: "[empty array]",
  },
  {
    name: "containerStyle",
    type: "ViewStyle | object",
    required: "false",
    default: `{
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "red",
        width: 200,
      }`,
  },
  {
    name: "dropdownTextStyle",
    type: "TextStyle | object",
    required: "false",
    default: "#2089dc",
  },
  {
    name: "iconStyle",
    type: "object",
    required: "false",
    default: `{
        size: 30,
        color: "#000000",
      }`,
  },
  {
    name: "btnType",
    type: "solid or outlined | string ",
    required: "false",
    default: "solid",
  },
  {
    name: "onSelect",
    type: " function",
    required: "false",
    default: "()=>{}",
  },
];
