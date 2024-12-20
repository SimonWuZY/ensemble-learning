"use client"
import { useState } from "react";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Id } from "../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface RenameDialogProps {
    documentId: Id<"documents">;
    initialTitle: string
    children: React.ReactNode;
};

export const RenameDialog = ({ documentId, initialTitle, children }: RenameDialogProps) => {
    const update = useMutation(api.documents.updateDocumentById);
    const [isUpdating, setIsUpdating] = useState(false);

    const [title, setTitle] = useState(initialTitle);
    const [open, setOpen] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsUpdating(true);

        update({ id: documentId, title: title.trim() || "未命名文档" })
            .then(() => setOpen(false))
            .finally(() => {
                setIsUpdating(false);
            })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent onClick={(e) => e.stopPropagation()}>
                <form onSubmit={onSubmit}>
                    <DialogHeader>
                        <DialogTitle>重命名文档</DialogTitle>
                        <DialogDescription>
                            输入文档的新名称
                        </DialogDescription>
                    </DialogHeader>
                    <div className="my-4">
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="文档的新名字"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                    <DialogFooter>
                        <Button
                            type="button"
                            variant="ghost"
                            disabled={isUpdating}
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpen(false);
                            }}
                        >
                            取消
                        </Button>
                        <Button
                            type="submit"
                            disabled={isUpdating}
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            保存
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>
    )
} 