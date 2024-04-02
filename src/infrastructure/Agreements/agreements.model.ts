import { ReactNode } from 'react';

export interface Agreement {
	required: boolean,
	textNode: () => ReactNode,
	defaultValue?: boolean,
	agreementChangeHandler?: () => void
}

export interface Agreements {
	agreementFields: Agreement[]
}

export type AgreementsComponentType = Agreements;