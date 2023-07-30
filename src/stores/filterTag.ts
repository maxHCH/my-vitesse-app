import { acceptHMRUpdate, defineStore } from 'pinia'

interface Tag {
  value: string
  checked: boolean
}

export const useTagStore = defineStore('tags', () => {
  const tags: Tag[] = reactive([
    {
      value: '龍舌蘭',
      checked: false,
    },
    {
      value: '陽台',
      checked: false,
    },
    {
      value: '房間',
      checked: false,
    },
    {
      value: '大戟',
      checked: false,
    },
    {
      value: '竹夾',
      checked: false,
    },
    {
      value: '樓頂',
      checked: false,
    },
  ])

  const checkedTagList = computed(() => tags.filter(item => item.checked))
  const tagValueList = computed(() => tags.map(item => item.value))

  function tagsHandler(value: string, isRemove = false) {
    isRemove ? removeTag(value) : addTag(value)
  }

  function addTag(value: string) {
    tags.push({
      value,
      checked: false,
    })
    sortTags()
  }

  function removeTag(value: string) {
    const idx = tagValueList.value.indexOf(value)
    tags.splice(idx, 1)
  }
  function sortTags() {
    tags.sort()
  }

  function checkedTag(value: string) {
    const item = tags.find(item => item.value === value)
    if (item)
      item.checked = !item.checked
  }

  return {
    tags,
    checkedTagList,
    tagsHandler,
    checkedTag,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTagStore as any, import.meta.hot))
