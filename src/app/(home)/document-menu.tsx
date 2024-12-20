import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, MoreVertical, TrashIcon, FilePenIcon } from "lucide-react"
import { Id } from "../../../convex/_generated/dataModel";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RemoveDialog } from "@/components/remove-dialog";
import { RenameDialog } from "@/components/rename-dialog";

interface DocumentMenuProps {
    documentId: Id<"documents">;
    title: string;
    onNewTab: (id: Id<"documents">) => void;
}

export const DocumentMenu = ({
    documentId,
    title,
    onNewTab
}: DocumentMenuProps) => {
    return (
        <DropdownMenu>
            {/* 因为 DropdownMenuTrigger 是一个按钮 而里面也要渲染按钮 所以需要加 asChild 防止渲染错误 */}
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreVertical className="size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <RenameDialog documentId={documentId} initialTitle={title}>
                    {/* 防止闪退的操作 */}
                    <DropdownMenuItem
                        onSelect={(e) => e.preventDefault()}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FilePenIcon className="size-4 mr-2" />
                        重命名
                    </DropdownMenuItem>
                </RenameDialog>
                <RemoveDialog documentId={documentId}>
                    {/* 防止闪退的操作 */}
                    <DropdownMenuItem
                        onSelect={(e) => e.preventDefault()}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <TrashIcon className="size-4 mr-2" />
                        删除
                    </DropdownMenuItem>
                </RemoveDialog>
                <DropdownMenuItem
                    onClick={() => onNewTab(documentId)}
                >
                    <ExternalLinkIcon className="size-4 mr-2" />
                    Open in a new tab
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}