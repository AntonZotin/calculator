import * as React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from "../constants/styles";
import { Table, Row, Rows } from 'react-native-table-component';

export default function LinksScreen() {
  const data = {
    headerData: ["Кол-во штук с листа", "Цена за пм", "Цена за цинк пм"],
    tableContents: [
      ["1(более 830мм)", "470", "380"],
      ["1(до 830мм)", "380", "300"],
      ["2", "310", "240"],
      ["3", "230", "175"],
      ["4", "210", "165"],
      ["5", "185", "155"],
      ["6", "175", "145"],
      ["7", "165", "135"],
      ["8", "155", "125"],
      ["9", "140", "120"],
      ["10", "95", "80"]
    ]
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.getStartedContainer}>
        <Text style={styles.helpLinkText}>Данная программа предназначена для расчета стоимости детали в окрашенном и оцинкованном виде. Расчет делается согласно этой таблице:</Text>
      </View>
      <View style={styles.tableContainer}>
        <Table>
          <Row data={data.headerData}/>
          <Rows data={data.tableContents}/>
        </Table>
      </View>
    </ScrollView>
  );
}
