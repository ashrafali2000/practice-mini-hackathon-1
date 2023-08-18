import { useEffect, useState } from "react";
export default function Home() {
  const [produts, setPorducts] = useState([])

  useEffect(() =>{
  fetch("/api/products/")
  .then(res => res.json())
  .then((p) => setPorducts(p.products))
}, []);

  return (
    <>
    {produts.map(p  => <li key={p.id}>{p.title}</li>)}
    </>
  )
}
