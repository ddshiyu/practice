import fs from 'fs';
import path from 'path';

const docsPath = path.dirname(__dirname) + '/src'; // docs 目录路径
const sidebarConfig = generateSidebarConfig(docsPath);

function generateSidebarConfig(docsPath, link = '', index = 0) {
  const sidebarConfig = {};
  const files = fs.readdirSync(docsPath);

  files.forEach((filename) => {
    if (filename.startsWith(".")) return;
    const filepath = path.join(docsPath, filename);
    const stat = fs.statSync(filepath);
    // 如果是文件夹，则递归生成子级 sidebar 配置
    if (stat.isDirectory() && filename !== 'images') {
      if (index === 0) {
        const config = generateSidebarConfig(filepath, `/${filename}/`, index + 1);
        if (!sidebarConfig[`/${filename}/`]) {
          sidebarConfig[`/${filename}/`] = [config];
        }
      } else if (index === 1) {
        console.log(filename)
        console.log(filepath)
        console.log(path.basename(path.dirname(filepath)))
        console.log(sidebarConfig)
        if (!sidebarConfig[`/${path.basename(path.dirname(filepath))}/`]) {
          sidebarConfig[`/${path.basename(path.dirname(filepath))}/`] = [];
        }
        sidebarConfig[`/${path.basename(path.dirname(filepath))}/`].push({
          text: filename,
          items: generateSidebarConfig(filepath, `${link}${filename}/`, index + 1)
        })
      } else {
        if (!sidebarConfig.items) {
          sidebarConfig.items = [];
        }
        sidebarConfig.items.push(generateSidebarConfig(filepath, `${link}${filename}/`, index + 1))
      }
    } else {
      const extname = path.extname(filepath);
      const basename = path.basename(filepath, extname);
      if (index > 0) {
        const menuPath = path.dirname(filepath);
        const menuName = path.basename(menuPath);
        if (index === 2) {
          sidebarConfig.text = menuName;
        } else {
          sidebarConfig.text = menuName;
          sidebarConfig.link = link;
        }
      }
      if (extname === ".md" && filename !== 'api-examples.md' && filename !== "index.md") {
        if (!sidebarConfig.items) {
          sidebarConfig.items = [];
        }
        sidebarConfig.items.push({
          text: basename,
          link: `${link}${basename}`,
        });
      }
    }
  });

  return sidebarConfig;
}

export default sidebarConfig