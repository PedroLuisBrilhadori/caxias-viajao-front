import { TSPGraphConfig } from ".";

export const nodeConfig = {
  color: "red",
  fontColor: "black",
  fontSize: 8,
  fontWeight: "normal",
  opacity: 1,
  renderLabel: true,
  size: 600,
  strokeColor: "none",
  strokeWidth: 1.5,
  symbolType: "circle",
};

export const linkConfig = {
  color: "#d3d3d3",
  fontColor: "black",
  fontSize: 24,
  fontWeight: "normal",
  mouseCursor: "pointer",
  opacity: 1,
  semanticStrokeWidth: true,
  strokeWidth: 3,
  strokeLinecap: "butt",
};

export const d3Config = {
  alphaTarget: 0.05,
  gravity: -100,
  linkLength: 200,
  linkStrength: 1,
  disableLinkForce: false,
};

export const config = {
  automaticRearrangeAfterDropNode: false,
  collapsible: false,
  directed: true,
  focusAnimationDuration: 0.2,
  focusZoom: 1,
  freezeAllDragEvents: false,
  height: 600,
  width: 600,
  highlightDegree: 1,
  highlightOpacity: 1,
  linkHighlightBehavior: false,
  maxZoom: 8,
  minZoom: 0.1,
  nodeHighlightBehavior: false,
  panAndZoom: false,
  staticGraph: false,
  staticGraphWithDragAndDrop: false,
  d3: d3Config,
  node: nodeConfig,
  link: linkConfig,
};

export const graphConfig: TSPGraphConfig = config;
