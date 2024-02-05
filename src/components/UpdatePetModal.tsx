import {ChangeEvent, useEffect, useState, FormEvent} from "react";
import ReactDOM from "react-dom";
import {CreatePet, PetCreateDto, PetDto, UpdatePet} from "@/services/pets";

interface UpdatePetModalProps {
    pet: PetDto;
    show: boolean;
    onClose: () => void;
    onSave: (pet:PetDto) => void;
}

export default function UpdatePetModal(props: UpdatePetModalProps){
    const [formData, setFormData] = useState<PetDto>(props.pet)

    useEffect(() => {
        setFormData(props.pet)
    }, [props.pet]);

    async function updatePet(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const returnedPet = await UpdatePet(formData)
        if(returnedPet){
            props.onSave(props.pet);
        } else {
            console.log('fail to create a new pet')
        }
    }

    async function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const updatedFormData = {
            ...formData,
            [event.target.name]: event.target.value
        }
        setFormData(updatedFormData)
    }

    async function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const updatedFormData = {
            ...formData,
            [event.target.name]: event.target.value
        }
        setFormData(updatedFormData)
    }

    if (props.show){
        return ReactDOM.createPortal(
            <div className={"relative"}>
                <div className={"fixed top-0 left-0 bottom-0 right-0 w-dvw h-dvh flex justify-center items-center bg-gray-700"}>
                    <form className={"flex flex-col items-center w-4/5 space-y-12"} onSubmit={(event) => updatePet(event)}>
                        <div className={"text-3xl text-gray-200 font-semibold"}>Update pet</div>
                        <div className={"flex w-full justify-around"}>
                            <div className={"w-2/5"}>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Name</label>
                                    <input className={"placeholder:text-gray-500 placeholder:pl-2 pl-2 text-gray-700 bg-gray-200 h-10 rounded-md"} type={"text"} name={"name"} value={formData.name} onChange={(event) => handleInputChange(event)}></input>
                                    <p className={"mt-1 text-gray-400"}>Name must contain between 4 and 10 characters</p>
                                </div>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Age</label>
                                    <input className={"placeholder:text-gray-500 placeholder:pl-2 pl-2 text-gray-700 bg-gray-200 h-10 rounded-md"} type={"text"} placeholder={"3.2"} name={"age"} value={formData.age} onChange={(event) => handleInputChange(event)}></input>
                                    <p className={"mt-1 text-gray-400"}>Positive decimal value in years</p>
                                </div>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Sex</label>
                                    <select id="sex" name="sex" value={formData.sex} className={"text-gray-700 bg-gray-200 h-10 rounded-md"} onChange={(event) => handleSelectChange(event)}>
                                        <option value={"male"}>Male</option>
                                        <option value={"female"}>Female</option>
                                    </select>
                                </div>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Description</label>
                                    <input className={"placeholder:text-gray-500 placeholder:pl-2 pl-2 text-gray-700 bg-gray-200 h-10 rounded-md"} type={"text"} placeholder={"test content"} name={"description"} value={formData.description} onChange={(event) => handleInputChange(event)}></input>
                                    <p className={"mt-1 text-gray-400"}>General information about behavior and appearance</p>
                                </div>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Photos</label>
                                    <input className={"placeholder:text-gray-500 placeholder:pl-2 pl-2 text-gray-700 bg-gray-200 h-10 rounded-md"} type={"text"} placeholder={"test content"} name={"photos"} value={formData.photos} onChange={(event) => handleInputChange(event)}></input>
                                    <p className={"mt-1 text-gray-400"}>Field containing multiple uploads</p>
                                </div>
                            </div>
                            <div className={"w-2/5"}>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Behavior</label>
                                    <input className={"placeholder:text-gray-500 placeholder:pl-2 pl-2 text-gray-700 bg-gray-200 h-10 rounded-md"} type={"text"} placeholder={"test content"} name={"behavior"} value={formData.behavior} onChange={(event) => handleInputChange(event)}></input>
                                    <p className={"mt-1 text-gray-400"}>Behavioral style</p>
                                </div>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Observations</label>
                                    <input className={"placeholder:text-gray-500 placeholder:pl-2 pl-2 text-gray-700 bg-gray-200 h-10 rounded-md"} type={"text"} placeholder={"test content"} name={"observations"} value={formData.observations} onChange={(event) => handleInputChange(event)}></input>
                                    <p className={"mt-1 text-gray-400"}>Observations other than description</p>
                                </div>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Size</label>
                                    <select id="size" name="size" value={formData.size} className={"text-gray-700 bg-gray-200 h-10 rounded-md"} onChange={(event) => handleSelectChange(event)}>
                                        <option value={"small"}>Small</option>
                                        <option value={"medium"}>Medium</option>
                                        <option value={"large"}>Large</option>
                                    </select>
                                </div>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Weight</label>
                                    <input className={"placeholder:text-gray-500 placeholder:pl-2 pl-2 text-gray-700 bg-gray-200 h-10 rounded-md"} type={"text"} placeholder={"test content"} name={"weight"} value={formData.weight} onChange={(event) => handleInputChange(event)}></input>
                                    <p className={"mt-1 text-gray-400"}>Positive decimal value in kilograms</p>
                                </div>
                            </div>
                        </div>

                        <div className={"flex justify-around w-1/4"}>
                            <button className={"w-32 h-16 bg-gray-800 text-gray-200 text-xl rounded-lg"} type={"submit"}>
                                Save
                            </button>
                            <button className={"w-32 h-16 bg-gray-800 text-gray-200 text-xl rounded-lg"} onClick={props.onClose}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>,
            document.getElementById("root") as HTMLElement
        )
    }
}