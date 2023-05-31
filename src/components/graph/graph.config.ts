export const graphConfig = {
  width: 550,
  height: 500,
  defaultNode: {
    type: "image",
    size: [15],
    color: "#5B8FF9",
    style: {
      fill: "#9EC9FF",
      lineWidth: 6,
    },
    labelCfg: {
      style: {
        fill: "#000",
        fontSize: 6,
      },
    },
  },
  defaultEdge: {
    style: {
      stroke: "#9d0d14",
    },
  },
  modes: {
    default: ["drag-canvas", "zoom-canvas"],
  },
};
