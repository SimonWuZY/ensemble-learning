"use client"
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { templates } from "@/constants/templates";
import { cn } from "@/lib/utils";
import { api } from "../../../convex/_generated/api";
import { toast } from "sonner";


export const TemplatesGallery = () => {
    const router = useRouter();
    const createDocument = useMutation(api.documents.createDocument);
    const [isCreating, setIsCreating] = useState(false);

    const onTemplateClick = (title: string, initialContent: string) => {
        setIsCreating(true);
        createDocument({ title, initialContent })
            .catch(() => toast.error("出现了一些问题"))
            .then((documentId) => {
                router.push(`/documents/${documentId}`);
                toast.success("文档创建成功！");
            })
            .finally(() => {
                setIsCreating(false);
            })
    }

    return (
        <div className="bg-[#F1F3F4]">
            <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-y-4">
                <h3 className="font-medium">
                    开始一篇新文档
                </h3>
                <Carousel>
                    <CarouselContent className="-ml-4">
                        {templates.map((template) =>
                            <CarouselItem
                                key={template.id}
                                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.285714%] pl-4"
                            >
                                <div
                                    className={cn(
                                        "aspect-[3/4] flex flex-col gap-y-2.5",
                                        isCreating && "pointer-events-none opacity-50"
                                    )}
                                >
                                    <button
                                        disabled={isCreating}
                                        onClick={() => onTemplateClick(template.label, template.initialContent)}
                                        style={{
                                            backgroundImage: `url(${template.imageUrl})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                        }}
                                        className="size-full hover:border-blue-500 rounded-md border hover:bg-blue-50 transition flex flex-col items-center justify-center  gap-y-4 bg-white"
                                    />
                                    <p className="text-sm font-medium truncate">
                                        {template.label}
                                    </p>
                                </div>
                            </CarouselItem>
                        )}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}