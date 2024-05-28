import '../../css/welcome.css'
function InputPurple({typeInput, placeholderInput, typeBtn, valueBtn,
                                    btnBgColor, btnTextColor, inputBorder}) {
    return(
      
        <div className="input-group">
        <input 
            type={typeInput}
            placeholder={placeholderInput}
            className="input"
            id="Email" name="Email"
            autocomplete="off"
            style={{
                border: inputBorder,
                //não consegui mudar a cor do placeholder
            }}
            
            />
        <input
            typeBtn={typeBtn}
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