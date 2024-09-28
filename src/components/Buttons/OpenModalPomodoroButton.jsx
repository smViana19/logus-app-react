export default function OpenModalPomodoroButton({ text, svg, onClick }) {
  return (
      <button
          onClick={onClick}
          className="cursor-pointer flex gap-4 items-center bg-white px-10 justify-center py-1 rounded-lg border border-gray-100 shadow-sm dark:text-zinc-100 dark:border-zinc-600 w-full md:w-40 md:px-8"
      >
        {svg}
        <span>{text}</span>
      </button>
  );
}
