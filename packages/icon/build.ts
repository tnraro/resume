import { join } from "path";
import { loadSvgs, saveSvg } from "./svg";
import { applyIconComponent } from "./icon";

const svgsPath = join(import.meta.dir, "svgs");
const IconPath = join(import.meta.dir, "../web/src/components/Icon.astro");

const icons = await loadSvgs(svgsPath);

saveSvg(join(import.meta.dir, "../web/public/icons.svg"), icons);
applyIconComponent(IconPath, icons);
