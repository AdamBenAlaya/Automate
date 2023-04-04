import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React , {useState} from 'react'

export default function Dashboard() {
    const [dropState,setDropState] = useState(true)
    return (
        <View style={styles.container}>
            <View >
                <View style={styles.HeadTitle}>
                    <Text style={styles.HeadText}>Salim's Car</Text>
                </View>

                <View style={styles.box}>
                    <View>
                        <Image style={styles.carPhoto1} source={require('../images/baterias-piracicaba-Baterias-Automotivas.png')} />
                        <Text style={{ textAlign: 'center', color: 'white', paddingTop: 120, paddingLeft: 25, fontSize: 18, position: 'absolute' }}>Mercedes Class C </Text>
                    </View>
                    <View>
                        <Image style={styles.carPhoto2} source={require('../images/R.png')} />
                    </View>
                </View>
                <Pressable style={styles.dropDown} 
                    onPress={()=>{
                        setDropState(!dropState)
                    }}
                >
                    <Text style={{ color: 'white', padding: 15 }}>See All About My Car </Text>
                    <Image style={styles.arrow} source={require('../images/arr.png')} />
                </Pressable>
                <View style={dropState ? styles.dropDownOff : styles.dropDownOn }>

                    <View style={styles.subDrop1}>
                        <Text style={{ color: 'white',padding:5 }}>Insurance Deadline</Text>
                        <Text style={{ color: 'white',padding:5 }}>Visita Deadline            </Text>
                        <Text style={{ color: 'white',padding:5 }}>Vidange Deadline      </Text>
                        <Text style={{ color: 'white',padding:5 }}>Last Time At The Garage </Text>
                    </View>
                    <View style={styles.subDrop2}>
                        <Text style={{ color: 'white',padding:5 }}>: 28/02/23</Text>
                        <Text style={{ color: 'white',padding:5 }}>: 10/02/23</Text>
                        <Text style={{ color: 'white',padding:5 }}>: 09/07/23  </Text>
                        <Text style={{ color: 'white',padding:5 }}>: 06/05/23</Text>
                    </View>
                </View>

                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E293B'
    },
    HeadTitle: {
        backgroundColor: '#000113',
        height: 100
    },
    HeadText: {
        color: 'white',
        textAlign: 'center',
        paddingTop: 30,
        fontSize: 30
    },
    carPhoto1: {
        width: 140,
        height: 140,
        margin: 30,
        marginTop: 0,
        marginBottom: 0
    },
    carPhoto2: {
        width: 100,
        height: 100,
        margin: 35,
        marginLeft: 20

    },
    box: {
        flexDirection: 'row',
        backgroundColor: '#000113',
        margin: 10,
        marginTop: 20,
        borderRadius: 10
    },
    dropDown: {
        backgroundColor: '#000113',
        height: 50,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dropDownOn: {
        opacity: 1, 
        transition:'2s, transform 2s' ,
        backgroundColor: '#000113',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        borderRadius: 10,
    },
    dropDownOff:{
        display:'none',
        opacity: 0 

    },  
    arrow: {
        height: 20,
        width: 20,
        margin: 18
    }

    ,
    subDrop1:{
        margin:20
    },
    subDrop2:{
        margin:20
    }

})