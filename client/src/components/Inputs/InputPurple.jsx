import '../../css/welcome.css'
function InputPurple({ typeinput, placeholderInput, typebtn, valuebtn,
    btnBgColor, btnTextColor, inputBorder }) {
    return (

        <div className="input-group">
            <input
                type={typeinput}
                placeholder={placeholderInput}
                className="input"
                id="Email" name="Email"
                autoComplete="off"
                style={{
                    border: inputBorder,
                    //não consegui mudar a cor do placeholder
                }}

            />
            <input
                typeBtn={typebtn}
                value={valuebtn}
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