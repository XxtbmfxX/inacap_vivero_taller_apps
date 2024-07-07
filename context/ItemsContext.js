import React, { createContext, useContext, useState } from "react";

import { supabase } from '../lib/supabase'

const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {

    const [tareas, setTareas] = useState([]);
    const [semillas, setSemillas] = useState([]);
    const [despachos, setDespachos] = useState([]);
    const [materiales, setMateriales] = useState([]);
    const [plantas, setPlantas] = useState([]);
    const [plantacion, setPlantacion] = useState([]);
    const [químicos, setQuímicos] = useState([]);


    const getTareas = async () => {
        let { data } = await supabase.from("tarea").select("*").order('id_tarea', { ascending: false });
        setTareas(data);
    };

    const getSemillas = async () => {
        let { data } = await supabase.from("semilla").select("*");
        setSemillas(data);
    };


    const getDespachos = async () => {
        let { data } = await supabase.from("despacho").select("*");
        setDespachos(data);
    };

    const getMateriales = async () => {
        let { data } = await supabase.from("material").select("*");
        setMateriales(data);
    };

    const getPlantas = async () => {
        let { data } = await supabase.from("planta").select("*");
        setPlantas(data);
    };

    const getPlantación = async () => {
        let { data } = await supabase.from("plantacion").select("*");
        setPlantacion(data);
    };

    const getQuímicos = async () => {
        let { data } = await supabase.from("quimico").select("*").order('fecha_ingreso')
        setQuímicos(data);
    };

    return (
        <ItemsContext.Provider value={{ tareas, setTareas, getTareas, semillas, getSemillas, setSemillas, despachos, setDespachos, getDespachos, materiales, setMateriales, getMateriales, plantas, setPlantas, getPlantas, plantacion, setPlantacion, getPlantación, químicos, setQuímicos, getQuímicos }}>
            {children}
        </ItemsContext.Provider>
    );
};

export const useItems = () => {
    return useContext(ItemsContext);
};
