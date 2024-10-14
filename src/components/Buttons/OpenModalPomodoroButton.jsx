export default function OpenModalPomodoroButton({ text, svg, onClick }) {
  return (
      <button
          onClick={onClick}
          className="cursor-pointer flex gap-8 items-center bg-white lg:px-16 px-8 justify-center py-1.5 lg:py-2 rounded-lg border border-gray-100 shadow-sm dark:text-zinc-100 dark:border-zinc-600 "
      >
        {svg}
        <span>{text}</span>
      </button>
  );
}
