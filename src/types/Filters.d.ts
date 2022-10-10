export = Filters;
export as namespace Filters;

declare namespace Filters {
	function byDisplayName(name: string): (data: object) => any
	function byProps(...props: string[]): (data: object) => any
	function byPrototypeFields(...props: string[]): (data: object) => any
	function byRegex(search: RegExp, filter: () => void): (data: object) => any
	function byStrings(...strings: string[]): (data: object) => any
	function combine(...filters: [() => void]): (data: object) => any
}


