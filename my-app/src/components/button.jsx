import { useState } from "react" ; 

const Title = () => {

     const [count, setCount] = useState(0);
     const [titre, setTitre] = useState("Hello World!");

    return (
        <div>
        <h1>{titre}</h1>
        <p>Ceci est un composant React simple.</p>
        <p>{count}</p>

        <button onClick={() => {
            setCount(count + 1)
        }}>click sur moi</button>

        <button onClick={() => {
            setTitre("Le titre a changé")
        }}>click pour changer le titre</button>

    </div>
    )

}

useEffect(() => {
    Apicall()
}, [])
export default Title; 
