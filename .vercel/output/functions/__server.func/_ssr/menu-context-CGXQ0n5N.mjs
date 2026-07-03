import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-context-CGXQ0n5N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MenuContext = (0, import_react.createContext)(void 0);
function MenuProvider({ children }) {
	const [selectedItem, setSelectedItem] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuContext.Provider, {
		value: {
			selectedItem,
			setSelectedItem
		},
		children
	});
}
function useMenuSelection() {
	const context = (0, import_react.useContext)(MenuContext);
	if (!context) {
		console.error("useMenuSelection must be used within a MenuProvider");
		return {
			selectedItem: null,
			setSelectedItem: () => {}
		};
	}
	return context;
}
//#endregion
export { useMenuSelection as n, MenuProvider as t };
