
import * as FilterType from './Filters'

export = Webpack;
export as namespace Webpack;

declare namespace Webpack {
	const filters: typeof FilterType

	function getBulk(...queries: [object]): any
	function getModule(filter: () => void): any
	function waitForModule(filter: () => void): Promise<any>
}


