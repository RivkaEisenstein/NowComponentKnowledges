import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import "../x-849479--kb-search-results";
import '@servicenow/now-card';
import '@servicenow/now-icon';







const view = (state, {updateState}) => {
	return (
		<div>
			<header>
			<now-icon icon="magnifying-glass-outline"></now-icon>
			<input
					value={state.searchText}
					on-input={(e) => updateState({ searchText: e.target.value })}
				/>
			</header>
			<x-849479--kb-search-results
				searchText={state.searchText}
			></x-849479--kb-search-results> 
			

		</div>
	);
};

createCustomElement('x-849479-example-homepage', {
	renderer: { type: snabbdom },
	initialState: { searchText: "email" },
	view,
	styles
});
