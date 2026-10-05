createSlice is a function provided by Redux Toolkit that lets you define a specific piece of your application's global state in one clean, self-contained file.

Reducers are the functions that define how the data changes.

store provider - StoreProvider is a custom React component and it is used to inject Redux store into the component tree | our application

createAsyncThunk -  A function that accepts a Redux action type string and a callback function that should return a promise

callback - A callback function that should return a promise containing the result of some asynchronous logic

thunkAPI: an object containing all of the parameters that are normally passed to a Redux thunk function, as well as additional options: dispatch, getState, extra, requestId, signal, rejectWithValue(value, [meta]), fulfillWithValue(value, meta)

https://fakestoreapi.noksha.dev/api/products