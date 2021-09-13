export interface Patient
{
	//Datos personales
	id?: number;
	date_birth: Date;
	ci: number;
	name: string;
	name2: string;
	last_name: string;
	last_name2: string;
	sexo: number;
	state: number;
	direction: string;
	phone: string;
	email: string;
	//Antecedentes medicos
	allergies: number;
	diseases: number;
	surgerys: number;
	parient: number;
	disease: number;
}