import React from 'react';
import { agreementsStore } from './store/redux/store';
import { Provider } from 'react-redux';
import { AgreementsPropsProvider, AgreementsProvider } from './store/context/AgreementsContext';
import { AgreementsComponentType } from './agreements.model';
import AgreementsContainer from './components/AgreementsContainer/AgreementsContainer';

const Agreements = ({ agreementFields, selectAllField }: AgreementsComponentType) => {
	return (
		<AgreementsProvider value={agreementFields}>
			<AgreementsPropsProvider value={{
				selectAllField
			}}>
				<Provider store={agreementsStore}>
					<AgreementsContainer />		
				</Provider>				
			</AgreementsPropsProvider>

		</AgreementsProvider>

	);
};

export default Agreements;