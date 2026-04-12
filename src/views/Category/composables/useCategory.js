import { getCategoryAPI } from '@/apis/category'
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory () {
  const categoryData = ref([])
  const route = useRoute()
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }

  onMounted(() => getCategory())
  //路由更新前守卫检测变化
  onBeforeRouteUpdate((to) => {
  getCategory(to.params.id)
  })
  return {
    categoryData
  }
}