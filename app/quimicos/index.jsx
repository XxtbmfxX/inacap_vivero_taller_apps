import { ScrollView, Text } from 'react-native'
import React from 'react'

import CardQuimicos from '../../components/cards_de_items/CardQuimicos'

const db = [
  {
    fechaIngreso: '2024-06-01',
    cantidad: '20 litros',
    contenido: 'Ácido Sulfúrico 🧪',
    necesidadesltkg: '5 litros',
    categoria: 'Ácido',
    presentacion: 'Botella de vidrio',
    stockMinimo: '10 litros'
  },
  {
    fechaIngreso: '2024-05-25',
    cantidad: '15 kg',
    contenido: 'Cloruro de Sodio 🧂',
    necesidadesltkg: '3 kg',
    categoria: 'Sal',
    presentacion: 'Saco',
    stockMinimo: '5 kg'
  },
  {
    fechaIngreso: '2024-06-10',
    cantidad: '50 litros',
    contenido: 'Hidróxido de Sodio 🧼',
    necesidadesltkg: '10 litros',
    categoria: 'Base',
    presentacion: 'Tambor',
    stockMinimo: '20 litros'
  },
  {
    fechaIngreso: '2024-06-05',
    cantidad: '10 kg',
    contenido: 'Sulfato de Cobre 🔵',
    necesidadesltkg: '2 kg',
    categoria: 'Sal',
    presentacion: 'Saco',
    stockMinimo: '3 kg'
  },
  {
    fechaIngreso: '2024-05-30',
    cantidad: '25 litros',
    contenido: 'Etanol 🍶',
    necesidadesltkg: '8 litros',
    categoria: 'Alcohol',
    presentacion: 'Botella de plástico',
    stockMinimo: '10 litros'
  },
  {
    fechaIngreso: '2024-06-15',
    cantidad: '5 kg',
    contenido: 'Carbonato de Calcio 🏔️',
    necesidadesltkg: '1 kg',
    categoria: 'Sal',
    presentacion: 'Saco',
    stockMinimo: '2 kg'
  },
  {
    fechaIngreso: '2024-06-20',
    cantidad: '30 litros',
    contenido: 'Ácido Clorhídrico 💧',
    necesidadesltkg: '6 litros',
    categoria: 'Ácido',
    presentacion: 'Tambor',
    stockMinimo: '15 litros'
  },
  {
    fechaIngreso: '2024-05-28',
    cantidad: '12 kg',
    contenido: 'Nitrato de Potasio 🧴',
    necesidadesltkg: '4 kg',
    categoria: 'Sal',
    presentacion: 'Saco',
    stockMinimo: '5 kg'
  },
  {
    fechaIngreso: '2024-06-18',
    cantidad: '40 litros',
    contenido: 'Glicerina 🧴',
    necesidadesltkg: '10 litros',
    categoria: 'Alcohol',
    presentacion: 'Botella de vidrio',
    stockMinimo: '20 litros'
  },
  {
    fechaIngreso: '2024-06-12',
    cantidad: '7 kg',
    contenido: 'Bicarbonato de Sodio 🥄',
    necesidadesltkg: '2 kg',
    categoria: 'Sal',
    presentacion: 'Saco',
    stockMinimo: '3 kg'
  }
];


const index = () => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      {db.map((quimico, indice) => (
        <CardQuimicos
        fechaIngreso={quimico.fechaIngreso}
        cantidad={quimico.cantidad}
        contenido={quimico.contenido}
        necesidadesltkg={quimico.necesidadesltkg}
        categoria={quimico.categoria}
        presentacion={quimico.presentacion}
        stockMinimo={quimico.stockMinimo}
        key={indice}
        />
      ))}
    </ScrollView>
  );
  
}

export default index