import ComponentPageLayout from "@/src/Modules/Components/PageStructure";
import { SeletorProps } from "@/utils/PropsData";

export default function Page() {
  return (
    <>
      <ComponentPageLayout
        name={"Dropdown Selector"}
        descrption={
          "  DropdownSelector allows user to select from options displayed in adropdown"
        }
        useageLink={"https://snack.expo.dev/@imoempire/io-elements-selector"}
        componentProps={SeletorProps}
      />
    </>
  );
}
