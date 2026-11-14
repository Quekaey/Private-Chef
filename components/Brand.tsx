import Link from "next/link";
export function EmberMark({dark=false}:{dark?:boolean}){return <span className={`ember-mark ${dark?"mark-dark":""}`} aria-hidden="true"><i/><b/></span>}
export function Brand({href="#",tone="light"}:{href?:string;tone?:"light"|"dark"}){return <Link href={href} className={`brand brand-${tone}`} aria-label="Maison Ember home"><EmberMark dark={tone==="dark"}/><span>MAISON <em>EMBER</em></span></Link>}
