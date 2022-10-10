export = AddonAPI;
export as namespace AddonAPI;

declare namespace AddonAPI {
	const folder: string

	function disable(idOrFile: string): void
	function enable(idOrFile: string): void
	function get(idOrFile: string): object
	function getAll(): Array<object>
	function isEnabled(idOrFile: string): boolean
	function reload(idOrFile: string): void
	function toggle(idOrFile: string): void
}
