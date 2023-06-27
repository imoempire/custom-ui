/* eslint-disable react/no-children-prop */
"use client";
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
          <SiderBar children={children} />
        </ChakraProvider>
      </body>
    </html>
  );
}
