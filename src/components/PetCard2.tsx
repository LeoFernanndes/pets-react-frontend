import {useRouter} from "next/navigation";

interface Pet {
    id: string;
    name: string;
    age: number;
    sex: string;
    size: string;
    photos: string[];
    weight: number;
    description: string;
    behavior: string;
    observations: string;
}

interface PetCardProps {
    pet: Pet
    onClose: () => void;
    onDelete: () => void;
    onClickUpdate: (pet: Pet) => void;
}

export default function PetCard(props: PetCardProps){
    const router = useRouter();
    function onClick(){
        router.push(`/pets/${props.pet.id}`)
    }

    return (
        <>
            <div className={"bg-gray-700 rounded-lg h-64 w-56 flex flex-col hover:bg-gray-600 transition duration-100"}>
                <button className={"h-5/6"} onClick={onClick}>
                    <div className={"flex justify-center items-center h-4/6"}>
                        <div className={"flex justify-center items-center h-5/6 w-5/6 bg-gray-200 rounded-lg overflow-hidden"}>
                            <img
                                className={"w-full h-full object-cover"}
                                src={props.pet.photos[0]}
                                alt={`Picture of ${props.pet.name}`}
                            />
                        </div>
                    </div>
                    <div className={"flex flex-col h-2/6 items-center pb-1"}>
                        <div className={"h-1/3 w-5/6 text-center text-gray-200 text-lg"}>{props.pet.name}</div>
                        <div className={"h-1/3 w-5/6 text-center text-gray-200 text-lg"}>{props.pet.age}</div>
                        <div className={"h-1/3 w-5/6 text-center text-gray-200 text-lg"}>{props.pet.size}</div>
                    </div>
                </button>
                <div className={"flex justify-around h-1/6"}>
                    <button className={"flex w-1/2 justify-center items-center bg-gray-800 rounded-lg text-gray-200 text-gray-200 text-lg m-1"} onClick={() => props.onClickUpdate(props.pet)}>Edit</button>
                    <button className={"flex w-1/2 justify-center items-center bg-gray-800 rounded-lg text-gray-200 text-gray-200 text-lg m-1"} onClick={() => props.onDelete()}>Delete</button>
                </div>
            </div>
        </>
    )
}