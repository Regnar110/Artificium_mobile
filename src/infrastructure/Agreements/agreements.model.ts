import { ReactNode } from 'react';

export interface Agreement {
	id: string,
	required: boolean,
	textNode: () => ReactNode,
	agreementChangeHandler?: (id: string, fieldState: boolean) => void
}

export interface AgreementsProps {
	parentFormId:string,
	selectAllField?: {
		textNode: () => ReactNode
		selectAllHandler?: (id: string, fieldState: boolean) => void
	}
}

export interface Agreements {
	agreementFields: Agreement[]
}

export type FormAgreementsType = Agreements & Omit<AgreementsProps, 'parentFormId'>;
export type AgreementsComponentType = Agreements & AgreementsProps