import ComponentPageLayout from "@/src/Modules/Components/PageStructure";
import { ButtonProps } from "@/utils/PropsData";

export default function Page() {
  return (
    <>
      <ComponentPageLayout
        name={"Button"}
        descrption={`Button component allows user to perform an action or event, such
        as submitting a form, opening a Dialog, canceling an action, or
        performing a delete operation.`}
        useageLink={"https://snack.expo.dev/@imoempire/io-elements-button"}
        componentProps={ButtonProps}
      />
    </>
  );
}
