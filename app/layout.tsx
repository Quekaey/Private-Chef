import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
const cormorant = Cormorant_Garamond({ subsets:["latin"], variable:"--font-editorial", weight:["400","500","600"] });
const dm = DM_Sans({ subsets:["latin"], variable:"--font-dm" });
const manrope = Manrope({ subsets:["latin"], variable:"--font-manrope" });
export const metadata: Metadata = { title:{ default:"Maison Ember",template:"%s | Maison Ember" }, description:"Two intentional digital experiences for a fictional private chef brand in Lagos and Abuja." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${cormorant.variable} ${dm.variable} ${manrope.variable}`}>{children}</body></html>}
