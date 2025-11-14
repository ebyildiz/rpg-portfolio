"use client"
import Transition from '../Transition';
import Header from "./Header"
import { HashProvider } from './HashProvider';
import DotGrid from './DotGrid';


export default function CharacterLayout({ children }:
    Readonly<{
        children: React.ReactNode;
    }>) {


    return (
        <HashProvider>
            <div style={{ width: '100%', height: '100%', position: 'fixed' }}>
            <DotGrid
                dotSize={3}
                gap={20}
                baseColor="#000000"
                activeColor="#FF91FA"
                proximity={300}
                shockRadius={0}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}
            />
            </div>
            <main className="flex flex-col justify-center align-center pt-20 relative z-0">
                <Header />
                <Transition>
                    {children}
                </Transition>
            </main>

        </HashProvider>)
}