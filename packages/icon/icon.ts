import { file, write } from "bun";
import { Icon } from "./svg";

export const applyIconComponent = async (path: string, icons: Icon[]) => {
  const ids = icons
    .map(icon => icon.id)
    .toSorted((a, b) => a.localeCompare(b))
    .map(id => `"${id}"`)
    .join(" | ");
  const Icon = await file(path)
    .text()
    .then(text => text.replaceAll(/(?<=interface Props\s*{[\S\s]+as:\s).+?(?=(?:;|,)?\r?\n[\S\s]+})/g, ids))
  return write(path, Icon);
}