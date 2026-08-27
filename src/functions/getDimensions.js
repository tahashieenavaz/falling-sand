import getConfig from "@functions/getConfig";

export default function getDimensions() {
  return [getConfig("rows"), getConfig("cols")];
}
