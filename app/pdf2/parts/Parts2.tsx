"use client";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "NotoSansJP",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    marginBottom: 8,
  },
  label: {
    width: 80,
    fontSize: 12,
  },
  value: {
    fontSize: 12,
  },
  box: {
    borderWidth: 1,
    padding: 12,
  },
  image: {
    width: 30,
    height: 30,
    display: "flex",
    backgroundColor: "#f00",
  },
});

export const Parts = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>請求書サンプル</Text>

        <View style={styles.box}>
          <View style={styles.row}>
            <Text style={styles.label}>名前:</Text>
            <Text style={styles.value}>山田太郎</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>日付:</Text>
            <Text style={styles.value}>2026/01/31</Text>
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>請求書サンプル2</Text>

        <View style={styles.box}>
          <View style={styles.row}>
            <Text style={styles.label}>名前:</Text>
            <Text style={styles.value}>山田太郎</Text>
          </View>
          {/* <Image src="/next.svg" style={{ width: 120, marginBottom: 16 }} /> */}
          <Image src="/bg.png" style={{ width: 120, marginBottom: 16 }} />
          <View style={{ backgroundColor: "#000", height: 40 }}>
            {/* <Image
              src="https://placehold.jp/150x150.png"
              // style={styles.image}
            /> */}
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>日付:</Text>
            <Text style={styles.value}>2026/01/31</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
