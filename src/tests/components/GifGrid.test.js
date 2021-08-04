import React from 'react';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = "Dragon Ball";
    
    test('debe de mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data : [],
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category={category} /> )
        expect(wrapper).toMatchSnapshot();
        
    });

    test('debe de mostrar items cuando se cargan imagenes UseFetchGifs', () => {

        const imgs = [{
            id: "asd",
            url:"https://localhost.com",
            title: "Cualquier cosa"
        },
        {
            id: "asd",
            url:"https://localhost.com",
            title: "Cualquier cosa"
        }];

        useFetchGifs.mockReturnValue({
            data : imgs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={category} /> );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists() ).toBe(false);
        
        expect(wrapper.find("GifGridItem").length).toBe(imgs.length);

    });

})


