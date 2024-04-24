import { AgreementRequirementValidation } from '../../infrastructure/Agreements/store/redux/agreementsStore.model';

export interface RegisterRequestBody {
	agreementFields: AgreementRequirementValidation;
    fields: {
        [key: string]: {
            id: string;
            value: string;
        };
    };
    formId: string;
}