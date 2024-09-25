import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { SearchCheckIcon } from 'lucide-react'

const Searchbox = () => {
  return (
    <Dialog>
        <DialogTrigger>
            <SearchCheckIcon size={26} cursor={"pointer"}>

            </SearchCheckIcon>
        </DialogTrigger>
        <DialogContent>
            <form>
                <input type="text" placeholder="Search product" className="block w-full bg-gray-300 rounded-lg px-6 py-2 mt-4 outline-none" />


            </form>
        </DialogContent>
    </Dialog>
  )
}

export default Searchbox