import styled from "styled-components";

//Componente contenedor de la calculadora y sus estilos.
export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 400px;
  margin: 40px auto;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;
`;
//componente de pantalla en donde se van a visualizar las operaciones aritmeticas.
export const Screen = styled.div`
  grid-column: 1 / -1;
  background-color: rgba(60, 64, 67, 0.75);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
//componente que muestra la operacion aritmetica realizada anteriormente.
export const Previous = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
`;
//componente que muestra los numeros o operaciones digitadas en el momento.
export const Current = styled.div`
  color: white;
  font-size: 2.5rem;
`;
//componente de boton que da estilo base a todos los botones de la calculadora.
export const Button = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: 1px outset white;
  outline: none;
  background-color: rgba(255, 255, 255, 0.75);
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
  //Funcion para personalizacion de botones
  ${({ gridSpan }) => gridSpan && `grid-column: span ${gridSpan};` }

  ${({ operation }) => operation && `background-color: gray;` }
  ${({ control }) => control && `background-color: skyblue;` }
  ${({ equals }) => equals && ` border-bottom-right-radius: 10px; background-color: gray;` }
  ${({ period }) => period && ` border-bottom-left-radius: 10px; background-color: skyblue;` }
`;
