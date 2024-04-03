import { ReactNode } from 'react';

export interface Agreement {
	id: string,
	required: boolean,
	textNode: () => ReactNode,
	agreementChangeHandler?: () => void
}

export interface Agreements {
	agreementFields: Agreement[]
}

export type AgreementsComponentType = Agreements;