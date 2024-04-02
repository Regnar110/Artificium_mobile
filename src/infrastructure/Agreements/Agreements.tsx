import React from 'react';
import { AgreementsProvider } from './store/context/AgreementsContext';
import { AgreementsComponentType } from './agreements.model';
import AgreementsContainer from './components/AgreementsContainer/AgreementsContainer';

const Agreements = ({ agreementFields }: AgreementsComponentType) => {
	return (
		<AgreementsProvider value={agreementFields}>
\			<AgreementsContainer />		
		</AgreementsProvider>

	);
};

export default Agreements;