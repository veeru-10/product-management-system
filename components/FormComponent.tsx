'use client'
import { Upload, ArrowBigDownDash  } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import Image from 'next/image'

export default function FormComponent() {

  const [imageFile, setImageFile ] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl ] = useState<string | null>(null);

  const handleFileChange = (e : ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if(file) {
      setImageFile(file)
      const objectUrl = URL.createObjectURL(file) 
      setPreviewUrl(objectUrl)
    }
  };

  const handleDownload = async(fileUrl : string, fileName : string) => {
    try {
      const response = await fetch(fileUrl); // send a request to get file data which is stored in browser
      if(!response.ok) {
        throw new Error("failed to load the image")
      }
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      // link.setAttribute("href", blobUrl) --> another approach
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link)
      URL.revokeObjectURL(blobUrl); // remove url from memory to prevent memory leaks
    } catch (error) {
      console.error("Failed to download image:", error);
    }
  };

  return(
    <>
      <div className="max-w-lg w-full mx-auto">
        <p className="text-center font-bold text-4xl bg-black/10 mb-4 py-4">Form Page</p>
        <div>

          <div className="mb-3">
            <label htmlFor="title" className="block text-gray-500 text-sm mb-2">Title</label>
            <input type="text" id="title" className="border border-black/50 focus:outline-amber-500/50 rounded px-2 py-1 placeholder:text-sm w-full" placeholder="title..."/>
          </div>

          <div className="mb-3">
            <label htmlFor="Description" className="block text-gray-500 text-sm mb-2">Description</label>
            <textarea 
            id="title" 
            className="border border-black/50 focus:outline-amber-500/50 rounded px-2 py-1 text-black/50 text-sm min-h-[30px] max-h-[100px] w-full"
            placeholder='description...'
            ></textarea>
          </div>
          <div className="flex items-center justify-center w-full bg-gray-100 border border-gray-300 rounded">
            
            <label htmlFor="upload" className="block text-gray-500 text-sm mb-2 cursor-pointer">
              <div className="flex flex-col items-center justify-center text-body py-4">
                < Upload size={20}/>
                <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              </div> 
            </label>
            <input 
            id="upload" 
            type="file" 
            className="hidden"
            onChange={handleFileChange}/>
          </div>
          {
            previewUrl && (
              <div className='flex flex-col items-start'>
                <Image 
                  src={previewUrl}
                  width={100}
                  height={100}
                  alt="Preview"
                  className="object-cover mt-4"
                />
              <p className='text-xs text-blue-500'>{imageFile?.name}</p>
              <button 
              className='bg-red-300 border-red-500 p-4 py-2 flex mt-4 cursor-pointer
              '
              onClick={() => handleDownload(previewUrl as string, imageFile?.name || "download.jpg")}
              >
                <span className='me-2'>
                < ArrowBigDownDash />
                </span>download
              </button>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}