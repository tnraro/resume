import { file, write } from "bun";
import { readdir } from "fs/promises";
import { join } from "path";

export const loadSvgs = async (path: string) => {
  const icons = (await Promise.all((await readdir(path))
    .map(filename => file(join(path, filename)).text())))
    .map(x => parseSvg(x));
  return icons;
}

export const parseSvg = (x: string) => {
  const [path, c] = [...x.matchAll(/(?<=^<svg.+?class="(.+?)">).+(?=<\/svg>$)/g)][0].slice(0, 2);

  const id = c.match(/(?<=lucide-).+?$/);
  if (id == null) throw new SyntaxError("Failed to parse 'id'");
  return {
    id: id[0],
    path,
  };
}
export type Icon = ReturnType<typeof parseSvg>;
export const renderSvg = (icons: Icon[]) => {
  const symbols = icons.map(icon =>
    `<symbol id="${icon.id}" viewBox="0 0 24 24" class="lucide lucide-${icon.id}">${icon.path}</symbol>`)
    ;
  return `<svg xmlns="http://www.w3.org/2000/svg"><defs>${symbols}</defs></svg>`
}
export const saveSvg = (path: string, icons: Icon[]) =>
  write(path, renderSvg(icons));