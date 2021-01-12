import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'sendMail',
  initialState: {
    sendMailOpen:false ,
  },
  reducers: {
    sendMailOpenFun: state => {
     
      state.sendMailOpen = true;
    },
    sendMailCloseFun: state => {
      state.sendMailOpen = false;
    }
    
  },
});

export const { sendMailOpenFun, sendMailCloseFun } = counterSlice.actions;



export const SendMailValue = state => state.sendMailOpen;

export default counterSlice.reducer;
