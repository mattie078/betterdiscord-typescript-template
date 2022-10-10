import * as PatcherType from './Patcher'
import * as AddonAPIType from './AddonAPI'
import * as WebpackType from './Webpack'

import * as ReactType from 'react'
import * as ReactDOMType from 'react-dom'

export = BdApi;
export as namespace BdApi;

declare namespace BdApi {
	const Patcher: typeof PatcherType
	const Plugins: typeof AddonAPIType
	const React: typeof ReactType
	const ReactDOM: typeof ReactDOMType
	const Themes: typeof AddonAPIType
	const Webpack: typeof WebpackType
	const version: string

	function alert(title: string, content: string): void 
	function clearCSS(id: string): void
	function deleteData(pluginName: string, key: string): void
	function getInternalInstance(node: HTMLElement): object | undefined
	function injectCSS(id: string, css: string): object | null
	function linkJS(id: string, url: string): void
	function loadData(pluginName: string, key: string): any | null
	function onRemoved(node: HTMLElement, callback: () => void): void
	function openDialog(options: object): Promise<object>
	function saveData(pluginName: string, key: string, data: any): void
	function showToast(content: string, options: object): void
}
