// Subtitle.jsx
export default function Subtitulo({ children, centered }) {
    return (
      <h2 className={centered ? 'text-3xl font-bold text-center' : 'text-3xl font-bold mb-8 w-1/2'}>{children}</h2>
    );
  }
  
