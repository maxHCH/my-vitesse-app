import { acceptHMRUpdate, defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

interface Options {
  name: string
  value: string
  checked: boolean
}

export const useCardStore = defineStore('card', () => {
  const { t } = useI18n()
  const options: Options[] = reactive([
    {
      name: t('options.date'),
      value: 'date',
      checked: false,
    },
    {
      name: t('options.tags'),
      value: 'tags',
      checked: false,
    },
  ])

  const cardList = computed(() => options.filter(item => item.checked))

  function setCheckedOption(value: string) {
    const item = options.find(item => item.value === value)
    if (item)
      item.checked = !item.checked
  }

  return {
    options,
    setCheckedOption,
    cardList,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCardStore as any, import.meta.hot))
