import styled from "styled-components";

export default function DefaultButton({ className = '', disabled, children, ...props }) {
    return (
        <BntPomodoro
            {...props}
            className={
                `justify-center w-full items-center py-2
                 bg-purplePrimary hover:bg-purple-900 border border-transparent rounded-md 
                 font-medium text-white  
                focus:bg-purplePrimary active:bg-purplePrimary focus:outline-none focus:ring-2 focus:ring-purplePrimary focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}

        >
            {children}
        </BntPomodoro>
    );
}

const BntPomodoro = styled.button `
    @media screen and (max-width: 768px) {
        padding: 6px;
    }
`
