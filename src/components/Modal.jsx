import styled from "styled-components";
import { BiX } from "react-icons/bi";

export default function Modal({
  imgDal,
  title,
  parrafo,
  estado,
  cambiarEstado,
  colorAusente,
  palettColor,
}) {
  return (
    <>
      {estado && (
        <Overlay>
          <ContentModal>
            <ContentImg>
              <img src={imgDal} />
            </ContentImg>
            <BotonCerrar onClick={() => cambiarEstado(false)}>
              <BiX size="30px" />
            </BotonCerrar>
            <ContentInfo>
              <div>
                <h1>{title}</h1>
                <p>{parrafo}</p>
              </div>
              <ContentColors>
                <div>
                  <h4>Color Ausente</h4>
                  <h3>{colorAusente}</h3>
                </div>
                <div>
                  <img src={palettColor} />
                </div>
              </ContentColors>
            </ContentInfo>
          </ContentModal>
        </Overlay>
      )}
    </>
  );
}

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
`;

const ContentModal = styled.div`
  max-width: 900px;
  min-height: 100px;
  background: #383838;
  position: relative;
  color: black;
  display: flex;
  gap: 50px;
  border-radius: 20px;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 500px;
    gap: 5px;
  }
`;

const ContentImg = styled.div`
  overflow: hidden;
  width: 100%;
  img {
    height: 100%;
  }

  @media only screen and (max-width: 600px) {
    img {
      width: 100%;
      height: auto;
    }
  }
`;

const BotonCerrar = styled.button`
  position: absolute;
  top: 15px;
  right: 25px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  color: #00efd8;
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-right: 50px;
  div h1 {
    color: #00efd8;
  }

  div p {
    color: #f3f3f3;
  }

  @media only screen and (max-width: 600px) {
    padding: 5px 10px;
    display: flex;
    gap: 20px;
 

    
`;

const ContentColors = styled.div`
  display: flex;
  justify-content: space-around;

  div h4 {
    color: #00efd8;
  }

  div h3 {
    color: #f3f3f3;
  }

  div img {
    width: 7.3125em;
    height: 7.23875em;
  }
`;
