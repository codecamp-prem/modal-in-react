import { useState } from 'react'
import { CustomModal } from './CustomModal'
import { DialogModel } from './DialogModel'

function App() {
  const [customModelOpen, setCustomModelOpen] = useState(false)
  const [dialogModelOpen, setDialogModelOpen] = useState(false)

  return (
    <>
      <button onClick={() => setCustomModelOpen(true)}>Show Custom Modal</button>
      <br />
      <br />
      <button onClick={() => setDialogModelOpen(true)}>Show Dialog Modal</button>

      <CustomModal 
      isOpen={customModelOpen}
      onClose={() => setCustomModelOpen(false)}
      >
        <p>This is a <strong>CUSTOM</strong> modal</p>
        <button onClick={() => setCustomModelOpen(false)}>Close</button>
      </CustomModal>

      <DialogModel
      isOpen={dialogModelOpen}
      onClose={() => setDialogModelOpen(false)}
      >
        <p>This is a <strong>DIALOG</strong> modal</p>
        <button onClick={() => setDialogModelOpen(false)}>Close</button>
      </DialogModel>
    </>
  )
}

export default App
