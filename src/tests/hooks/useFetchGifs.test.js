import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe('Pruebas en el Hook useFetchGifs', () => {

    
    test('debe de retornar el estado inicial', async () => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs("Harry Potter") );
        
        const {data, loading} = result.current;
        // console.log(data, loading);
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    })

    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs("Harry Potter") );
        await waitForNextUpdate();

        const {data, loading} = result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    })
    
    

})
