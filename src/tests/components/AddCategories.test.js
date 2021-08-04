import { shallow } from "enzyme";
import { AddCategories } from "../../components/AddCategories";
import "@testing-library/jest-dom";



describe('Pruebas en <AddCategories />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategories setCategories={setCategories} />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategories setCategories={setCategories} />);

    });


    test('Debe de mostrarse correctamente', () => {



        expect(wrapper).toMatchSnapshot();

    })

    test("debe de cambiar la caja de texto", () => {

        const input = wrapper.find("input");
        const value = "Hola mundo"

        input.simulate("change", { target: { value } });

        const p = wrapper.find("p").text().trim();

        expect(p).toBe(value);

    })


    test("NO debe de postear la informacion con submit", () => {

        wrapper.find("form").simulate("submit", { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    
    })

    test("debe de llamar el setCategories y limpiar la caja de texto", () => {

        const value = "Hola mundo";

        wrapper.find("input").simulate("change", { target: { value } });

        wrapper.find("form").simulate("submit", { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith(expect.any(Function) );



        expect(wrapper.find("input").prop("value")).toBe("");

    })

})
