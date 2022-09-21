import AsyncStorage from "@react-native-async-storage/async-storage";
import {format} from 'date-fns';

export interface PlantProps{
        id: string;
        name: string;
        about: string;
        water_tips: string;
        photo: string;
        environments: [string];
        frequency: {
            times: number;
            repeat_every: string;
        },
        dateTimeNotification: Date
}

interface StorgarePlantProps{
    [id:string] :{
        data:PlantProps;
    }
}

export async function savePlant(plant: PlantProps) : Promise<void> {
    try{
        const data = await AsyncStorage.getItem('@app: plants');
        const oldPlants = data ? (JSON.parse(data) as StorgarePlantProps) : {};
        const newPlant={
            [plant.id]:{
                data:plant
            }
        }
        await AsyncStorage.setItem('@app:plants',
        JSON.stringify({
            ...newPlant,
            ...oldPlants
        })
        );
    }catch (error) {
        throw new Error(error);
    }
}


export async function loadPlant(plant: PlantProps) : Promise<StorgarePlantProps> {
    try{
        const data = await AsyncStorage.getItem('@app: plants');
        const plants = data ? (JSON.parse(data) as StorgarePlantProps) : {};

        return plants;

    }catch (error) {
        throw new Error(error);
    }
}
