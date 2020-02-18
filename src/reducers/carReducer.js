const initialState = {

  additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]

}

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUY_ITEM':
      const addedFeature = action.payload
      return {
       
        ...state,
        additionalPrice: (state.additionalPrice + addedFeature.price),
        car: {
          ...state.car,
          features: [...state.car.features, addedFeature]
        }
      };

      case 'REMOVE_FEATURE':
        const removeFeature = action.payload
        console.log("feature to remove", removeFeature)
        return {
          ...state,
          additionalPrice: (state.additionalPrice - removeFeature.price), 
          car:{
            ...state.car, 
            features: [...state.car.features.filter((feature) => {
              if(feature.id === removeFeature.id)
              return null;
              else return feature;
            })]
          }
        }
    default:
      return state;
  }
};
