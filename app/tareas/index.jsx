import { ScrollView, Text } from 'react-native';
import React, { useState } from 'react';
import Navegacion from '../../components/Navegacion';
import CardTareas from '../../components/cards_de_items/CardTareas';

import { router } from 'expo-router';


const initialDb = [
  {
    nombreTarea: "Reunión de equipo",
    descripción: "Preparación para la reunión semanal de equipo.",
  },
  // ...otras tareas
];

const Index = () => {
  const [db, setDb] = useState(initialDb);

  // █████   ██████  ██████  ███████  ██████  ██    ██ ███████     ███████ ██          ██████   ██████  ██    ██ ████████ ███████ ██████  
  // ██   ██ ██       ██   ██ ██      ██       ██    ██ ██          ██      ██          ██   ██ ██    ██ ██    ██    ██    ██      ██   ██ 
  // ███████ ██   ███ ██████  █████   ██   ███ ██    ██ █████       █████   ██          ██████  ██    ██ ██    ██    ██    █████   ██████  
  // ██   ██ ██    ██ ██   ██ ██      ██    ██ ██    ██ ██          ██      ██          ██   ██ ██    ██ ██    ██    ██    ██      ██   ██ 
  // ██   ██  ██████  ██   ██ ███████  ██████   ██████  ███████     ███████ ███████     ██   ██  ██████   ██████     ██    ███████ ██   ██ 
                                                                                                                                        
//en la función de actualizar tarea te envía a update tarea
//pero tienes que recibir ciertos parámetros en update tarea                                                                                                                                        
  
  const actualizarTarea = (indice, nuevaTarea) => {

    router.navigate('/tareas/update_tarea');

    const nuevasTareas = [...db];
    nuevasTareas[indice] = nuevaTarea;
    setDb(nuevasTareas);
  };

// La card recibía la función de actualizar tarea pero no se recibía como parámetro en la card
// hay que describirla en papel primero antes de pasar al código porque creo que si le pones actualizar a una sola
// la función va a actualizar a todas las demás cards
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Text>Tareas</Text>
      <Navegacion titulo={"agregar tareas"} screen={"/tareas/add_tarea"} />
      {db.map((tarea, indice) => (
        <CardTareas
          nombreTarea={tarea.nombreTarea}
          descripción={tarea.descripción}
          key={indice}
          indice={indice}
          actualizarTarea={actualizarTarea}
        />
      ))}
    </ScrollView>
  );
};

export default Index;
