import { ReactNode } from "react"

export default function Logo({ children, txt, pos, classN }:{children:ReactNode, txt:string, pos:string, classN:string}) {
    return (
        <div className={`absolute group cursor-pointer ${pos}`}>
            <div className={classN}>   {/* <<< animate THIS div */}
                <div className="w-fit h-fit">  {/* <<< add a proper wrapper */}
                    {children}
                </div>
            </div>

            <div className="absolute top-[50px] flex justify-center opacity-0 group-hover:opacity-100 duration-200 text-xl bg-gray-200 text-black w-max px-5 rounded">
                {txt}
            </div>
        </div>
    )
}
