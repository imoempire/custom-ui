import ComponentPageLayout from "@/src/Modules/Components/PageStructure";
import { InputProps } from "@/utils/PropsData";

export default function Page() {
  return (
    <>
      <ComponentPageLayout
        name={"Input"}
        descrption={
          "Input component allows you to collect input from your users"
        }
        useageLink={"https://snack.expo.dev/@imoempire/input"}
        componentProps={InputProps}
      />
    </>
  );
}
