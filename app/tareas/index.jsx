import { ScrollView,Text } from 'react-native';
import React from 'react';
import Navegacion from './Navegacion';
import CardTareas from '../../components/cards_de_items/CardTareas'

const db = [
  {
    nombreTarea: "Reunión de equipo",
    descripción: "Preparación para la reunión semanal de equipo.",
  },
  {
    nombreTarea: "Desarrollo de nuevas funciones",
    descripción: "Implementación de nuevas características en la aplicación.",
  },
  {
    nombreTarea: "Informe mensual",
    descripción: "Elaboración del informe mensual de rendimiento.",
  },
  {
    nombreTarea: "Pruebas de calidad",
    descripción: "Realización de pruebas de calidad y rendimiento del software.",
  },
  {
    nombreTarea: "Capacitación de nuevos empleados",
    descripción: "Organización de la capacitación para los nuevos empleados.",
  },
];



const index = () => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Text>Tareas</Text>
      <Navegacion titulo={"agregar tareas"} screen={"/tareas/add_tarea"} />
      {db.map((tarea, indice) => (
        <CardTareas
          nombreTarea={tarea.nombreTarea}
          descripción={tarea.descripción}
          key={indice}
        />
      ))}
    </ScrollView>
  )
}

export default index