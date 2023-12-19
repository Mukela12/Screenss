import { View, Text, SafeAreaView, TouchableOpacity, TextInput, ScrollView, Dimensions, Im } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";

const InternationalDealsComponent = (props) => {

   const { width, height } = Dimensions.get('window');

    return (
      <TouchableOpacity className={`w-[${width - 50}px] h-[95%] flex items-center justify-center`}>
        <View className={`w-[90%] h-[65%] rounded-md shadow border-[0.25px] border-gray-300 bg-white flex items-center justify-center`}>
          <Text>Place Brand Image here</Text>
        </View>
        <View className={`w-[90%] h-[35%] flex items-start justify-center`}>
          <View className={`w-full h-[50%] flex items-start justify-center`}>
            <Text className={`font-bold text-[25px]`}>{props.store}</Text>
          </View>
          <View className={`w-full h-[50%] flex items-start justify-start`}>
            <Text className={`font-light text-[15px]`}>{props.category}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
}

const LocalDealsComponent = (props) => {
  const { width, height } = Dimensions.get('window');

  return (
    <TouchableOpacity className={`w-[${width - 50}px] h-[95%] flex items-center justify-center`}>
      <View className={`w-[90%] h-[65%] rounded-md shadow border-[0.25px] border-gray-300 bg-white flex items-center justify-center`}>
          <Text>Place Brand Image here</Text>
      </View>
      <View className={`w-[90%] h-[35%] flex items-start justify-center`}>
        <View className={`w-full h-[50%] flex items-start justify-center`}>
          <Text className={`font-bold text-[25px]`}>{props.store}</Text>
        </View>
        <View className={`w-full h-[50%] flex items-start justify-start`}>
          <Text className={`font-light text-[15px]`}>{props.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const FeaturedDealsComponent = (props) => {
  
  return (
    <TouchableOpacity className={`w-[200px] h-[95%] flex items-center justify-center mr-5`}>
      <View className={`w-[90%] h-[90%] rounded-md shadow border-[0.25px] border-gray-300 bg-white`}>
        <View className={`w-full h-[75%] flex items-center justify-center`}>  
          <Text>Place Product Image Here</Text>
        </View>
        <View className={`w-full h-[25%]`}>
          <View className={`w-full h-[50%] flex items-center justify-center`}>
            <Text className={`font-bold text-sm`}>{props.product}</Text>
          </View>
          <View className={`w-full h-[50%] flex items-center justify-center`}>
            <Text className={`font-normal text-lg text-green-500`}>{props.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const StudentHomeScreen = () => {
  
  return (
    <SafeAreaView className="w-full h-full">
        <View className={`w-full h-[10%] flex flex-row items-center justify-between px-5 `}>
            <TouchableOpacity className={`w-[45px] h-[45px] rounded-full bg-slate-200 flex items-center justify-center`}>
              <Ionicons name='camera' size={25}/>
            </TouchableOpacity>
            <TouchableOpacity className={`w-[45px] h-[45px] rounded-full bg-slate-200 flex items-center justify-center`}>
              <Ionicons name='notifications' size={25}/>
            </TouchableOpacity>
        </View>
        <View className={`w-full h-[8%] mt-1 mb-3 rounded-l-2xl flex flex-row items-center justify-center`}>
          <TextInput 
            placeholder='Search'
            className={`w-[77%] px-2 font-semibold shadow border-gray-300 border-[0.25px] bg-white rounded-l-2xl h-[90%]`}
          />
          <TouchableOpacity className={`w-[12%] shadow border-gray-300 border-[0.25px] bg-white rounded-r-2xl flex items-center justify-center h-[90%]`}>
            <Ionicons name='search' size={25}/>
          </TouchableOpacity>
        </View>

        <View className={`flex-1`}>
          <ScrollView showsVerticalScrollIndicator={false} className={`w-full`}>
            <View className={`w-full h-[300px] flex items-center justify-center`}>
              <View className={`w-full h-[12%] flex items-start px-2 justify-center`}>
                <Text className={`font-bold text-[20px]`}>Explore International Deals</Text>
              </View>
              <View className={`flex-1 w-full h-[88%]`}>
                <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:"center", justifyContent: "center"}} className={`h-full`} horizontal={true}>
                  {internatialDealData.map((deal, index) => (
                    <InternationalDealsComponent 
                      key={deal.store}
                      index={index}
                      {...deal}
                    />
                  ))}
                </ScrollView>
              </View>
            </View>
            <View className={`w-full h-[300px] flex items-center justify-center`}>
              <View className={`w-full h-[12%] flex items-start px-2 justify-center`}>
                <Text className={`font-bold text-[20px]`}>Explore Local Deals</Text>
              </View>
              <View className={`flex-1 w-full h-[88%]`}>
                <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:"center", justifyContent: "center"}} className={`h-full`} horizontal={true}>
                  {localDealData.map((deal, index) => (
                    <LocalDealsComponent 
                      key={deal.store}
                      index={index}
                      {...deal}
                    />
                  ))}
                </ScrollView>
              </View>
            </View>
            <View className={`w-full h-[300px] flex items-center justify-center`}>
              <View className={`w-full h-[12%] flex items-start px-2 justify-center`}>
                <Text className={`font-bold text-[20px]`}>Featured Deals</Text>
              </View>
              <View className={`flex-1 w-full h-[88%]`}>
                <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:"center", justifyContent: "center"}} className={`h-full`} horizontal={true}>
                  {featuredDealData.map((deal, index) => (
                    <FeaturedDealsComponent 
                      key={deal.product}
                      index={index}
                      {...deal}
                    />
                  ))}
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default StudentHomeScreen;

const internatialDealData = [
  {
    store: "Apple",
    category: "Electronic Devices"
  },
  {
    store: "Samsung",
    category: "Electronic Devices"
  },
  {
    store: "Book World",
    category: "Electronic Devices"
  },
]

const localDealData = [
  {
    store: "ZUS Coffee",
    category: "Coffee Brewer",
  },
  {
    store: "Lotus",
    category: "Grocery Store",
  },
  {
    store: "Grab",
    category: "Ride Hailing Service",
  },
]

const featuredDealData = [
  {
    product: 'Macbook Air 13"',
    price: "RM 3500",
    store: "Apple"
  },
  {
    product: 'iPad Air',
    price: "RM 2500",
    store: "Apple"
  },
  {
    product: 'Flat White Coffee',
    price: "RM 3.50",
    store: "Zus Coffee"
  },
  {
    product: 'Pink Black',
    price: "RM 5.50",
    store: "Zus Coffee"
  },
]