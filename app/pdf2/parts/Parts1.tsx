"use client";
import { Document, Page, Text, View } from "@react-pdf/renderer";

export const Parts = () => {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>Hello PDF 👋</Text>
        </View>
      </Page>
    </Document>
  );
};
