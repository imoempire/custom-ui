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

export const InputProps = [
  {
    name: "label",
    type: "String",
    required: "false",
    default: "` `",
  },
  {
    name: "labelTextStyle",
    type: "StyleProp<TextStyle>",
    required: "false",
    default: `{
      fontSize: 10,
      color: "#000000",
    }`,
  },
  {
    name: "TextInputStyle",
    type: "ViewStyle | object",
    required: "false",
    default: `{
      backgroundColor: "white",
      height: 50,
      width: "100%",
      }`,
  },
  {
    name: "InputborderStyle",
    type: " {borderWidth: number;borderColor: string;borderRadius: number} | object",
    required: "false",
    default: `{
      borderWidth: 1,
      borderColor: "#000000",
      borderRadius: 10,
    }`,
  },
  {
    name: "placeholder",
    type: "string",
    required: "false",
    default: "type here",
  },
  {
    name: "placeholderTextColor",
    type: "string",
    required: "false",
    default: `#A9A9AC`,
  },
  {
    name: "Icon",
    type: "ReactElement",
    required: "false",
    default: "",
  },
  {
    name: "onChangeText",
    type: "function | (text: string) => void",
    required: "false",
    default: "()=>{}",
  },
  {
    name: "secureTextEntry",
    type: "boolean",
    required: "false",
    default: "false",
  },
  {
    name: "keyboardType",
    type: `"default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "number-pad"
    | "name-phone-pad"
    | "decimal-pad"
    | "twitter"
    | "web-search"
    | "visible-password"`,
    required: "false",
    default: "default",
  },
];

export const CardProps = [
  {
    name: "children",
    type: "any",
    required: "false",
    default: "",
  },
  {
    name: "containerStyle",
    type: "StyleProp<ViewStyle>",
    required: "false",
    default: `{
      backgroundColor: "white",
      borderWidth: 1,
      padding: 15,
      margin: 15,
      borderColor: "grey",
    }`,
  },
  {
    name: "wrapperStyle",
    type: "StyleProp<ViewStyle>",
    required: "false",
    default: ``,
  },
];

// onClose?: () => void;
// CloseOnBackdropPress?: boolean;

export const ModalProps = [
  {
    name: "children",
    type: "React.ReactNode",
    required: "true",
    default: "",
  },
  {
    name: "isVisible",
    type: "boolean",
    required: "true",
    default: `true`,
  },
  {
    name: "onClose",
    type: "() => void",
    required: "false",
    default: `() => {}`,
  },
  {
    name: "CloseOnBackdropPress",
    type: "StyleProp<ViewStyle>",
    required: "false",
    default: `true`,
  },
];
