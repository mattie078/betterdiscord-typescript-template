import * as ContextMenuType from './ContextMenu'
import * as DOMType from './Dom'
import * as DataType from './Data'
import * as PatcherType from './Patcher'
import * as AddonAPIType from './AddonAPI'
import * as ReactUtilsType from './ReactUtils'
import * as UIType from './UI'
import * as UtilsType from './Utils'
import * as WebpackType from './Webpack'

export = BdApi;
export as namespace BdApi;

declare namespace BdApi {
	const ContextMenu: typeof ContextMenuType
	const DOM: typeof DOMType
	const Data: typeof DataType
	const Patcher: typeof PatcherType
	const Plugins: typeof AddonAPIType
	const ReactUtils: typeof ReactUtilsType
	const Themes: typeof AddonAPIType
	const UI: typeof UIType
	const Utils: typeof UtilsType
	const Webpack: typeof WebpackType
}
