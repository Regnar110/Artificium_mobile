import React from 'react';
import { agreementsStore } from './store/redux/store';
import { Provider } from 'react-redux';
import { AgreementsProvider } from './store/context/AgreementsContext';
import { AgreementsComponentType } from './agreements.model';
import AgreementsContainer from './components/AgreementsContainer/AgreementsContainer';

const Agreements = ({ agreementFields }: AgreementsComponentType) => {
	return (
		<AgreementsProvider value={agreementFields}>
			<Provider store={agreementsStore}>
				<AgreementsContainer />		
			</Provider>
		</AgreementsProvider>

	);
};

export default Agreements;