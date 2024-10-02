import axios from 'axios'
import { ref } from 'vue'

const getFacts = () => {
  const cat = ref(null)

  const load = () => {
    axios.get('https://catfact.ninja/fact').then((res) => {
      cat.value = res.data.fact
      console.log(cat.value)
    })
  }

  return { cat, load }
}

export default getFacts
