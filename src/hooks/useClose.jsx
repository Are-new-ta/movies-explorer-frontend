import { useEffect } from 'react'

const useClose = (isOpen, handleClose) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleESC = (evt) => {
      if (evt.key === "Escape") {
        handleClose()
      }
    }
    document.addEventListener('keydown', handleESC);
    return () => document.removeEventListener('keydown', handleESC);
  }, [handleClose]);//изначально отслежвался только isOpen, после ош бок в eslint добавила хендл
}

export default useClose;