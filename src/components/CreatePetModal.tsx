import {ChangeEvent, useState, FormEvent} from "react";
import ReactDOM from "react-dom";
import {CreatePet, PetCreateDto} from "@/services/pets";

interface CreatePetModalProps {
    show: boolean;
    onClose: () => void;
    onSave: () => void;
}

export default function CreatePetModal(props: CreatePetModalProps){
    const initialFormData = {
        name: "",
        age: 0,
        sex: "male",
        size: "small",
        photos: [],
        weight: 0,
        description: "",
        behavior: "",
        observations: "",
    }
    const [formData, setFormData] = useState<PetCreateDto>(initialFormData)

    async function createPet(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const returnedPet = await CreatePet(formData)
        if(returnedPet){
            console.log(returnedPet)
            props.onSave();
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
        console.log(formData)
    }

    async function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        console.log(event)
        const updatedFormData = {
            ...formData,
            [event.target.name]: event.target.value
        }
        setFormData(updatedFormData)
        console.log(formData)
    }

    if (props.show){
        return ReactDOM.createPortal(
            <div className={"relative"}>
                <div className={"fixed top-0 left-0 bottom-0 right-0 w-dvw h-dvh flex justify-center items-center bg-gray-700"}>
                    <form className={"flex flex-col items-center w-4/5 space-y-12"} onSubmit={(event) => createPet(event)}>
                        <div className={"text-3xl text-gray-200 font-semibold"}>Register a new pet</div>
                        <div className={"flex w-full justify-around"}>
                            <div className={"w-2/5"}>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Name</label>
                                    <input className={"placeholder:text-gray-500 placeholder:pl-2 pl-2 text-gray-700 bg-gray-200 h-10 rounded-md"} type={"text"} placeholder={"Chiquinho"} name={"name"} onChange={(event) => handleInputChange(event)}></input>
                                    <p className={"mt-1 text-gray-400"}>Name must contain between 4 and 10 characters</p>
                                </div>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Age</label>
                                    <input className={"placeholder:text-gray-500 placeholder:pl-2 pl-2 text-gray-700 bg-gray-200 h-10 rounded-md"} type={"text"} placeholder={"3.2"} name={"age"} onChange={(event) => handleInputChange(event)}></input>
                                    <p className={"mt-1 text-gray-400"}>Positive decimal value in years</p>
                                </div>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Sex</label>
                                    <select id="sex" name="sex" className={"text-gray-700 bg-gray-200 h-10 rounded-md"} onChange={(event) => handleSelectChange(event)}>
                                        <option value={"male"}>Male</option>
                                        <option value={"female"}>Female</option>
                                    </select>
                                </div>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Description</label>
                                    <input className={"placeholder:text-gray-500 placeholder:pl-2 pl-2 text-gray-700 bg-gray-200 h-10 rounded-md"} type={"text"} placeholder={"test content"} name={"description"} onChange={(event) => handleInputChange(event)}></input>
                                    <p className={"mt-1 text-gray-400"}>General information about behavior and appearance</p>
                                </div>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Photos</label>
                                    <input className={"placeholder:text-gray-500 placeholder:pl-2 pl-2 text-gray-700 bg-gray-200 h-10 rounded-md"} type={"text"} placeholder={"test content"} name={"photos"} onChange={(event) => handleInputChange(event)}></input>
                                    <p className={"mt-1 text-gray-400"}>Field containing multiple uploads</p>
                                </div>
                            </div>
                            <div className={"w-2/5"}>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Behavior</label>
                                    <input className={"placeholder:text-gray-500 placeholder:pl-2 pl-2 text-gray-700 bg-gray-200 h-10 rounded-md"} type={"text"} placeholder={"test content"} name={"behavior"} onChange={(event) => handleInputChange(event)}></input>
                                    <p className={"mt-1 text-gray-400"}>Behavioral style</p>
                                </div>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Observations</label>
                                    <input className={"placeholder:text-gray-500 placeholder:pl-2 pl-2 text-gray-700 bg-gray-200 h-10 rounded-md"} type={"text"} placeholder={"test content"} name={"observations"} onChange={(event) => handleInputChange(event)}></input>
                                    <p className={"mt-1 text-gray-400"}>Observations other than description</p>
                                </div>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Size</label>
                                    <select id="size" name="size" className={"text-gray-700 bg-gray-200 h-10 rounded-md"} onChange={(event) => handleSelectChange(event)}>
                                        <option value={"small"}>Small</option>
                                        <option value={"medium"}>Medium</option>
                                        <option value={"large"}>Large</option>
                                    </select>
                                </div>
                                <div className={"flex flex-col mb-2 h-28"}>
                                    <label className={"text-gray-200 text-xl font-semibold mb-2"}>Weight</label>
                                    <input className={"placeholder:text-gray-500 placeholder:pl-2 pl-2 text-gray-700 bg-gray-200 h-10 rounded-md"} type={"text"} placeholder={"test content"} name={"weight"} onChange={(event) => handleInputChange(event)}></input>
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