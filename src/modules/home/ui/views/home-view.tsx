"use client"
import { Button } from '@/components/ui/button'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'

const HomeView = () => {
  const router=useRouter()
  const { data: session } = authClient.useSession();

  if(!session) {
    return (
      <div className="flex flex-col gap-y-10">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold">Loading...</h1>
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold">Hello {session?.user?.name}</h1>
      </div>
      <Button onClick={() => authClient.signOut({fetchOptions:{
        onSuccess:()=>{
          router.push('/sign-in')
        }
      }})}>Sign out</Button>
    </div>
  )
}

export default HomeView