export default function Subtitulo({ children, centered }) {
  return (
    <h2 className={centered ? 'text-3xl font-bold text-center' : 'text-3xl font-bold mb-8 w-full md:w-80'}>{children}</h2>
  );
}
