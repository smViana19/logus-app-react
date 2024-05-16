import '../css/style.css';

export default function LayoutDeslogado({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:flex-row bg-purpleLightBg">
            <div className="w-full sm:w-1/2 bg-purpleBg"></div>
            <div className="w-full sm:w-1/2 flex justify-center items-center">
                <div className="w-full max-w-md px-6 py-6 bg-white drop-shadow-2xl sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
