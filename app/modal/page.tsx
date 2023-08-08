import ComponentPageLayout from "@/src/Modules/Components/PageStructure";
import { ModalProps } from "@/utils/PropsData";

export default function Page() {
  return (
    <>
      <ComponentPageLayout
        name={"Modal"}
        descrption={`
        Temporary, focused container that appears on top of the main screen. It's used for displaying content or 
        capturing user input without navigating to a new page, 
        enhancing user interaction and maintaining context. Modals often include text, images, forms, and buttons for interactive experiences.
        `}
        componentProps={ModalProps}
        useageLink="https://snack.expo.dev/@imoempire/2f797f"
      />
    </>
  );
}
