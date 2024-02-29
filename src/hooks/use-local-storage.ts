const useLocalStorage = () => {
  /**
   * 로컬 스토리지 데이터 추출.
   */
  const getLocalStorageData = (key: string) => {
    if (typeof window === 'undefined') {
      return null
    }
    const data = localStorage?.getItem(key)
    return data === 'undefined' ? null : data ? JSON.parse(data) : null
  }

  /**
   * 로컬 스토리지 데이터 삽입.
   */
  const setLocalStorageData = (key: string, data: unknown) => {
    if (typeof window === 'undefined') {
      return
    }
    localStorage?.setItem(key, JSON.stringify(data))
  }

  return {
    getLocalStorageData,
    setLocalStorageData,
  }
}

export default useLocalStorage
