import React from 'react'

export default function Switch() {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="group peer ring-0 bg-zinc-400 rounded-full outline-none duration-300 after:duration-300 w-16 h-8 peer-checked:bg-purplePrimary peer-focus:outline-none after:content-['✖️'] after:rounded-full after:absolute after:bg-zinc-50 after:outline-none after:h-6 after:w-6 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 after:text-sm">
            </div>
        </label>
    )
}
