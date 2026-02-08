figma.showUI(__html__);
figma.ui.resize(240, 100);

figma.ui.onmessage = msg => {
  if (msg.type === 'copy') {
    figma.notify('CPF copied!');

    figma.ui.postMessage({ type: 'copy-to-clipboard', text: msg.text });
  }
};