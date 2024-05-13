// import Logo from '../components/Logo';
// import { Link } from "react-router-dom"; //caso nao funcionar a rota é isso aq que coloquei
import '../css/style.css';

export default function LayoutDeslogado({children}) { //CHILDREN PARA JUNTAR COM OUTROS COMPONENTES NAS PAGINAS
    return(
        <div className="min-h-screen
        flex flex-col
        sm:justify-center
        items-center pt-6
        sm:pt-0
        bg-corFundo">
            <div className="w-full max-w-xl mt-6 px-6 py-6 bg-white drop-shadow-2xl overflow-hidden sm:rounded-lg">
                <div className="flex justify-center">

                </div>
                {children}

            </div>
        </div> 
    );
}