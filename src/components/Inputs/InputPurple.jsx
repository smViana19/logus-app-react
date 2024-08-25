import styled from 'styled-components'; // Importe o styled-components

function InputPurple({ typeInput, placeholderInput, typeBtn, valueBtn,
    btnBgColor, btnTextColor, inputBorder }) {
    return (

        <div className="input-group">
            <Input // Corrija aqui
                type={typeInput}
                placeholder={placeholderInput}
                className="input"
                id="Email" name="Email"
                autoComplete="off"
                style={{
                    border: inputBorder,
                    //não consegui mudar a cor do placeholder
                }}
            />
            <BtnInput 
                type={typeBtn}
                value={valueBtn}
                className="button--submit"
                style={{
                    backgroundColor: btnBgColor,
                    color: btnTextColor,
                }}
            />
        </div>
    )
}

export default InputPurple;

const Input = styled.input` 
  width: 380px; 
  min-height: 44px;
  padding: 0 1rem;
  color: #fff;
  font-size: 15px;
  border: 1px solid #820ad1;
  border-radius: 16px 0 0 16px;
  background-color: transparent;
  outline: none;

  @media screen and (max-width: 768px) {
    width: 280px; 
  }
`;

const BtnInput = styled.input` 
  width: 640 px;
  min-height: 44px;
  padding: 0 1rem;
  color: #fff;
  font-size: 15px;
  border: 1px solid #820ad1;
  border-radius: 0 16px 16px 0;
  outline: none;
  background-color: #820AD1

  @media screen and (max-width: 768px) {
    width: 64px; 
  }
`;

