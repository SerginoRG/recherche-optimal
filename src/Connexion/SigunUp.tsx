import { Link } from "react-router-dom"
import { useState } from "react"

function SigunUp(){

    const [nom, setNom] = useState<string>("");
    const [address, setAdress] = useState<string>("");
    const [numeroTel, setNumeroTel] = useState<string>();

    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) =>{
            e.preventDefault();

            if (nom !== "" && address !== "" && numeroTel !== "") {
                 alert("Inscription réussie");
            } else {
                alert("Erreur : champs vides");
            }
                
    };

    return(
        <>
        <h1>Insrirez</h1>

        <form onSubmit={handleSignIn}>
            <label>Nom</label>
            <input 
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            />

            <br />

            <label>Adresse</label>
            <input type="text"
            placeholder="Adress"
            value={address}
            onChange={(e) => setAdress(e.target.value)}
            />

            <br />

            <label>Numbre</label>
            <input 
            type="number"
            placeholder="034 ** *** **"
            value={numeroTel}
            onChange={(e) => setNumeroTel(e.target.value)}
            />
            <br />
            <br />

            <input type="submit" value="Envoyer" />

        </form>
<br />
        <Link to="/">Retour</Link>
        </>
    )
}

export default SigunUp