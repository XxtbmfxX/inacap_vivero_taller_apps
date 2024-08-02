import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import DataCardList from '@/components/cards_de_items/NuevaCard';
import { useItems } from '@/context/ItemsContext';
import TitulosSecciones from '@/components/TitulosSecciones';


const index = () => {

    // @ts-ignore
    const { plantacion, getPlantación } = useItems();

    useEffect(() => {
        getPlantación();
    }, []);



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TitulosSecciones título='Semillas' key={"Semillas"} />
            <ScrollView>
                <DataCardList dataArray={plantacion}  />
                {/* Puedes agregar más DataCard con diferentes datos */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default index;
