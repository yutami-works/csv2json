// モジュール読み込み
const fs = require('fs');
const csv = require('csvtojson');

/* CSVをJSONに変換する関数 */
const csv2json = async (inputCsvPath, outputJsonPath) => {
  // CSVを配列として読み込み
  const jsonArray = await csv().fromFile(inputCsvPath);
  // ここで配列を加工してもOK
  // console.log(jsonArray);

  // 配列をJSONに変換
  const jsonIndent = 2;
  const jsonStr = JSON.stringify(jsonArray, undefined, jsonIndent);

  // ファイルに出力
  fs.writeFileSync(outputJsonPath, jsonStr);
}

/* メイン処理 */

// パス定義
const targetCsvPath = './target.csv';
const targetJsonPath = './output.json';

// 実行
csv2json(targetCsvPath, targetJsonPath);