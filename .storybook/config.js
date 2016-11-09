import { configure } from "@kadira/storybook";
import "./common.css";

function loadStories() {
  require("../stories");
}

configure(loadStories, module);
