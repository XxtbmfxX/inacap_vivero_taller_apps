import React, { createContext, useContext, useState } from "react";
import { supabase } from '../lib/supabase';

/**
 * Contexto para manejar diferentes conjuntos de datos relacionados con la aplicación.
 * @type {React.Context<{ tareas: any[]; setTareas: Function; getTareas: Function; semillas: any[]; getSemillas: Function; setSemillas: Function; despachos: any[]; setDespachos: Function; getDespachos: Function; materiales: any[]; setMateriales: Function; getMateriales: Function; plantas: any[]; setPlantas: Function; getPlantas: Function; plantacion: any[]; setPlantacion: Function; getPlantación: Function; químicos: any[]; setQuímicos: Function; getQuímicos: Function; }>}
 */
const ItemsContext = createContext();

/**
 * Proveedor de contexto para gestionar los datos de la aplicación.
 * @param {Object} props Propiedades del componente.
 * @param {React.ReactNode} props.children Componentes hijos encapsulados por el proveedor.
 * @returns {JSX.Element} Elemento proveedor que envuelve a los componentes hijos.
 */
export const ItemsProvider = ({ children }) => {

    const [tareas, setTareas] = useState([]);
    const [semillas, setSemillas] = useState([]);
    const [despachos, setDespachos] = useState([]);
    const [materiales, setMateriales] = useState([]);
    const [plantas, setPlantas] = useState([]);
    const [plantacion, setPlantacion] = useState([]);
    const [químicos, setQuímicos] = useState([]);

    /**
     * Obtiene todas las tareas desde la base de datos y actualiza el estado.
     * @returns {Promise<void>} Promesa que se resuelve cuando se obtienen y establecen las tareas.
     */
    const getTareas = async () => {
        let { data } = await supabase.from("tarea").select("*").order('id_tarea', { ascending: false });
        setTareas(data);
    };

    /**
     * Obtiene todas las semillas desde la base de datos y actualiza el estado.
     * @returns {Promise<void>} Promesa que se resuelve cuando se obtienen y establecen las semillas.
     */
    const getSemillas = async () => {
        let { data } = await supabase.from("semilla").select("*");
        setSemillas(data);
    };

    /**
     * Obtiene todos los despachos desde la base de datos y actualiza el estado.
     * @returns {Promise<void>} Promesa que se resuelve cuando se obtienen y establecen los despachos.
     */
    const getDespachos = async () => {
        let { data } = await supabase.from("despacho").select("*");
        setDespachos(data);
    };

    /**
     * Obtiene todos los materiales desde la base de datos y actualiza el estado.
     * @returns {Promise<void>} Promesa que se resuelve cuando se obtienen y establecen los materiales.
     */
    const getMateriales = async () => {
        let { data } = await supabase.from("material").select("*");
        setMateriales(data);
    };

    /**
     * Obtiene todas las plantas desde la base de datos y actualiza el estado.
     * @returns {Promise<void>} Promesa que se resuelve cuando se obtienen y establecen las plantas.
     */
    const getPlantas = async () => {
        let { data } = await supabase.from("planta").select("*");
        setPlantas(data);
    };

    /**
     * Obtiene todas las plantaciones desde la base de datos y actualiza el estado.
     * @returns {Promise<void>} Promesa que se resuelve cuando se obtienen y establecen las plantaciones.
     */
    const getPlantación = async () => {
        let { data } = await supabase.from("plantacion").select("*");
        setPlantacion(data);
    };

    /**
     * Obtiene todos los químicos desde la base de datos y actualiza el estado.
     * @returns {Promise<void>} Promesa que se resuelve cuando se obtienen y establecen los químicos.
     */
    const getQuímicos = async () => {
        let { data } = await supabase.from("quimico").select("*").order('fecha_ingreso');
        setQuímicos(data);
    };

    /**
     * Proveedor que envuelve a los componentes hijos con el contexto de los datos.
     * @returns {JSX.Element} Elemento proveedor que envuelve a los componentes hijos.
     */
    return (
        <ItemsContext.Provider value={{ 
            tareas, setTareas, getTareas, 
            semillas, getSemillas, setSemillas, 
            despachos, setDespachos, getDespachos, 
            materiales, setMateriales, getMateriales, 
            plantas, setPlantas, getPlantas, 
            plantacion, setPlantacion, getPlantación, 
            químicos, setQuímicos, getQuímicos 
        }}>
            {children}
        </ItemsContext.Provider>
    );
};

/**
 * Hook personalizado que proporciona acceso al contexto de los datos.
 * @returns {Object} Contexto que contiene las variables de estado y funciones para manejar los datos.
 */
export const useItems = () => {
    return useContext(ItemsContext);
};
