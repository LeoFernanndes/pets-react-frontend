import axios from "axios";
import HttpRequests from "@/services/httpRequests";

export class PetCreateDto {
    name: string = "";
    age: number = 0;
    sex: string = "";
    size: string = "";
    photos: string[] = [];
    weight: number = 0;
    description: string = "";
    behavior: string = "";
    observations: string = "";
}

export class PetDto extends PetCreateDto {
    id: string = "";
}

export async function ListPets(): Promise<any> {
    const authTokens = HttpRequests.getLocalStorageAuthHeaders();
    console.log(authTokens)
    const response = await axios.get('http://localhost:3001/pets/pets/',  {headers: {'Authorization': authTokens.authToken, 'Refresh': authTokens.refreshToken}})
    if (response.status == 200){
        return response.data
    } else {
        return null
    }
}

export async function CreatePet(pet: PetCreateDto): Promise<any> {
    const authTokens = HttpRequests.getLocalStorageAuthHeaders();
    const response = await axios.post('http://localhost:3001/pets/pets/', pet, {headers: {Authorization: authTokens.authToken, Refresh: authTokens.refreshToken}})
    if (response.status == 201){
        return response.data
    } else {
        return null
    }
}

export async function UpdatePet(pet: PetDto): Promise<any> {
    const response = await axios.put(`http://localhost:3001/pets/pets/${pet.id}`, pet)
    if (response.status == 200){
        return response.data
    } else {
        return null
    }
}