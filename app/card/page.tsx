import ComponentPageLayout from "@/src/Modules/Components/PageStructure";
import { CardProps } from "@/utils/PropsData";

export default function Page() {
  return (
    <>
      <ComponentPageLayout
        name={"Card"}
        descrption={`Cards serve as an excellent method for presenting information, typically encompassing content and actions related to a singular topic. Within cards, you can incorporate images, buttons, text, and other elements. Primarily, cards find their usage in conveying information effectively.`}
        componentProps={CardProps}
        useageLink="https://snack.expo.dev/@imoempire/io-elements-card"
      />
    </>
  );
}
