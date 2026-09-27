'use client';

import { RiLoader4Line } from "react-icons/ri";

import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog"


const LoaderModal = ({ openLoaderModal, setOpenLoaderModal, loaderText }) => {
  return (
    <AlertDialog open={openLoaderModal} onOpenChange={setOpenLoaderModal}>

      <AlertDialogContent className='bg-violet-950'>

        <AlertDialogHeader>

          <AlertDialogTitle></AlertDialogTitle>

          <AlertDialogDescription className='flex flex-col gap-3 items-center justify-center'>

            <RiLoader4Line className='size-20 text-6xl text-white transition-all duration-1000 animate-spin' />
            
            <span className="text-white text-base">{loaderText}</span>

          </AlertDialogDescription>

        </AlertDialogHeader>

      </AlertDialogContent>

    </AlertDialog>
  )
}


export default LoaderModal;