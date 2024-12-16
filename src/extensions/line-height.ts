import { Extension } from "@tiptap/react";

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        lineHeight: {
            setLineHeight: (lineHeight: string) => ReturnType
            unsetLineHeight: () => ReturnType
        }
    }
}

export const LineHeightExtension = Extension.create({
    name: "lineHeight",
    addOptions() {
        return {
            types: ["paragraph", "heading"],
            defualtLineHeight: "normal",
        }
    },
    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    lineHeight: {
                        default: this.options.defualtLineHeight,
                        renderHTML: attributes => {
                            if (!attributes.lineHeight) {
                                return {};
                            }
                            return {
                                style: `line-height: ${attributes.lineHeight}`,
                            };
                        },
                        parseHTML: element => {
                            return element.style.lineHeight || this.options.defualtLineHeight;
                        }
                    }
                }
            }
        ]
    },
    addCommands() {
        return {
            setLineHeight: (lineHeight: string) => ({ tr, state, dispatch }) => {
                const { selection } = state;
                tr = tr.setSelection(selection);

                const { from, to } = selection;
                state.doc.nodesBetween(from, to, (node, pos) => {
                    if (this.options.types.includes(node.type.name)) {
                        tr = tr.setNodeMarkup(pos, undefined, {
                            ...node.attrs,
                            lineHeight,
                        })
                    }
                })

                if (dispatch) {
                    dispatch(tr);
                }
                return true;
            },
            unsetLineHeight: () => ({ tr, state, dispatch }) => {
                const { selection } = state;
                tr = tr.setSelection(selection);

                const { from, to } = selection;
                state.doc.nodesBetween(from, to, (node, pos) => {
                    if (this.options.types.includes(node.type.name)) {
                        tr = tr.setNodeMarkup(pos, undefined, {
                            ...node.attrs,
                            lineHeight: this.options.defualtLineHeight,
                        })
                    }
                })

                if (dispatch) {
                    dispatch(tr);
                }
                return true;
            }
        }
    },
})