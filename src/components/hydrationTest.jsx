"use client"

// import HydrationTest from "@/components/hydrationTest"; --> this component

// import dynamic from "next/dynamic";

// FIRST METHOD TO AVOID HYDRATION
// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})
// <HydrationTestNoSSR/> 

// SECOND METHOD
// <div suppressHydrationWarning>{a}</div> 

// THIRD METHOD
// using useEffect and useState of react 

const HydrationTest = () => {

  const a = Math.random();
  
  console.log(a);

  return (
    <div>{a}</div>
  )
}

export default HydrationTest