import React from'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Welcome } from '../pages/Welcome';
import colors from '../../styles/colors';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';
const stackRoutes = createStackNavigator();
const AppRoutes: React.FC = ()=>(
    <stackRoutes.Navigator
        screenOptions={{
            cardStyle: {
                backgroundColor:colors.white
            }
        }}
>

        <stackRoutes.Screen
        name="Welcome"
        component={Welcome}
        options={{ title: 'Centro Espírita Caboclo 7 Flechas ' }}
        />
         <stackRoutes.Screen
        name="UserIdentification"
        component={UserIdentification}
        options={{ title: 'Macumbeiro 🌿 ' }}
        />
         <stackRoutes.Screen
        name="Confirmation"
        component={Confirmation}
        options={{ title: 'Confirmação 🌿' }}
        />

        <stackRoutes.Screen
        name="PlantSelect"
        component={PlantSelect}
        options={{ title: 'Bem Vindo Macumbeiro(a)' }}
        />

        <stackRoutes.Screen
        name="PlantSave"
        component={PlantSave}
        options={{ title: 'Bem Vindo Macumbeiro(a)' }}
        />
          <stackRoutes.Screen
        name="MyPlants"
        component={MyPlants}
        options={{ title: 'Bem Vindo Macumbeiro(a)' }}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes;