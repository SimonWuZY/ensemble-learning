"use client"

import { useQuery } from "convex/react"
import { Navbar } from "./navbar"
import { TemplatesGallery } from "./templates-gallrey"
import { api } from "../../../convex/_generated/api"


const Home = () => {
  const documents = useQuery(api.documents.getDocuments);

  if (documents == undefined) {
    return (
      <p>加载中</p>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        {documents?.map((document) => (
          <span
            key={document._id}
          >{document.title}</span>
        ))}
      </div>

    </div>
  )
}

export default Home
