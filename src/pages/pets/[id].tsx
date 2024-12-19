import "@/app/globals.css"
import { useRouter } from 'next/router';
import {useEffect, useState} from "react";
import {PetDto} from "@/services/pets";
import axios from "axios";
import ExpandedPetImage from "@/components/ExpandedPetImage";

const Pet = () => {
    const router = useRouter();
    const { id } = router.query;
    const [pet, setPet] = useState(new PetDto())
    const [corrosselImages, setCarrosselImages] = useState([])
    const [images, setImages] = useState([
        "https://www.petz.com.br/blog//wp-content/uploads/2018/09/tamanho-de-cachorro-pet-1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-qsrHzOaILVL7w5yi9AyTxkGncRwzipL0su2Zz1pp9qqLgfgKC6pZGvRyBd7FEuqrGjA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGBuK5M5GnDGtbJHEj5JdBNTomLDOzmRq8Q6nkJI87PrcWvrpuPmW9MskGkL2q3EngVA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jjRSwsrNsXpj-xrGwqrGy8_joasHM90Rg9rj8clC0n42xFtoK8fi4kxNcuQq3HKzijI&usqp=CAU",
        "https://classic.exame.com/wp-content/uploads/2023/08/cachorro1.jpg?quality=70&strip=info&w=1024",
        "https://blog.meupetclub.com.br/wp-content/uploads/2023/08/cachorrinho-feliz-sorrindo-em-fundo-roxo-isolado-scaled.jpg",
        "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2019/09/cachorro-getty-images1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTm7Qil2wME3oFRT6EgJWrIkCrWHaEZqZJMYhVS3AucLUZvVKyNSyxLtbAUzwrUmDsStA&usqp=CAU",
        "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/12/20/1527502278-golden-retriever.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORa6NEBGvLCT9-CC4IET5HfqBx_w2nKvlX6rLKho6btskRBzGIxFajBrIJO0LOlrhq1I&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWX4_pmssT_ZwUK-U7dqfKSQjT8Y0YGdP5RNMAvbiKyOP8l5kByx855osNXVoZD2IgrEI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7AZuN2v9lN3QvMKf7l3rt3Irqvd6XVj2X_Dt3LGV2pbfMqLLakTuYic0_Pk_L5EyH8E&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVMt8jgk7C_Q663KpIRReJV-uAZZfDxI7cecKPjr1q2X5OKbSum5P3cT5Pel_L26CTxdU&usqp=CAU"
    ])
    const [showExpandedPetImage, setShowExpandedPetImage] = useState(false)
    const [expandedPetImage, setExpandedPetImage] = useState('')

    function redirectHome(){
        router.push(`/`)
    }

    useEffect(() => {
        const fetchPet = () => {
            axios.get(`http://localhost:3001/pets/pets/${id}`)
                .then(response => {
                    setPet(response.data)
                    setCarrosselImages(response.data.photos)

                    let dummyArray = []
                    for(let i=0; i < 10; i++){
                        dummyArray.push(response.data.photos)
                    }
                })
                .catch(error => console.log(error))
        }
        fetchPet();
    }, [router.query]);

    function expandPetImage(image: string){
        setExpandedPetImage(image)
        setShowExpandedPetImage(true)
    }

    return (
        <div className={"w-dvw h-dvh"}>
            <ExpandedPetImage imageUrl={expandedPetImage} onClose={() => setShowExpandedPetImage(false)} show={showExpandedPetImage}></ExpandedPetImage>
            <div className={"w-full h-full flex flex-col"}>
                <div className={"flex h-[5%] w-full bg-gray-700"}>
                    <div className={"flex w-32 justify-center items-center hover:bg-gray-800 transition duration-100"} onClick={redirectHome}>
                        <p className={"text-gray-200 text-xl font-bold"}>Home</p>
                    </div>
                </div>
                <div className={"flex h-[95%] w-full"}>
                    <div className={"flex grow w-full h-full justify-center bg-gray-400"}>
                        <div className={"flex flex-col w-5/6 lg:w-2/3 justify-center items-center bg-gray-100 overflow-scroll"}>
                            <div className={"flex h-1/6 lg:h-1/3 w-full lg:w-2/3 justify-center items center"}>
                                <div className={"flex h-full w-full justify-center"}>
                                    <div className={"flex justify-center items-center w-full overflow-hidden h-full"}>
                                        <img
                                            className={"flex justify-center items-center overflow-hidden w-full"}
                                            src={corrosselImages[0]}
                                            alt={`Picture of ${pet.name}`}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={"flex flex-col h-5/6 lg:h-2/3 w-2/3"}>
                                <div className={"flex justify-center items-center bg-gray-100 pt-6 pb-6"}>
                                    <div className={"text-gray-700 text-3xl"}>{pet.name}</div>
                                </div>
                                <div className={"w-full flex flex-col items-center bg-gray-100"}>
                                    <div className={"grid grid-cols-2 lg:flex  lg:flex-row items-center w-full mt-5"}>
                                        <div className={" lg:w-1/5 h-24 bg-gray-100"}>
                                            <div className={"flex h-8 items-center justify-center text-lg text-gray-800 pl-3 font-medium"}>Age</div>
                                            <div className={"flex h-16 items-center justify-center text-gray-700 pl-3"}>{pet.age} years</div>
                                        </div>
                                        <div className={" lg:w-1/5 h-24 bg-gray-100"}>
                                            <div className={"flex h-8 items-center justify-center text-lg text-gray-800 pl-3 font-medium"}>Sex</div>
                                            <div className={"flex h-16 items-center justify-center text-gray-700 pl-3"}>{pet.sex}</div>
                                        </div>
                                        <div className={" lg:w-1/5 h-24 bg-gray-100"}>
                                            <div className={"flex h-8 items-center justify-center text-lg text-gray-800 pl-3 font-medium"}>Size</div>
                                            <div className={"flex h-16 items-center justify-center text-gray-700 pl-3"}>{pet.size}</div>
                                        </div>
                                        <div className={" lg:w-1/5 h-24 bg-gray-100"}>
                                            <div className={"flex h-8 items-center justify-center text-lg text-gray-800 pl-3 font-medium"}>Weight</div>
                                            <div className={"flex h-16 items-center justify-center text-gray-700 pl-3"}>{pet.weight} kg</div>
                                        </div>
                                        <div className={" lg:w-1/5 h-24 bg-gray-100"}>
                                            <div className={"flex h-8 items-center justify-center text-lg text-gray-800 pl-3 font-medium"}>Behavior</div>
                                            <div className={"flex h-16 items-center justify-center text-gray-700 pl-3"}>{pet.behavior}</div>
                                        </div>
                                    </div>
                                    <div className={"w-full h-24 bg-gray-100 mt-5"}>
                                        <div className={"flex h-8 items-center text-lg text-gray-800 pl-3 font-medium"}>Description</div>
                                        <div className={"flex h-16 items-center text-gray-700 pl-3"}>{pet.description}</div>
                                    </div>
                                    <div className={"w-full h-24 bg-gray-100 mt-5"}>
                                        <div className={"flex h-8 items-center text-lg text-gray-800 pl-3 font-medium"}>Observations</div>
                                        <div className={"flex h-16 items-center text-gray-700 pl-3"}>{pet.observations}</div>
                                    </div>
                                    <div className={"w-full bg-gray-100 mt-5 pb-10"}>
                                        <div className={"flex h-8 items-center text-lg text-gray-800 pl-3 font-medium"}>Photos</div>
                                        <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-gray"}>
                                            {
                                                images.map(image => {
                                                    return (
                                                        <div key={image} className={"flex justify-center align-center overflow-hidden h-48 p-1"} onClick={() => expandPetImage(image)}>
                                                            <img
                                                                src={image} alt={"pet image"}
                                                                className={"h-full w-full object-cover"}
                                                            />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pet;