import {useEffect, useState} from "react";
import CreatePetModal from "@/components/CreatePetModal";
import PetCard from "@/components/PetCard";
import axios from "axios";
import UpdatePetModal from "@/components/UpdatePetModal";
import {ListPets, PetDto} from "@/services/pets";
import TopNavbar from "@/components/TopNavbar";


// TODO: Find a way of extracting those services to the PetService
interface PetsDashboardProps {
    pets: PetDto[]
}
export default function PetsDashboard (props: PetsDashboardProps) {
    const [pets, setPets] = useState<PetDto[]>([])
    const [showCreatePetModal, setShowCreatePetModal] = useState(false)
    const [petOnUpdateModal, setPetOnUpdateModal] = useState<PetDto>(new PetDto())
    const [showUpdatePetModal, setShowUpdatePetModal] = useState(false)

    useEffect(() => {
        ListPets()
            .then((data) => {
                setPets(data)
            })
            .catch(error => {
                setPets([])
            })
    }, [])


    function updateComponent(){
        ListPets()
            .then((data) => {
                setPets(data)
                setShowUpdatePetModal(false);
            })
            .catch(error => {
                setPets([])
            })
    }


    async function onDelete(id: string) {
        const deleteResponse = await axios.delete(`http://localhost:3001/pets/pets/${id}`)
        if (deleteResponse.status == 204){
            const pets = await axios.get('http://localhost:3001/pets/pets/');
            if (pets.data) {
                setPets(pets.data)
            }
        }
    }

    function openUpdatePetModal(pet: PetDto){
        setPetOnUpdateModal(pet);
        setShowUpdatePetModal(true);
    }

    return (
        <div className={"w-full h-full"}>
            <CreatePetModal show={showCreatePetModal} onClose={() => setShowCreatePetModal(false)} onSave={() => updateComponent()}></CreatePetModal>
            <UpdatePetModal show={showUpdatePetModal} onClose={() => setShowUpdatePetModal(false)} onSave={() => updateComponent()} pet={petOnUpdateModal}></UpdatePetModal>
            <div className={"w-full h-full flex flex-col"}>
                <div className={"flex h-full flex-col justify-center items-center w-full bg-gray-200"}>
                    <div className={"flex pt-3 pb-3 h-full w-4/6 lg:w-5/6"}>
                        <div className={"w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 place-items-center overflow-y-scroll scrollbar-hide"}>
                            {
                                pets.map(pet => {
                                    return (
                                        <PetCard key={pet.id} pet={pet} onDelete={() => onDelete(pet.id)} onClickUpdate={(pet) => openUpdatePetModal(pet)} onClose={() => setShowUpdatePetModal(false)}></PetCard>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/*<div className={"flex justify-center items-center p-3 h-[10%]"}>*/}
                    {/*    <button className={"w-32 h-12 bg-gray-800 text-gray-200 text-xl rounded-lg"} onClick={() => setShowCreatePetModal(true)}>*/}
                    {/*        Register Pet*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}