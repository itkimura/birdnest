export const addCssBlock = function(block, before = false) {
 const tpl = document.createElement('template');
 tpl.innerHTML = block;
 document.head[before ? 'insertBefore' : 'appendChild'](tpl.content, document.head.firstChild);
};
import '@polymer/iron-icon/iron-icon.js';
import '@vaadin/icon/vaadin-icon.js';
import '@vaadin/icons/vaadin-iconset.js';
import '@vaadin/tooltip/theme/lumo/vaadin-tooltip.js';
import 'Frontend/generated/jar-resources/tooltip.ts';