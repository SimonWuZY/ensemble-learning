"use client"
import { useState } from "react";

import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Id } from "../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

interface RemoveDialogProps {
    documentId: Id<"documents">;
    children: React.ReactNode;
};

export const RemoveDialog = ({ documentId, children }: RemoveDialogProps) => {
    const remove = useMutation(api.documents.removeDocumentById);
    const [isRemoving, setIsRemoving] = useState(false);

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                <AlertDialogHeader>
                    <AlertDialogTitle>你确认删除此文档吗</AlertDialogTitle>
                    <AlertDialogDescription>
                        此操作将永久性从你的账号上删除此文档
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
                        取消
                    </AlertDialogCancel>
                    <AlertDialogAction
                        disabled={isRemoving}
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsRemoving(true);
                            remove({ id: documentId })
                                .finally(() => setIsRemoving(false));
                        }}

                    >
                        删除
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
} 