import { useEffect, useState } from 'react'
import { defaultStore, fallbackPrices, fallbackServices } from '../data/siteData'
import { api } from '../services/api'

export function usePublicData(title) {
  const [services, setServices] = useState(fallbackServices)
  const [prices, setPrices] = useState(fallbackPrices)
  const [store, setStore] = useState(defaultStore)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = title
    Promise.all([api.getServices(), api.getPrices(), api.getStoreSettings()])
      .then(([serviceData, priceData, storeData]) => {
        if (serviceData?.length) setServices(serviceData)
        if (priceData?.length) setPrices(priceData)
        if (storeData) setStore({ ...defaultStore, ...storeData })
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [title])

  return { services, prices, store, loading, error }
}
