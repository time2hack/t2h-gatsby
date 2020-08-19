import TurndownService from "turndown";

async function convert(
  data,
  {
    headingStyle = `atx`,
    hr = `---`,
    bulletListMarker = `*`,
    codeBlockStyle = `fenced`,
    fence = `\`\`\``,
    emDelimiter = `_`,
    strongDelimiter = `**`,
    linkStyle = `inlined`,
    linkReferenceStyle = `full`,
    turndownPlugins = [`turndown-plugin-gfm`],
  } = {}
) {
  console.log(`was-here`, TurndownService);
  const options = {
    headingStyle,
    hr,
    bulletListMarker,
    codeBlockStyle,
    fence,
    emDelimiter,
    strongDelimiter,
    linkStyle,
    linkReferenceStyle,
  };

  try {
    const turndownService = new TurndownService(options);
    if (turndownPlugins.length > 0) {
      turndownPlugins.forEach((plugin) => {
        if (plugin === `turndown-plugin-gfm`) {
          const turndownPluginGfm = require(`turndown-plugin-gfm`);
          const gfm = turndownPluginGfm.gfm;
          turndownService.use(gfm);
        }
      });
    }
    const contentMarkDown = turndownService.turndown(data.html);
    return contentMarkDown;
  } catch (e) {
    console.log(e);
  }
  return ``;
}

export default convert;
