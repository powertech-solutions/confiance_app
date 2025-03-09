import ConfianceLogo from "../../assets/images/confiance/icon-confiance-blue-gradient.png";

export default function Register() {
    return (
        <div className="h-full relative flex justify-center">
            <div>
                <div className="rounded-[8px] bg-white px-[2em] pt-[1.7em] pb-[2.5em]">
                    <div className="flex flex-col items-center mb-[2em]">
                        <img src={ConfianceLogo} alt="Confiance logo" className="w-[3.5em]" />
                        <h3 className="font-extrabold text-[1.1em]">Confiance</h3>
                    </div>
                    <div className="flex flex-col gap-[1em]">
                        <h3 className="text-center font-semibold text-[0.9em]">Créer votre compte</h3>
                        <input type="text" placeholder="Adrèsse mail" className="border w-[21em] py-[0.45em] px-[0.7em] placeholder:text-[0.9em] rounded-[5px] outline-none text-[0.9em]" />
                        <input type="text" placeholder="Mot de passe" className="border w-[19em] py-[0.4em] px-[0.7em] placeholder:text-[0.8em] rounded-[5px] outline-none" />
                        <input type="text" placeholder="Confirmer le mot de passe" className="border w-[19em] py-[0.4em] px-[0.7em] placeholder:text-[0.8em] rounded-[5px] outline-none" />
                    </div>
                    <button className="w-full text-white font-medium rounded-[5px] py-[0.5em] mt-[1em]" style={{ background: "linear-gradient(90deg, #01A4F7 0%, #0A69FB 100%)" }}>
                        S'enregistrer
                    </button>
                </div>
            </div>
        </div>
    );
};
