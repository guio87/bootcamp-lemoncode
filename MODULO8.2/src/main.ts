import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];
//CASO 1
const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesPediatria = [];
  pacientesPediatria = pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra"
  );
  return pacientesPediatria;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

//CASO 1B
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesPediatriaMenores10 = [];
  pacientesPediatriaMenores10 = pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
  return pacientesPediatriaMenores10;
};
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//CASO 2
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  activarProctolo = pacientes.some((paciente) => paciente.temperatura > 39);

  return activarProctolo;
};

console.log(activarProtocoloUrgencia(pacientes));

//CASO 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.map((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      return { ...paciente, especialidad: "Medico de familia" };
    }
    return paciente;
  });
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

//CASO 4
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.every((paciente) => paciente.especialidad === "Pediatra");
};
console.log(HayPacientesDePediatria(pacientes));

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let pacientesPediatria = [];
  let pacientesMedicoFamilia = [];
  let pacientesCardiologia = [];
  pacientesPediatria = pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra"
  );
  pacientesMedicoFamilia = pacientes.filter(
    (paciente) => paciente.especialidad === "Medico de familia"
  );
  pacientesCardiologia = pacientes.filter(
    (paciente) => paciente.especialidad === "Cardiólogo"
  );
  return {
    pediatria: pacientesPediatria.length,
    medicoDeFamilia: pacientesMedicoFamilia.length,
    cardiologia: pacientesCardiologia.length,
  };
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
