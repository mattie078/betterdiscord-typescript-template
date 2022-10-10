export = Patcher;
export as namespace Patcher;

declare namespace Patcher {
	function after(caller: string, moduleToPatch: object, functionName: string, callback: () => void): (data: object) => any
	function before(caller: string, moduleToPatch: object, functionName: string, callback: () => void): (data: object) => any
	function getPatchesByCaller(caller: string): (data: Array<(any)>) => any
	function instead(caller: string, moduleToPatch: object, functionName: string, callback: () => void): (data: object) => any
	function unpatchAll(caller: string): void
}
