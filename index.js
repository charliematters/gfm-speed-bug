import { micromark } from "micromark";
import { gfmTable } from "micromark-extension-gfm-table";
import { beeMovieScript } from "./beeMovieScript.js";

console.time("Processing without gfmTable");
micromark(beeMovieScript, {
  extensions: [],
});
console.timeEnd("Processing without gfmTable");

console.time("Processing with gfmTable");
micromark(beeMovieScript, {
  extensions: [gfmTable],
});
console.timeEnd("Processing with gfmTable");
