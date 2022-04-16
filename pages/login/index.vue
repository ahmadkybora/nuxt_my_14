<template>
 <div class="h-screen flex bg-blue-200">
    <div class="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
      <H class="text-2xl font-medium text-primary mt-4 mb-12 text-center" value="Log in to your account 🔐" />
      <form>
        <div>
            <input 
              type="text" 
              name="username" 
              class="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" 
              id="username" 
              placeholder="UserName ..."
            />
            <input 
              type="password" 
              name="password" 
              class/>
        </div>
      </form>
    </div>
</div>
</template>

<script>
import { H } from '../../utils/tools'
export default {
  name: 'Index',
  component: {H},
  data() {
    return {
    }
  },
}
</script>
<style scoped>
</style>