const TurndownService = require("turndown");

const DEFAULTS = {
  headingStyle: "atx",
  hr: "---",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  fence: "```",
  emDelimiter: "_",
  strongDelimiter: "**",
  linkStyle: "inlined",
  linkReferenceStyle: "full",
  turndownPlugins: [],
};

async function onCreateNode(
  { node, actions, createNodeId, createContentDigest, reporter },
  opts = {}
) {
  const { createNode, createParentChildLink } = actions;

  if (!node.html) {
    return;
  }
  const options = { ...DEFAULTS, ...opts };

  const turndownService = new TurndownService(options);
  if (options.turndownPlugins.length > 0) {
    options.turndownPlugins.forEach((plugin) => {
      if (plugin === "turndown-plugin-gfm") {
        const turndownPluginGfm = require("turndown-plugin-gfm");
        const gfm = turndownPluginGfm.gfm;
        turndownService.use(gfm);
      }
    });
  }

  try {
    const content = node.html;
    const contentMarkDown = turndownService.turndown(content);
    let markdownNode = {
      id: createNodeId(`${node.id}-markdown`),
      children: [],
      parent: node.id,
      internal: {
        type: "Markdown",
        mediaType: "text/markdown",
        content: contentMarkDown.replace("http://", "https://"),
      },
    };
    markdownNode.internal.contentDigest = createContentDigest(markdownNode);
    createNode(markdownNode);
    createParentChildLink({ parent: node, child: markdownNode });
    return markdownNode;
  } catch (err) {
    reporter.panicOnBuild(
      `Error while processing HTML to Markdown
            ${node.title} - ${err.message}`
    );

    return {};
  }
}

exports.onCreateNode = onCreateNode;
