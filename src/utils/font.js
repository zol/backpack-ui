import camelCase from "lodash/camelCase";
import settings from "../../settings.json";

const _ = { camelCase };

/**
 * Return a font stack
 * @param  {String} family The name of the fony family stored in the settings
 * @return {String}        Font stack
 */
function font(family) {
  const fontFamily = settings.font.family[_.camelCase(family)];
  if (!fontFamily) return "";
  return fontFamily.join(", ");
}

export default font;
