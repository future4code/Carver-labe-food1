import React from 'react';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { CategoriesContainer } from './styled';

export default function CategoriesCarrossel(props) {

    const [value, setValue] = React.useState(0);
    const { handleCategory } = props

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (

        <CategoriesContainer sx={{ maxWidth: 350 }}>
            <Tabs
                onChange={handleChange}
                value={value}
                scrollButtons={false}
            >
                <Tab onClick={() => handleCategory("Árabe")} label="Árabe" />
                <Tab onClick={() => handleCategory("Asiática")} label="Asiática" />
                <Tab onClick={() => handleCategory("Hamburguer")} label="Hamburguer" />    
                <Tab onClick={() => handleCategory("Italiana")} label="Italiana" />
                <Tab onClick={() => handleCategory("Sorvetes")} label="Sorvetes" />
                <Tab onClick={() => handleCategory("Carnes")} label="Carnes" />
                <Tab onClick={() => handleCategory("Baiana")} label="Baiana" />
                <Tab onClick={() => handleCategory("Petiscos")} label="Petiscos" />
                <Tab onClick={() => handleCategory("Mexicana")} label="Mexicana" />
            </Tabs>
        </CategoriesContainer>
    );
}