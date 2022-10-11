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

	/**
	 * Shows a generic but very customizable modal.
	 * 
	 * @param {string} title title of the modal
	 * @param {(string|ReactElement|Array<string|ReactElement>)} content a string of text to display in the modal
	 */
	function alert(title: string, content: string): void

	/**
	 * Gets the internal react data of a specified node
	 * 
	 * @param {HTMLElement} node Node to get the react data from
	 * @returns {object|undefined} Either the found data or `undefined` 
	 */
	function getInternalInstance(node: HTMLElement): object | undefined

	/**
	 * Loads previously stored data.
	 * 
	 * @param {string} pluginName Name of the plugin loading data
	 * @param {string} key Which piece of data to load
	 * @returns {any} The stored data
	 */
	function loadData(pluginName: string, key: string): any | null

	/**
	 * Adds a listener for when the node is removed from the document body.
	 * 
	 * @param {HTMLElement} node Node to be observed
	 * @param {function} callback Function to run when fired
	 */
	function onRemoved(node: HTMLElement, callback: () => void): void

	/**
	 * Gives access to the [Electron Dialog](https://www.electronjs.org/docs/latest/api/dialog/) api. 
	 * Returns a `Promise` that resolves to an `object` that has a `boolean` cancelled and a `filePath` string for saving and a `filePaths` string array for opening.
	 * 
	 * @param {object} options Options object to configure the dialog.
	 * @param {"open"|"save"} [options.mode="open"] Determines whether the dialog should open or save files.
	 * @param {string} [options.defaultPath=~] Path the dialog should show on launch.
	 * @param {Array<object<string, string[]>>} [options.filters=[]] An array of [file filters](https://www.electronjs.org/docs/latest/api/structures/file-filter).
	 * @param {string} [options.title] Title for the titlebar.
	 * @param {string} [options.message] Message for the dialog.
	 * @param {boolean} [options.showOverwriteConfirmation=false] Whether the user should be prompted when overwriting a file.
	 * @param {boolean} [options.showHiddenFiles=false] Whether hidden files should be shown in the dialog.
	 * @param {boolean} [options.promptToCreate=false] Whether the user should be prompted to create non-existant folders.
	 * @param {boolean} [options.openDirectory=false] Whether the user should be able to select a directory as a target.
	 * @param {boolean} [options.openFile=true] Whether the user should be able to select a file as a target.
	 * @param {boolean} [options.multiSelections=false] Whether the user should be able to select multiple targets.
	 * @param {boolean} [options.modal=false] Whether the dialog should act as a modal to the main window.
	 * @returns {Promise<object>} Result of the dialog
	 */
	function openDialog(options: object): Promise<object>

	/**
	 * Saves JSON-serializable data.
	 * 
	 * @param {string} pluginName Name of the plugin saving data
	 * @param {string} key Which piece of data to store
	 * @param {any} data The data to be saved
	 */
	function saveData(pluginName: string, key: string, data: any): void

	/**
	 * This shows a toast similar to android towards the bottom of the screen.
	 *
	 * @param {string} content The string to show in the toast.
	 * @param {object} options Options object. Optional parameter.
	 * @param {string} [options.type=""] Changes the type of the toast stylistically and semantically. Choices: "", "info", "success", "danger"/"error", "warning"/"warn". Default: ""
	 * @param {boolean} [options.icon=true] Determines whether the icon should show corresponding to the type. A toast without type will always have no icon. Default: true
	 * @param {number} [options.timeout=3000] Adjusts the time (in ms) the toast should be shown for before disappearing automatically. Default: 3000
	 * @param {boolean} [options.forceShow=false] Whether to force showing the toast and ignore the bd setting
	 */
	function showToast(content: string, options?: object): void

	/**
	 * Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.
	 * 
	 * @param {string} title title of the modal
	 * @param {(string|ReactElement|Array<string|ReactElement>)} children a single or mixed array of react elements and strings. Everything is wrapped in Discord's `TextElement` component so strings will show and render properly.
	 * @param {object} [options] options to modify the modal
	 * @param {boolean} [options.danger=false] whether the main button should be red or not
	 * @param {string} [options.confirmText=Okay] text for the confirmation/submit button
	 * @param {string} [options.cancelText=Cancel] text for the cancel button
	 * @param {callable} [options.onConfirm=NOOP] callback to occur when clicking the submit button
	 * @param {callable} [options.onCancel=NOOP] callback to occur when clicking the cancel button
	 */
	function showConfirmationModal(title: string, content: (string | any | Array<string | any>), options?: object): void

	/**
	 * Shows a notice above Discord's chat layer.
	 * 
	 * @param {string|Node} content Content of the notice
	 * @param {object} options Options for the notice.
	 * @param {string} [options.type="info" | "error" | "warning" | "success"] Type for the notice. Will affect the color.
	 * @param {Array<{label: string, onClick: function}>} [options.buttons] Buttons that should be added next to the notice text.
	 * @param {number} [options.timeout=10000] Timeout until the notice is closed. Won't fire if it's set to 0;
	 * @returns {function}
	 */
	function showNotice(content: string | Node, options?: object): (data: object) => any
}
