"use client";

import BottomNavBar from "@/components/bottom-narbar";
import { useXAgent, useXChat } from '@ant-design/x';
import { Flex } from 'antd';
import React, { useState, useEffect } from 'react';
import CenteredProps from "./center-props";
import ChatMessages from "./chat-message";
import ChatInput from "./chat-input";
import { ChatNavBar } from "./chat-navbar";

const ChatPage = () => {
    const [content, setContent] = useState('');
    const [isCentered, setIsCentered] = useState(true);

    // Agent for request
    const [agent] = useXAgent({
        request: async ({ message }, { onSuccess, onUpdate }) => {
            const fullContent = `Streaming output instead of Bubble typing effect. You typed: ${message}`;
            let currentContent = '';

            const id = setInterval(() => {
                currentContent = fullContent.slice(0, currentContent.length + 2);
                onUpdate(currentContent);

                if (currentContent === fullContent) {
                    clearInterval(id);
                    onSuccess(fullContent);
                }
            }, 100);
        },
    });

    // Chat messages
    const { onRequest, messages } = useXChat({
        agent,
    });

    useEffect(() => {
        if (content.length > 0) {
            setIsCentered(false);
        }
    }, [content]);

    const handlePromptClick = (promptContent: string) => {
        setContent(promptContent);
        setIsCentered(false);
        onRequest(promptContent);
    };

    return (
        <div className="h-screen flex flex-col">
            <div>
                <ChatNavBar />
            </div>
            <Flex vertical gap="middle" className={`flex-1 ${isCentered ? 'justify-center' : 'justify-start'}`}>
                {isCentered && <CenteredProps onPromptClick={handlePromptClick} />} {/* 条件渲染 CenteredMessage 组件 */}
                {!isCentered && <ChatMessages messages={messages} />}
                <ChatInput
                    content={content}
                    isCentered={isCentered}
                    agent={agent}
                    onRequest={onRequest}
                    setContent={setContent}
                />
            </Flex>
            <BottomNavBar />
        </div>
    );
};

export default ChatPage;