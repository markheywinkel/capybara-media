import type { Employee } from '../types';

/** Startbesetzung Text-Etage: Gwen und Lizzy sind von Anfang an angestellt (2 von 3 Slots). */
export const GWEN: Employee = { id: 'gwen', name: 'Gwen', species: 'Eichhörnchen', skill: 2 };
export const LIZZY: Employee = { id: 'lizzy', name: 'Lizzy', species: 'Echse', skill: 2 };

export const INITIAL_TEXT_SLOTS: (Employee | null)[] = [GWEN, LIZZY, null];
