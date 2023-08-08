/* eslint-disable react/no-children-prop */
"use client";
import { MyProvider } from "@/src/Context/Provider";
import SiderBar from "@/src/Modules/Sidebar";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <MyProvider>
            <SiderBar children={children} />
          </MyProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
