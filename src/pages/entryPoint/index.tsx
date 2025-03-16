import { Icon } from "@iconify/react"
import ConfianceLogo from "../../assets/images/confiance/icon-confiance-blue-gradient.png"
import { Link } from "react-router-dom"

export default function EntryPoint() {
    return (
        <main className="h-screen overflow-hidden relative">
            <section className="bg-gray-100">
                <div className="container mx-auto h-[17em] px-10 py-3 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col items-center">
                            <img src={ConfianceLogo} alt="Confiance logo" className="w-[3.5em]" />
                            <h3 className="font-extrabold text-[1em]">Confiance</h3>
                        </div>
                        <button className="bg-[#0A69FB] text-white text-[0.8em] w-[11em] py-[0.9em] rounded-[8px] flex items-center justify-center gap-2 mt-2">
                            <Icon icon="tabler:logout-2" className="text-white text-[1.1em]" />
                            Deconnexion
                        </button>
                    </div>
                    <div className="flex justify-center pb-7">
                        <h1 className="font-semibold pb-1 text-[1.5em] text-gray-600 custom-header">Nous vous souhaitons la bienvenue, Isaac</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto px-10 h-[calc(100vh-17em)] overflow-y-auto scrollbar pb-7 pt-10">
                    <div className="grid grid-cols-4 gap-4">
                        <Link to={""} className="border h-[8em] rounded-[8px] px-4 py-4 hover:bg-gray-50">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-[1.8em] h-[1.8em] flex items-center justify-center rounded-[5px]" style={{backgroundColor: "rgba(10, 105, 251, 0.2)"}}>
                                    <Icon icon="uil:invoice" className=" text-[1.3em] text-[#0A69FB]" />
                                </div>
                                <h3 className="font-medium text-gray-600 text-[1em]">Gestion des Factures</h3>
                            </div>
                            <p className="text-[0.8em] text-gray-500">Across 50M+ jobs worldwide from Linkedin, Indeed, Workable, Greenhouse, etc.</p>
                        </Link>
                        <Link to={""} className="border h-[8em] rounded-[8px] px-4 py-4 hover:bg-gray-50">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-[1.8em] h-[1.8em] flex items-center justify-center rounded-[5px]" style={{backgroundColor: "rgba(10, 105, 251, 0.2)"}}>
                                    <Icon icon="streamline:desktop-dollar-solid" className=" text-[1.3em] text-[#0A69FB]" />
                                </div>
                                <h3 className="font-medium text-gray-600 text-[1em]">Produits / Services</h3>
                            </div>
                            <p className="text-[0.8em] text-gray-500">Across 50M+ jobs worldwide from Linkedin, Indeed, Workable, Greenhouse, etc.</p>
                        </Link>
                        <Link to={""} className="border h-[8em] rounded-[8px] px-4 py-4 hover:bg-gray-50">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-[1.8em] h-[1.8em] flex items-center justify-center rounded-[5px]" style={{backgroundColor: "rgba(10, 105, 251, 0.2)"}}>
                                    <Icon icon="garden:customer-lists-fill-26" className=" text-[1.3em] text-[#0A69FB]" />
                                </div>
                                <h3 className="font-medium text-gray-600 text-[1em]">Gestion clients</h3>
                            </div>
                            <p className="text-[0.8em] text-gray-500">Across 50M+ jobs worldwide from Linkedin, Indeed, Workable, Greenhouse, etc.</p>
                        </Link>
                        <Link to={""} className="border h-[8em] rounded-[8px] px-4 py-4 hover:bg-gray-50">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-[1.8em] h-[1.8em] flex items-center justify-center rounded-[5px]" style={{backgroundColor: "rgba(10, 105, 251, 0.2)"}}>
                                    <Icon icon="map:accounting" className=" text-[1.3em] text-[#0A69FB]" />
                                </div>
                                <h3 className="font-medium text-gray-600 text-[1em]">Comptabilité</h3>
                            </div>
                            <p className="text-[0.8em] text-gray-500">Across 50M+ jobs worldwide from Linkedin, Indeed, Workable, Greenhouse, etc.</p>
                        </Link>

                        <Link to={""} className="border h-[8em] rounded-[8px] px-4 py-4 hover:bg-gray-50">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-[1.8em] h-[1.8em] flex items-center justify-center rounded-[5px]" style={{backgroundColor: "rgba(10, 105, 251, 0.2)"}}>
                                    <Icon icon="icon-park-twotone:plan" className=" text-[1.3em] text-[#0A69FB]" />
                                </div>
                                <h3 className="font-medium text-gray-600 text-[1em]">Planification</h3>
                            </div>
                            <p className="text-[0.8em] text-gray-500">Across 50M+ jobs worldwide from Linkedin, Indeed, Workable, Greenhouse, etc.</p>
                        </Link>
                        <Link to={""} className="border h-[8em] rounded-[8px] px-4 py-4 hover:bg-gray-50">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-[1.8em] h-[1.8em] flex items-center justify-center rounded-[5px]" style={{backgroundColor: "rgba(10, 105, 251, 0.2)"}}>
                                    <Icon icon="pepicons-pop:hammer-claw" className=" text-[1.3em] text-[#0A69FB]" />
                                </div>
                                <h3 className="font-medium text-gray-600 text-[1em]">Légalités</h3>
                            </div>
                            <p className="text-[0.8em] text-gray-500">Across 50M+ jobs worldwide from Linkedin, Indeed, Workable, Greenhouse, etc.</p>
                        </Link>
                    </div>
                </div>
            </section>
            <div className="absolute bottom-[50px] right-[50px]">
                <Link to={""} className="flex items-center bg-[#0A69FB] text-white w-[9em] py-2 rounded-[40px] flex justify-center gap-2 text-[0.9em]">
                    Passer
                    <Icon icon="fluent:door-arrow-right-16-regular" className=" text-[1.3em]" />
                </Link>
            </div>
        </main>
    )
}
