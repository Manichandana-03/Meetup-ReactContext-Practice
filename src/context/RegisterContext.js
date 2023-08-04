import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  activeTopic: 'Education and Learning',
  isRegistered: false,
  showError: false,
  changeName: () => {},
  changeTopic: () => {},
  registerName: () => {},
  updateError: () => {},
})
export default RegisterContext
