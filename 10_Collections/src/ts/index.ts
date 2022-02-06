// import {createStore} from './store';
//
// type State = {
//     isLoading: boolean,
//     data: Record<string, any>[]
// }
//
// const initialState: State = {
//     isLoading: false,
//     data: []
// }
// const store = createStore({initialState: {}})
//
// //console.log(store)
// const unsubscribe = store.subscribe(() => {
//     console.log('store changed')
// })
//
// store.setState({isLoading: true, data: [{}]})
// store.setState({isLoading: true, data: [{}]})
// store.setState({isLoading: true, data: [{}]})
// unsubscribe()
// store.setState({isLoading: true, data: [{}]})

// interface Test {
//     start: () => void
//     stop: () => void
// }
//
// class Car implements Test{
//     start(): void {
//         console.log('Start')
//     }
//
//     stop(): void {
//     }
// }
//
// const car = new Car()
// car.start();