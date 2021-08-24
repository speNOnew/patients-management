export interface Emergency
{
	//Datos personales
	id_pa?: number;
	ci: number;
	names: string;
	last_names: string;
	sexo: string;
	state: string;
	date_birth: Date;
	ocupation: string;
	direction: string;
	phone: number;
	email: string;
	//Antecedentes medicos
	allergies: string;
	diseases: string;
	surgery: string;
	parient: string;
	disease: string;
	//Campos cita
	id_ci?: number;
	date: Date;
	patient: string;
	doctor: string;
	especialidad: string;
	//Campos consulta
	motive: string;
	sintoma: string;
	diagnostico: string;
	tratamiento: string;
	id_patient_id?: number;
	id_cite_id?: number;
}