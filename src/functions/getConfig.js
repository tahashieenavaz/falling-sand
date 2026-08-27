import configData from "../config";

export default function getConfig(name) {
  if (name in configData) {
    return configData[name];
  }

  return null;
}
